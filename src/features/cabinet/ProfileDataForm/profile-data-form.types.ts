import z from "zod";
import { confirmPasswordSchema, emailSchema } from "~/src/shared/features/types/zod.types";

export const profileDataFormSchema = emailSchema.extend(confirmPasswordSchema);

export type TProfileData = z.infer<typeof profileDataFormSchema>;
