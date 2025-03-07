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
    fetchDataEffect(dispatch);
  }, []);

  return (
    <HomeContext.Provider
      value={{ ...state, fetchData: () => fetchDataEffect(dispatch) }}
    >
      {children}
    </HomeContext.Provider>
  );
};
