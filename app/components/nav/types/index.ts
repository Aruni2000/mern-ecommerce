import { User } from "@prisma/client";

export type SafeUser = Omit<User,
"ceatedAt" | "updatedAt" |
"emailVerfied"> & {
    createdAt: string;
    updateAt: string;
    emailVerified: string | null;
}