import { api, handleDataRequest } from "../utilities/api";

export const getUserData = async () => {
  try {
    const response = await api.get("/auth/user");
    return response.data;
  } catch (error) {
    return error;
  }
};
