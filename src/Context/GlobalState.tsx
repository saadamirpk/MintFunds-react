import React, { createContext, useReducer } from "react";
import { TransContextState } from "../types";
import AppReducer from "./AppReducer";

// Initial state
const initialState: TransContextState = {
  transactions: [
    { id: 2, text: "Petrol", amount: -3250 },
    { id: 3, text: "Salary", amount: 30000 },
    { id: 4, text: "Shopping", amount: -9230 },
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
  function deleteTransaction(id: number) {
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
