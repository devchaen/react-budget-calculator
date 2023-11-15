import React, { useEffect } from "react";

const TotalExpense = ({ expenseList, sumExpense, setSumExpense }) => {
  useEffect(() => {
    const sumExpense = expenseList.reduce((pre, cur) => {
      return Number(pre) + Number(cur.amount);
    }, 0);

    setSumExpense(sumExpense);
  }, [expenseList, setSumExpense]);

  return (
    <div className="w-full px-1">
      <p className="ml-4 text-purple-950 text-lg font-lightbold">총 지출</p>
      <div className="flex justify-center bg-purple-50 ring-inset ring-purple-700/10 p-3 border rounded-2xl">
        <p className="text-gray-500">
          ₩{" "}
          <span className="text-gray-800 text-xl text-center font-semibold">
            {sumExpense}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TotalExpense;
