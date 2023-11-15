import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenseList, setExpenseList }) => {
  const resetAll = () => {
    setExpenseList([]);
    localStorage.setItem("expenseList", []);
  };
  return (
    <div>
      <div className="flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100 text-gray-600 border rounded">
        <div className="w-1/3 flex justify-center">
          <span className="font-semibold">항목</span>
        </div>
        <div className="w-1/3 flex justify-center">
          <span className="font-semibold">금액</span>
        </div>
        <div className="w-12">
          <button onClick={resetAll}>Reset</button>
        </div>
      </div>
      {expenseList.length > 0 ? (
        expenseList.map((item) => (
          <ExpenseItem
            key={item.id}
            id={item.id}
            text={item.text}
            amount={item.amount}
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
        ))
      ) : (
        <div className="flex justify-center py-6 text-gray-400">
          <span>Enter your expenditures...</span>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
