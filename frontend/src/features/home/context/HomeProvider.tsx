import React, { useEffect, useReducer } from "react";
import { homeReducer, initialHomeState } from "../reducers/homeReducer";
import { HomeContext } from "./HomeContext";
import { fetchDataEffect } from "../effects/homeEffects";

interface HomeProviderProps {
  children: React.ReactNode;
}

export const HomeProvider: React.FC<HomeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, initialHomeState);

  useEffect(() => {
    fetchDataEffect(1, dispatch);
  }, []);

  const fetchData = async (page: number): Promise<void> => {
    fetchDataEffect(page, dispatch);
  };

  return (
    <HomeContext.Provider value={{ ...state, fetchData }}>
      {children}
    </HomeContext.Provider>
  );
};
