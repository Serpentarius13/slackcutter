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

export const registerCompleteSchema = z.object({
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
});

export const loginSchema = z.object({
  email: z.string().nonempty("Enter your email").email("Enter correct email"),

  password: z.string().nonempty("Enter your password"),
});

export type TLoginData = z.infer<typeof loginSchema>;
export type TRegisterData = z.infer<typeof registerSchema>;
export type TRegisterCompleteData = z.infer<typeof registerCompleteSchema>;
