import * as z from "zod";

export const ninVerificationSchema = z
  .object({
    nin_no: z.coerce
      .number()
      .min(11, { message: "Identification minimum length is 11" }),
  })
  .required();

export const bvnVerificationSchema = z
  .object({
    bvn_no: z.coerce
      .number()
      .min(11, { message: "Identification minimum length is 11" }),
  })
  .required();

export const poaVerificationSchema = z
  .object({
    utility_type: z.string({ message: "Utility type cannot be empty" }),
  })
  .required();

export const profileUpdateSchema = z.object({
  title: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export const passwordUpdateSchema = z.object({
  password: z.string(),
});

export const completeProfileSchema = z
  .object({
    title: z.string(),
    gender: z.string(),
  })
  .required();

export const classBookingSchema = z.object({
  start_date: z.date(),
  duration: z.string(),
  days: z.array(z.object({ day: z.string(), time: z.string() })),
  gender: z.string(),
  location: z.string(),
});

export const childProfileSchema = z.object({
  class: z.string(),
  goal: z.string(),
  subjects: z.array(z.object({ name: z.string() })),
});

export const rescheduleClassSchema = z.object({
  reason: z.string(),
  start_date: z.date(),
});

export type NinVerificationFormValues = z.infer<typeof ninVerificationSchema>;
export type BvnVerificationFormValues = z.infer<typeof bvnVerificationSchema>;
export type PoaVerificationFormValues = z.infer<typeof poaVerificationSchema>;
export type ProfileUpdateFormValues = z.infer<typeof profileUpdateSchema>;
export type PasswordFormValues = z.infer<typeof passwordUpdateSchema>;
export type CompleteProfileFormValues = z.infer<typeof completeProfileSchema>;
export type ClassBookingFormValues = z.infer<typeof classBookingSchema>;
export type ChildProfileFormValues = z.infer<typeof childProfileSchema>;
export type RescheduleClassFormValues = z.infer<typeof rescheduleClassSchema>;
