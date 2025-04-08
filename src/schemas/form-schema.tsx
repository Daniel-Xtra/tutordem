import * as z from "zod";

export const ninVerificationSchema = z
  .object({
    nin_no: z.coerce
      .string()
      .min(11, { message: "Identification minimum length is 11" }),
  })
  .required();

export const bvnVerificationSchema = z
  .object({
    bvn_no: z.coerce
      .string()
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

export const sendTutorMessageSchema = z.object({
  message: z.string(),
});

export const tutorCompleteProfileSchema = z
  .object({
    subjects: z.array(z.object({ subject: z.string() })),
    exams: z.array(z.object({ exam: z.string() })),
    availablity: z.array(z.object({ day: z.string(), time: z.string() })),
    proficiency_level: z.string(),
    hourly_rate: z.string(),
    school: z.string(),
    certificate_title: z.string(),
    start_date: z.date(),
    end_date: z.date(),
  })
  .required();

export const accountDetailsSchema = z.object({
  account_number: z.string(),
  bank_name: z.string(),
  withdrawal_automation: z.string(),
});

export const uploadResourcesSchema = z.object({
  title: z.string(),
  description: z.string(),
  grade: z.string(),
  subject: z.string(),
});

export const addCredentialSchema = z.object({
  school: z.string(),
  certificate_title: z.string(),
  start_date: z.date(),
  end_date: z.date(),
});

export const feeSchema = z.object({
  hourly_rate: z.string(),
});

export const teachingProfileSchema = z.object({
  summary: z.string(),
  about: z.string(),
  subjects: z.array(z.object({ subject: z.string() })),
  levels: z.array(z.object({ level: z.string() })),
  proficiency_level: z.string(),
});

export const tutorProfileFormValues = z.object({
  proficiency_level: z.string(),
  subjects: z
    .array(
      z.object({
        subject: z.string({
          required_error: "Subject is required",
        }),
      })
    )
    .min(1, "Please select at least one subject"),
  about: z.string(),
  state: z.string({ required_error: "State is required" }),
  address: z.string({ required_error: "Address is required" }),
});

export const addFeedbackSchema = z.object({
  feedback: z
    .string({ required_error: "Feedback is required" })
    .max(25, { message: "Feedback must be less than 25 characters" }),
});

export const createQuizSchema = z.object({
  name: z.string().min(1, "Quiz name is required"),
  subject: z.string().min(1, "Subject is required"),
  grade: z.string().min(1, "Grade is required"),
  visibility: z.string().min(1, "Visibility is required"),
  no_of_questions: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Number of questions must be a positive number",
    }),
  time: z.string().min(1, "Time is required"),
  // questions: z.array(
  //   z.object({
  //     question: z.string().min(1, "Question is required"),
  //     image: z.string().optional(),
  //     passage: z.string().optional(),
  //     options: z.array(
  //       z.object({
  //         option: z.string().min(1, "Option is required"),
  //         text: z.string().min(1, "Text is required"),
  //         isCorrect: z.boolean(),
  //       })
  //     ),
  //   })
  // ),
});

export const sessionCommentSchema = z.object({
  comment: z.string(),
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
export type SendTutorMessageSchema = z.infer<typeof sendTutorMessageSchema>;
export type TutorCompleteProfileSchemaFormValues = z.infer<
  typeof tutorCompleteProfileSchema
>;
export type AccountDetailsFormValues = z.infer<typeof accountDetailsSchema>;
export type UploadResourcesFormValues = z.infer<typeof uploadResourcesSchema>;
export type AddCredentialFormValues = z.infer<typeof addCredentialSchema>;
export type FeeFormValues = z.infer<typeof feeSchema>;
export type TeachingProfileSchema = z.infer<typeof teachingProfileSchema>;
export type TutorProfileFormValues = z.infer<typeof tutorProfileFormValues>;
export type AddFeedbackFormValues = z.infer<typeof addFeedbackSchema>;
export type CreateQuizFormValues = z.infer<typeof createQuizSchema>;
export type SessionCommentFormValues = z.infer<typeof sessionCommentSchema>;
