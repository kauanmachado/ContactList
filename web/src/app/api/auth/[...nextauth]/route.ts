import { axiosInstance } from "@/services/AxiosConfig"
import { UserServices } from "@/services/UserService"
import NextAuth, { Awaitable, NextAuthOptions, RequestInternal, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signIn } from "next-auth/react"
const userServices = new UserServices()

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined, req: Pick<RequestInternal, "body" | "query" | "headers" | "method">): Promise<User | null> {
                try {
                    const response = await userServices.SignIn(credentials)
                    const user = response.data
                
                    if (user && response.status === 200) {
                        return user
                    }
                    
                    return null
                } catch (error) {
                    console.error("Error signing in:", error);
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/sign-in'
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
