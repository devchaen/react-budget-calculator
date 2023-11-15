import React, { useRef } from "react";
import { BiEditAlt, BiSave } from "react-icons/bi";

const Budget = ({ budget, setBudget }) => {
  const inputRef = useRef(null);

  //   console.log("budget함수 호출");
  // 예산 설정 : edit 버튼 클릭 시 input 활성화
  const onBudgetEdit = () => {
    inputRef.current.removeAttribute("disabled");
    inputRef.current.focus();
  };

  // 예산 설정 : save 버튼 클릭 시 예산 저장, input 비활성화
  const saveBudget = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    if (budget === undefined) {
      setBudget(0);
      localStorage.setItem("budget", 0);
      inputRef.current.setAttribute("disabled", true);
    } else {
      localStorage.setItem("budget", Number(budget));
      inputRef.current.setAttribute("disabled", true);
    }
  };

  return (
    <div className="w-full px-1">
      <label
        htmlFor="budget"
        className="text-purple-950 text-lg font-lightbold pl-4"
      >
        나의 예산
      </label>
      <form
        className="flex justify-between align-baseline bg-purple-50 ring-inset ring-purple-700/10 p-3 border rounded-2xl "
        onSubmit={saveBudget}
      >
        <div className="flex justify-center">
          <span className="text-gray-500 mx-2">₩</span>
          <input
            className="text-gray-800 text-xl text-center font-semibold"
            name="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            ref={inputRef}
            disabled
          />
        </div>
        <div className="flex align-baseline">
          <button
            className="text-violet-800 p-1"
            type="button"
            onClick={onBudgetEdit}
          >
            <BiEditAlt />
          </button>
          <button className="text-violet-800 p-1" type="submit">
            <BiSave />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Budget;
