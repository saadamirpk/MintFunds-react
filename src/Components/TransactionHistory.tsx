import React, { useContext, useState } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";

export default function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);
  const [showAll, setShowAll] = useState(false);

  const TransactionDisplay = transactions.map((transaction, ind) => {
    if (ind < 3) {
      return <Transaction key={transaction.id} transaction={transaction} />;
    }
    return;
  });

  const TransactionDisplayAll = transactions.map((transaction, ind) => {
    return <Transaction key={transaction.id} transaction={transaction} />;
  });

  return (
    <div>
      <span className="subtitle">Recent Transaction History</span>
      <hr />
      <br />
      {showAll ? TransactionDisplayAll : TransactionDisplay}
      <button onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "View Recent" : "View All"}
      </button>
      <br />
      <br />
    </div>
  );
}
