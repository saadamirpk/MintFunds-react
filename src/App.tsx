import React, { createContext } from "react";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  /*
    { id: 2, text: "Petrol", amount: -3250 },
    { id: 3, text: "Salary", amount: 30000 },
    { id: 4, text: "Shopping", amount: -9230 },
*/

  return (
    <div className="app">
      <GlobalProvider>
        <Header />
        <Balance />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
