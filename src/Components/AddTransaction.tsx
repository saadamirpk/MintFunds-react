import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { nanoid } from "nanoid";
import { trans } from "../types";

export default function AddTransaction() {
  const [tranText, setTranText] = useState<string>("");
  const [tranAmount, setTranAmount] = useState<string>("");

  const { addTransaction, transactions } = useContext(GlobalContext);

  function addTransHandle(e: any) {
    e.preventDefault();
    if (tranText != "" && tranAmount != "") {
      const t: trans = {
        id: nanoid(),
        text: tranText,
        amount: parseInt(tranAmount),
      };
      addTransaction(t);
      setTranText("");
      setTranAmount("");
    } else {
      console.log("Cannot have Transaction Text or Amount be Null");
    }
    //add to context
  }

  return (
    <div>
      <span className="subtitle">Make Transaction</span>
      <hr />
      <br />
      <form>
        <input
          className="f-r"
          type="number"
          placeholder="Amount"
          onChange={(e) => setTranAmount(e.target.value)}
          value={tranAmount}
        />
        <input
          type="text"
          placeholder="Text"
          onChange={(e) => setTranText(e.target.value)}
          value={tranText}
        />
        <button onClick={addTransHandle}>Add Transaction</button>
      </form>
    </div>
  );
}
