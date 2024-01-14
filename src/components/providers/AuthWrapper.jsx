"use client";
import { useAuthState } from "@/appstate/auth-state";
import { getUserData } from "@/services/auth-service";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export default function AuthWrapper({ children }) {
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
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    } else {
      fetchUser();
    }
     
    if(token===null){
        router.push("/")
    }
  }, []);

  return user && children;
}
