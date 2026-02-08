import z from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, {message: "Name Too Short"}),
    email: z.email({message: "Invalid Email"}),
    password: z.string().min(8, {message: "Password Too Short"}),
    confirmationPassword: z.string({message: "Invalid Confermition Password"}),
}).refine((data) => data.password === data.confirmationPassword, {
    message: "Passwords don't match",
    path: ['confirmationPassword']
})


export type TRegisterSchema = z.infer<typeof registerSchema>