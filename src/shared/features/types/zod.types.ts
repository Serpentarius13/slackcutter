import z from "zod";

export const refineDoublePasswordSchema = (
  schema: z.ZodObject<{ password: any; confirmPassword: any }>,
) => {
  return schema.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
};

export const passwordRegex = z
  .string()
  .min(8, "Password should have at least 8 symbols")
  .regex(
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/,
    "Passwords should have one special symbol and a digit",
  );

export const confirmPasswordSchema = refineDoublePasswordSchema(
  z.object({
    password: passwordRegex,
    confirmPassword: passwordRegex,
  }),
);

export const emailSchema = z.object({
  email: z.string().nonempty("Enter your email").email("Enter correct email"),
});

export type TEmailData = z.infer<typeof emailSchema>;
export type TConfirmPasswordData = z.infer<typeof confirmPasswordSchema>;
