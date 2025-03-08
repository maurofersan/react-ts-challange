import { apiClient } from "../../../shared/api/apiClient";
import { IDataResponse } from "../interfaces/dataResponse.interface";

export const homeApi = {
  getData: async (page: number): Promise<IDataResponse> => {
    try {
      const response = await apiClient.get<IDataResponse>(
        `/data?page=${page}&limit=100`
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to load data");
    }
  },
};
