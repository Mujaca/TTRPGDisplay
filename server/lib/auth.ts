import { prisma as client } from "./db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
    database: prismaAdapter(client, { provider: "postgresql" }),
    experimental: {
        joins: true
    },
    baseURL: "http://localhost:3000/",
    emailAndPassword: { enabled: true },
    socialProviders: {
        discord: {
            clientId: process.env.DISCORD_CLIENT_ID!,
            clientSecret: process.env.DISCORD_CLIENT_SECRET!,
        },
        //google: {
        //    clientId: process.env.GOOGLE_CLIENT_ID!,
        //    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        //},
    },
    plugins: [admin()],
});
