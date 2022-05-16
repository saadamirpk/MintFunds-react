import React, { createContext } from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Header />
        <Balance />
        <AddTransaction />
        <TransactionHistory />
      </GlobalProvider>
    </div>
  );
}

export default App;
