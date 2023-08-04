import z from "zod";
import { passwordRegex, refineDoublePasswordSchema } from "~/src/shared/features/types/zod.types";

export const registerCompleteSchema = refineDoublePasswordSchema(
  z.object({
    firstName: z
      .string()
      .nonempty("Enter your first name please")
      .max(100, "Names should not be more than 100 symbols"),

    lastName: z
      .string()
      .nonempty("Enter your last name please")
      .max(100, "Names should not be more than 100 symbols"),

    password: passwordRegex,
    confirmPassword: passwordRegex,
  }),
);

export const loginSchema = z.object({
  email: z.string().nonempty("Enter your email").email("Enter correct email"),

  password: z.string().nonempty("Enter your password"),
});

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  verified: boolean;
  created: string;
}

export type TConfirmationCodeData = {
  code: string;
  email: string;
};

export type TRegisterCompleteDTO = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type TLoginData = z.infer<typeof loginSchema>;

export type TRegisterCompleteData = z.infer<typeof registerCompleteSchema>;
