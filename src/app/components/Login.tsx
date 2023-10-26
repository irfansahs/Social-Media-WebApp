import React from "react";
import NextAuth from "next-auth/next";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "359247775554-f776m6md9juksvfh4anfccfmsroc32o0.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});

export {handler as GET ,handler as Post};