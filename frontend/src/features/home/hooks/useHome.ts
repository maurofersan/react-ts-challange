import { useContext } from "react";
import { HomeContext, HomeContextProps } from "../context/HomeContext";

export const useHome = (): HomeContextProps => {
  const context = useContext(HomeContext);

  if (!context) {
    throw new Error("useHome should be use inside a HomeProvider");
  }

  return context;
};
