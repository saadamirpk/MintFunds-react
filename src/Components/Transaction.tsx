import React from "react";

export default function Transaction({ transaction }: any) {
  const sign = transaction.amount < 0 ? "-" : "+";

  function getAmount(num: number) {
    return num.toLocaleString();
  }

  return (
    <div className={(sign == "-" ? "minus" : "plus") + " transaction "}>
      {transaction.text}
      <span className="amount">
        {sign} {getAmount(Math.abs(transaction.amount))}
      </span>
    </div>
  );
}
