"use client";
import { useAuthState } from "@/appstate/auth-state";
import { getUserData } from "@/services/auth-service";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const {
    fetchUser,
    setUser,
    user,
    isAuthenticated,
    isUserLoading,
    setAuthenticated,
  } = useAuthState();
  const [mount, setMount] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMount(true);
    const token = localStorage.getItem("token");
    if (token !== null) {
      const userString = localStorage.getItem("user") ?? null;

      if (
        userString !== undefined &&
        userString != {} &&
        user !== "undefined"&&
        user !== null
      ) {
        setUser(JSON.parse(user));
      } else {
        fetchUser();
      }
    }
  }, []);

  useEffect(() => {
    const queryParams = window.location.search;
    const searchParams = new URLSearchParams(queryParams);

    const tokenParam = searchParams.get("token");

    if (tokenParam) {
      localStorage.setItem(
        "token",
        JSON.stringify(tokenParam.replace(/"/g, ""))
      );
      searchParams.delete("token");
      const currentUrl = window.location.href;

      const updatedUrl = currentUrl.replace(/[?&]token=[^&]+/, "");

      history.replaceState({}, document.title, updatedUrl);

      fetchUser();
    }
  }, [mount]);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    const token = localStorage.getItem("token");
    if (token === null) {
      router.push("/");
    }
  }, [user,mount]);

  return mount && children;
}