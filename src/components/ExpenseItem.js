import React, { useState } from "react";
import { BiEditAlt, BiSave, BiXCircle } from "react-icons/bi";

const ExpenseItem = ({ id, text, amount, expenseList, setExpenseList }) => {
  // 관리 State : isEditing, editedText, editedAmount
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedAmount, setEditedAmount] = useState(amount);

  // 개별 지출 항목 수정
  const handleEdit = (e) => {
    e.preventDefault();

    let editedList = expenseList.map((item) => {
      if (item.id === id) {
        item.text = editedText;
        item.amount = editedAmount;
      }
      return item;
    });

    setExpenseList(editedList);
    localStorage.setItem("expenseList", JSON.stringify(editedList));
    setIsEditing(false);
  };

  // 개별 지출 항목 삭제
  const deleteItem = (id) => {
    const nextList = expenseList.filter((item) => item.id !== id);
    setExpenseList(nextList);
    localStorage.setItem("expenseList", JSON.stringify(nextList));
  };

  // 수정하지 않을 때 Item
  if (!isEditing) {
    return (
      <div className=" flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded">
        <div className="w-1/3 flex justify-center">
          <span>{text}</span>
        </div>
        <div className="w-1/3 flex justify-center">
          <span>{amount}</span>
        </div>
        <div>
          <button className="mx-2" onClick={() => setIsEditing(true)}>
            <BiEditAlt />
          </button>
          <button onClick={() => deleteItem(id)}>
            <BiXCircle />
          </button>
        </div>
      </div>
    );
  }
  // 수정 중일 때 Item
  else {
    return (
      <form
        onSubmit={handleEdit}
        className="bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded"
      >
        <div className="w-1/3 flex justify-center">
          <input
            type="text"
            className="text-center"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></input>
        </div>
        <div className="w-1/3 flex justify-center">
          <input
            type="number"
            className="text-center"
            value={editedAmount}
            onChange={(e) => setEditedAmount(e.target.value)}
          ></input>
        </div>
        <div className="mx-2">
          <button type="submit" onSubmit={handleEdit}>
            <BiSave />
          </button>
        </div>
      </form>
    );
  }
};

export default ExpenseItem;
