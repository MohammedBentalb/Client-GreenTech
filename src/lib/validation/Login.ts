import z from "zod";

export const logInSchema = z.object({
    email: z.email({message: "Invalid Email Format"}),
    password: z.string().min(6,{message: "password Too Short"})
})

export type TLogInSchema = z.infer<typeof logInSchema>
