"use client";

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { settingsSchema } from '@/lib/validations/settings';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useToast } from '@/components/ui/use-toast'; // Assuming you have a Toast component in ShadCN UI
import { DatePickerWithRange } from '../date-picker-with-range';

type SettingsFormData = z.infer<typeof settingsSchema>;

const SettingsForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
  });

  const { toast } = useToast();

  const onSubmit = (data: SettingsFormData) => {
    console.log(data);
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully saved.",
      status: "success",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Label htmlFor="society">Society</Label>
        <Input id="society" {...register("society")} />
        {errors.society && <p className="text-red-600">{errors.society.message}</p>}
      </div>
      <div className="mb-4">
        <Label htmlFor="venue">Venue</Label>
        <Input id="venue" {...register("venue")} />
        {errors.venue && <p className="text-red-600">{errors.venue.message}</p>}
      </div>
      <div className="mb-4">
        <Label htmlFor="dateRange">Date Range</Label>
        <Controller
          name="dateRange"
          control={control}
          render={({ field }) => (
            <DatePickerWithRange
              date={field.value}
              onChange={field.onChange}
            />
          )}
        />
        {errors.dateRange && (
          <p className="text-red-600">
            {errors.dateRange.start?.message || errors.dateRange.end?.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <Label htmlFor="cheers">Cheers</Label>
        <Input id="cheers" {...register("cheers")} />
        {errors.cheers && <p className="text-red-600">{errors.cheers.message}</p>}
      </div>
      <Button type="submit">Save Settings</Button>
    </form>
  );
};

export default SettingsForm;