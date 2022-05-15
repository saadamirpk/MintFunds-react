import React, { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

export default function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);

  const TransactionDisplay = transactions.map((transaction) => {
    return <Transaction key={transaction.id} transaction={transaction} />;
  });

  return (
    <div>
      <span className="subtitle">Recent Transaction History</span>
      <hr />
      <br />
      {TransactionDisplay}
      <button>View All</button>
      <br />
      <br />
    </div>
  );
}
