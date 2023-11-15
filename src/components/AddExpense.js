import React, { useEffect, useRef, useState } from "react";

const AddExpense = ({ expenseList, setExpenseList }) => {
  const textRef = useRef(null);

  // 관리 State: text, amount
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // 새로운 지출 내역 추가
  const addExpense = (e) => {
    e.preventDefault();

    let newExpense = {
      id: Date.now(),
      text: text,
      amount: amount,
    };

    if (text && amount) {
      setExpenseList((prev) => [...prev, newExpense]);
      localStorage.setItem(
        "expenseList",
        JSON.stringify([...expenseList, newExpense])
      );
      setText("");
      setAmount("");
      textRef.current.focus();
    }
    // 지출 내역 text를 입력하지 않은 경우
    else if (!text) {
      alert("지출 내역을 입력하세요.");
    }
    // 금액을 입력하지 않은 경우
    else if (!amount) {
      alert("지출 금액을 입력하세요.");
    }
  };

  return (
    <div>
      <form className="flex justify-evenly" onSubmit={addExpense}>
        <span>지출 내역 </span>
        <input
          className="border-b-neutral-400 border-b"
          type="text"
          ref={textRef}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Enter text..."
        ></input>
        <span>금액 </span>
        <input
          className="border-b-neutral-400 border-b"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Enter amount..."
        ></input>
        <button
          className="border rounded-lg p-1 bg-purple-100 border-purple-300 text-sm text-purple-950"
          type="submit"
        >
          Save!
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
