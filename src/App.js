import React, { useState } from "react";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import TotalExpense from "./components/TotalExpense";
import Remaining from "./components/Remaining";
import { BiCalculator } from "react-icons/bi";

// localStorage에 저장된 지출 내역
const initialExpenseList = localStorage.getItem("expenseList")
  ? JSON.parse(localStorage.getItem("expenseList"))
  : [];
//localStorage에 저장된 예산 금액
const initialBudget = localStorage.getItem("budget")
  ? JSON.parse(localStorage.getItem("budget"))
  : 0;

const App = () => {
  // 관리 State : expenseList, budget, sumExpense
  const [expenseList, setExpenseList] = useState(initialExpenseList);
  const [budget, setBudget] = useState(Number(initialBudget));
  const [sumExpense, setSumExpense] = useState(0);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-zinc-200">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:max-w-3xl">
        <div className="flex px-4 py-2">
          <BiCalculator size="30" color="#603580" />
          <h1 className="text-2xl font-bold ml-2">My Budget Planner</h1>
        </div>
        <div className="flex items-center justify-between p-3 mb-2">
          <Budget budget={budget} setBudget={setBudget} />
          <TotalExpense
            expenseList={expenseList}
            sumExpense={sumExpense}
            setSumExpense={setSumExpense}
          />
          <Remaining
            expenseList={expenseList}
            budget={budget}
            sumExpense={sumExpense}
          />
        </div>
        <div className="mt-3 mb-4">
          <AddExpense
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
          <ExpenseList
            expenseList={expenseList}
            setExpenseList={setExpenseList}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
