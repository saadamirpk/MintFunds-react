import React from "react";
import TransactionHistory from "../Components/TransactionHistory";
import { GlobalProvider } from "../Context/GlobalState";

export default function HistoryPage() {
  return (
    <GlobalProvider>
      <TransactionHistory showAll={true} />
    </GlobalProvider>
  );
}
