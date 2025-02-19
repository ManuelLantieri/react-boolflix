import { createContext, useState, useContext } from "react";

const CategoriesDataContext = createContext();

function CategoriesDataProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  return (
    <CategoriesDataContext.Provider
      value={{ movies, setMovies, series, setSeries }}
    >
      {children}
    </CategoriesDataContext.Provider>
  );
}

function useCategoriesDataContext() {
  const context = useContext(CategoriesDataContext);
  return context;
}

export { CategoriesDataProvider, useCategoriesDataContext };
