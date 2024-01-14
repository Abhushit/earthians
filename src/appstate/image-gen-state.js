import { create } from "zustand";
export function generateRandomId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
const staticImages = [
  {
    id: generateRandomId(16),
    imageUrl:
      "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    prompt: "green and gray mountains under white clouds",
  },
  {
    id: generateRandomId(16),
    imageUrl:
      "https://images.pexels.com/photos/9756492/pexels-photo-9756492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prompt: "sun dancing with nature",
  },
  {
    id: generateRandomId(16),
    imageUrl:
      "https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    prompt: "beautiful mountains with sun set",
  },
];
export const useGenerationState = create((set, get) => ({
  images: staticImages,
  openUpgradeModal: false,
  setOpenUpgradeModal: (payload) =>
    set((state) => ({ openUpgradeModal: payload })),
  selectedImage: staticImages[0],
  setSelectImage: (payload) => set((state) => ({ selectedImage: payload })),
  generateImage: (payload) =>
    set((state) => ({
      images: [...state.images, payload],
    })),
}));
