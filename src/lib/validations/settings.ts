import { z } from 'zod';

export const settingsSchema = z.object({
  society: z.string().nonempty({ message: "Society is required" }),
  venue: z.string().nonempty({ message: "Venue is required" }),
  startDate: z.date({ required_error: "Start date is required" }),
  endDate: z.date({ required_error: "End date is required" }),
  cheers: z.string().nonempty({ message: "Cheers is required" }),
});