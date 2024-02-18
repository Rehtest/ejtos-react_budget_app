import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, currency, expenses } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const totalExpenses = expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (event.target.value > 20000) {
      alert(`The maximum budget is ${currency}20,000`);
      return;
    } else if (event.target.value < totalExpenses) {
      alert("The budget cannot be less than the spending amount");
      return;
    }
    setNewBudget(event.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "SET_BUDGET",
      payload: newBudget,
    });
  }, [newBudget, dispatch]);

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        min="0"
        max="20000"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
