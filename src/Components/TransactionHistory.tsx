import React, { useContext, useState } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../Context/GlobalState";
import { Link } from "react-router-dom";

export default function TransactionHistory(props: { showAll: boolean }) {
  const { transactions } = useContext(GlobalContext);

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
      {props.showAll && (
        <>
          <Link to={"/"}>
            <button>{"Go Back"}</button>
          </Link>
          <br />
        </>
      )}

      <span className="subtitle">Recent Transaction History</span>
      <hr />
      <br />
      {props.showAll ? TransactionDisplayAll : TransactionDisplay}
      {!props.showAll && (
        <Link to="/history">
          <button type="button">View All</button>
        </Link>
      )}

      <br />
      <br />
    </div>
  );
}
