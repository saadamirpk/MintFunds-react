import React from "react";
import Balance from "../Components/Balance";
import TransactionHistory from "../Components/TransactionHistory";
import AddTransaction from "../Components/AddTransaction";
import { GlobalProvider } from "../Context/GlobalState";

export default function HomePage() {
  return (
    <GlobalProvider>
      <Balance />
      <AddTransaction />
      <TransactionHistory showAll={false} />
    </GlobalProvider>
  );
}
