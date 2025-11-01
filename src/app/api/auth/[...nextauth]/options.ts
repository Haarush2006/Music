import { UserModel } from "@/schema/user";
import bcrypt from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";
import connectdb from "@/lib/connectdb";
import { NextAuthOptions } from 'next-auth';


export const authOptions: NextAuthOptions  = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email or Mobile", type: "text" },
        password: { label: "Password", type: "password", optional: true },
        otp: { label: "OTP", type: "text", optional: true },
      },
      async authorize(credentials) {

        try {
            
            await connectdb()
    
            if (!credentials) {
              throw new Error("Missing credentials");
            }

            const { identifier, password, otp } = credentials;
            const user = await UserModel.findOne({
                $or: [{ email: identifier }, { password: identifier }],
            });
    
    
            if (!user) {
                throw new Error("User not found");
            }
            
            if (password) {
                // Verify password
                const isValidPassword = await bcrypt.compare( password,user.password);
                if (!isValidPassword) {
                    throw new Error("Incorrect Password");
                }
            } else if (otp) {
                // Verify OTP
                const isValidOtp = (otp === user.verifyCode && user.expiryDate > Date.now())
                if (!isValidOtp) {
                  throw new Error("OTP not valid");
              }
            } else {
                throw new Error("Password or OTP required");
            }
    
            return user;


        } catch (er) {
            if (er instanceof Error) {
                throw er;
            }
            throw new Error(String(er));
        }

      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
}