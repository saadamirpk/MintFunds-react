// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const [myBalance, setMyBalance] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [myIncome, setMyIncome] = useState(0);

  useEffect(() => {
    let bal = 0;
    let inc = 0;
    let exp = 0;
    for (let i = 0; i < transactions.length; i++) {
      bal += transactions[i].amount;
      if (transactions[i].amount > 0) {
        inc += transactions[i].amount;
      } else {
        exp += Math.abs(transactions[i].amount);
      }
    }
    setMyBalance(bal);
    setMyExpense(exp);
    setMyIncome(inc);
  }, [transactions]);

  return (
    <div>
      <span className="subtitle">Your Balance</span>
      <hr />
      <br />
      <span className="balance">PKR {myBalance.toLocaleString()}.00</span>
      <div className="card f-c">
        <div className="expense">
          <span>EXPENSE</span>
          <br />
          <span className="num">-{myExpense.toLocaleString()}</span>
        </div>
        <div className="income">
          <span>INCOME</span>
          <br />
          <span className="num">+{myIncome.toLocaleString()}</span>
        </div>
      </div>
      <br />
    </div>
  );
}
