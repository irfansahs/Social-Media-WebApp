import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { useRouter } from "next/navigation";


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
     
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const response = await fetch("http://localhost:5196/api/User/action", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
 
        const user = await response.json();
        user.id = 1;
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log(user);
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      const data = {
        idToken: account.id_token,
        provider: account.provider,
        name: user.name,
        email: user.email,
      };
      try {
        console.log(data);
        await fetch(" http://localhost:5196/api/User/GoogleLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.log(error);
      }

      return account;
    },

    async jwt({ token, user }) {
      return {...token,...user};
    },
    async session({session, token, user }) {
      session.user = token;
      return session;
    },

  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };