import { createContext } from "react";
import { IDataResponse } from "../interfaces/dataResponse.interface";

export interface HomeContextProps {
  data: IDataResponse[];
  isLoading: boolean;
  error: string | null;
  fetchData: () => void;
}

export const HomeContext = createContext<HomeContextProps | undefined>(
  undefined
);
