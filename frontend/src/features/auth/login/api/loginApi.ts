import { apiClient } from "../../../../shared/api/apiClient";

export const loginApi = {
  signIn: async (email: string, password: string): Promise<string> => {
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password,
      });

      return response.data.token;
    } catch (error) {
      console.error(error);
      throw new Error("Invalid credentials");
    }
  },
};
