import React, { createContext, useReducer } from "react";
import { TransContextState } from "../types";
import AppReducer from "./AppReducer";

// Initial state
const initialState: TransContextState = {
  transactions: [
    { id: "23314", text: "Medical", amount: -2230 },
    { id: "345435", text: "Salary", amount: 4200 },
    { id: "2434", text: "Petrol", amount: -3250 },
    { id: "2323", text: "Salary", amount: 30000 },
    { id: "786", text: "Shopping", amount: -9230 },
  ],
  addTransaction: () => {},
  deleteTransaction: () => {},
};

// Create context
export const GlobalContext = createContext<TransContextState>(initialState);

type Props = {
  children?: React.ReactNode;
};

// Provider component
export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: string) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction: any) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
