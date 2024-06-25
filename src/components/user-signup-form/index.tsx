'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';

import { cn } from '@/lib/utils';
import { userSignUpSchema } from '@/lib/validations/auth';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Loader2Icon } from 'lucide-react';

interface UserSignUpFormProps extends React.HTMLAttributes<HTMLDivElement> {
  lng: string;
}

type FormData = z.infer<typeof userSignUpSchema>;

export function UserSignUpForm({ className, lng, ...props }: UserSignUpFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSignUpSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    if (data.password !== data.confirmPassword) {
      setIsLoading(false);
      return toast({
        title: 'Passwords do not match',
        description: 'Please ensure the passwords match.',
        variant: 'destructive',
      });
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
          passwordConfirm: data.confirmPassword,
        }),
      });

      const responseBody = await response.json();

      if (!response.ok) {
        throw new Error(responseBody.message || 'Unknown error');
      }

      // Automatically sign in the user after successful sign-up
      const signInResult = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (signInResult?.error) {
        throw new Error(signInResult.error);
      }

      router.push(`/${lng}`);
      toast({
        title: 'Sign up successful',
        description: 'You have successfully signed up.',
        variant: 'default',
      });
    } catch (error: any) {
      setIsLoading(false);
      console.error('Error during sign up:', error);
      return toast({
        title: 'Something went wrong.',
        description: error.message || 'Your sign-up request failed. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Your username"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
              disabled={isLoading}
              {...register('username')}
            />
            {errors?.username && (
              <p className="px-1 text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Your password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm your password"
              type="password"
              autoCapitalize="none"
              autoComplete="new-password"
              autoCorrect="off"
              disabled={isLoading}
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up with Email
          </button>
        </div>
      </form>
    </div>
  );
}