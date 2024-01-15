"use client";
import { useAuthState } from "@/appstate/auth-state";
import { baseUrl } from "@/utilities/api";
import Link from "next/link";
import { useEffect, useState } from "react";
const AuthButton = () => {
  const {user, isUserLoading, isAuthenticated } = useAuthState();
  console.log( isUserLoading, isAuthenticated)
  if (isAuthenticated === false && isUserLoading == false) {
    return (
      <a href={`${baseUrl}/auth/google`}>
        <button className="w-[207px] h-[45px] rounded-2xl create-account-btn font-outfit">
          Create an account
        </button>
      </a>
    );
  }
  if (isUserLoading === true) {
    return (
      <button className="w-[207px] h-[45px] rounded-2xl create-account-btn font-outfit">
        Loading...
      </button>
    );
  }
  if (user!==null&&isAuthenticated === true) {
    return (
      <Link href="/generate">
        <button className="w-[207px] h-[45px] rounded-2xl create-account-btn font-outfit">
          Dashboard
        </button>
      </Link>
    );
  }
};
export default AuthButton;
