import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserSignInForm } from "@/components/user-signin-form"
import { Metadata } from "next"
import { Tent } from "lucide-react"
import { LocaleLink } from "@/components/localeLink"
import { PageProps } from "@/types/pageProps"
import { LocaleProps } from "@/types/localeProps"

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
  }

const SignInPage = ({params}:PageProps<LocaleProps>) => {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <LocaleLink href={'/signup'} className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}>
            Sign Up
      </LocaleLink>
      <div className="hidden h-full bg-red-100 lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Tent className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
            </p>
          </div>
          <UserSignInForm lng={params.lng}/>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;