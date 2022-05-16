import React, { useContext } from "react";
import ic from "../del-ic.png";
import { GlobalContext } from "../Context/GlobalState";

export default function Transaction({ transaction }: any) {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  function getAmount(num: number) {
    return num.toLocaleString();
  }

  return (
    <div className={(sign == "-" ? "minus" : "plus") + " transaction "}>
      {transaction.text}
      <div onClick={() => deleteTransaction(transaction.id)} className="del">
        <img className="ic" src={ic} />
      </div>
      <span className="amount">
        {sign} {getAmount(Math.abs(transaction.amount))}
      </span>
    </div>
  );
}
