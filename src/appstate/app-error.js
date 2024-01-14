import { create } from "zustand";

export const useAppError = create((set, get) => ({
  error: null,
  setError: (payload) => set((state) => ({ error: payload })),
}));
