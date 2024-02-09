import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      userId:string,
      address: string,
      accessToken:string,
      idToken?: string,
      image?:string,
      userName?:string,
      profileImage?:string;
    } & DefaultSession["user"]
  }
}