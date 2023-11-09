"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Router, { useRouter } from "next/navigation";

const SignInButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  if (session && session.user) {
    return (
      <div className="flex flex-col gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <img src={`${session.user.image}`} />
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      type="submit"
      className="text-green-600 ml-auto"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
