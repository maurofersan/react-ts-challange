import { createContext } from "react";
import { IDataItem } from "../interfaces/dataResponse.interface";

export interface HomeContextProps {
  data: IDataItem[];
  totalPages: number;
  isLoading: boolean;
  error: string | null;
  fetchData: (page: number) => Promise<void>;
}

export const HomeContext = createContext<HomeContextProps | undefined>(
  undefined
);
