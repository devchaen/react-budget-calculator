import React, { useEffect, useState } from "react";

const Remaining = ({ expenseList, budget, sumExpense }) => {
  const [remaining, setRemaining] = useState(budget);

  useEffect(() => {
    if (isNaN(budget - sumExpense)) {
      setRemaining(budget);
    } else {
      setRemaining(Number(budget) - Number(sumExpense));
    }
  }, [expenseList, budget, sumExpense]);
  return (
    <div className="w-full px-1">
      <p className="ml-4 text-purple-950 text-lg font-lightbold">남은 예산</p>
      <div className="flex justify-center bg-purple-50 ring-inset ring-purple-700/10 p-3 border rounded-2xl">
        <p className="text-gray-500">
          ₩{" "}
          <span
            className={
              remaining >= 0
                ? `text-gray-800 text-xl text-center font-semibold`
                : `text-red-700 text-xl text-center font-semibold`
            }
          >
            {remaining}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Remaining;
