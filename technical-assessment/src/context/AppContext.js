import { createContext, useState } from "react";

const AppDataContext = createContext();

const AppDataContextProvider = ({ children }) => {
  const [data, setData] = useState(undefined);
  return (
    <AppDataContext.Provider value={{ data, setData }}>
      {children}
    </AppDataContext.Provider>
  );
};

export { AppDataContext, AppDataContextProvider };
