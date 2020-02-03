import React, { createContext, useReducer, useEffect } from "react";
import { vacationReducer } from "../reducers/vacationReducer";

export const VacationContext = createContext();

const VacataionContextProvider = (props) => {
  const [vacations, dispatch] = useReducer(vacationReducer, [], () => {
    const localData = localStorage.getItem('vacations');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('vacations', JSON.stringify(vacations))
  }, [vacations]);

  return (
    <VacationContext.Provider value={{ vacations, dispatch }}>
      {props.children}
    </VacationContext.Provider>
  )
};

export default VacataionContextProvider;
