import z from "zod";

const passwordRegex = z
  .string()
  .min(8, "Password should have at least 8 symbols")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
    "Passwords should have one special symbol and a digit"
  );

export const registerSchema = z.object({
  email: z.string().nonempty("Enter your email").email("Enter correct email"),
});

export const registerCompleteSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const passwordRestoreSchema = z
  .object({
    password: passwordRegex,
    confirmPassword: passwordRegex,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

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
export type TRegisterData = z.infer<typeof registerSchema>;
export type TRegisterCompleteData = z.infer<typeof registerCompleteSchema>;
export type TPasswordRestoreSchema = z.infer<typeof passwordRestoreSchema>;
