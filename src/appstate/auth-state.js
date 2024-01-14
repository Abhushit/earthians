"use client";
import { getUserData } from "@/services/auth-service";
import { create } from "zustand";

export const useAuthState = create((set, get) => ({
  user: null,
  error: null,
  isError: false,
  isAuthenticated: false,
  setAuthenticated: (payload) => set(() => ({ isAuthenticated: payload })),
  isUserLoading: false,
  setUser: (payload) =>
    set((state) => ({
      user: payload,
      isAuthenticated:true
    })),
  fetchUser: async () => {
    set(() => ({ isUserLoading: true }));

    await getUserData()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        set(() => ({
          user: data.user,
          isUserLoading: false,
          isAuthenticated: true,
        }));
      })
      .catch((e) =>
        set((state) => ({
          isError: true,
          isUserLoading: false,

          user:null,
          error: "Something went wrong",
          isAuthenticated: false,
        }))
      );
  },
}));