import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const admin = await prisma.admin.findUnique({
                    where: { email: credentials.email }
                })

                if (!admin) {
                    return null
                }

                const isValid = await bcrypt.compare(credentials.password, admin.password)

                if (!isValid) {
                    return null
                }

                return { id: admin.id, email: admin.email }
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async session({ session, token }) {
            if (session?.user && token?.sub) {
                session.user.id = token.sub
            }
            return session
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id
            }
            return token
        }
    },
    secret: process.env.NEXTAUTH_SECRET || 'supersecretItems',
    session: {
        strategy: "jwt",
    },
    cookies: {
        sessionToken: {
            name: `next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === 'production'
            }
        }
    }
})

export { handler as GET, handler as POST }
