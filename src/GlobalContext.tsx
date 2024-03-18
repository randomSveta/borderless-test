import { createContext, useContext, ReactNode } from "react";

type ApiUrl = string | null;

const GlobalContext = createContext<ApiUrl>(null);

export const useGlobalContext = () => useContext(GlobalContext);

type GlobalProviderProps = {
  children: ReactNode;
  apiUrl: ApiUrl;
};

export const GlobalProvider = ({ children, apiUrl }: GlobalProviderProps) => (
  <GlobalContext.Provider value={apiUrl}>{children}</GlobalContext.Provider>
);
