import { useState } from "react";
import { validateMonthlyBudget } from "./utils/validation";

function MonthlyBudget({
  isEditing,
  setIsEditing,
  monthlyBudget,
  setMonthlyBudget,
  monthlyTotals,
}) {
  const [budgetInput, setBudgetInput] = useState("");
  const [budgetError, setBudgetError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const error = validateMonthlyBudget(budgetInput);

    if (error) {
      setBudgetError(error);
      return;
    }

    setBudgetError("");
    setMonthlyBudget(Number(budgetInput));
    setIsEditing(false);
  }

  const date = new Date();

  const month = date.toLocaleString("en-US", {
    month: "short",
  });

  const year = date.getFullYear();

  const currentMonthKey = `${month} ${year}`;

  const [, currentMonthSpent = 0] =
    monthlyTotals.find(([monthKey]) => monthKey === currentMonthKey) || [];

  const remainingBudget = monthlyBudget - currentMonthSpent;
  if (isEditing) {
    return (
      <>
        {budgetError && <p className="error">{budgetError}</p>}
        <form className="Budget-txt" onSubmit={handleSubmit}>
          <input
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
            type="number"
            placeholder="Type your budget"
          />
          <button>Review Budget</button>
        </form>
      </>
    );
  }

  if (monthlyBudget) {
    return (
      <div className="Budget-Ui">
        <h3>Monthly Budget</h3>
        <p>{monthlyBudget}</p>
        <p>Spend : {currentMonthSpent} </p>
        <p>Remaining:- {remainingBudget}</p>
        <button>Edit</button>
      </div>
    );
  }

  return (
    <div className="monthly-budget">
      <h3>Montly Budget</h3>
      <p>Set simple limits to stay on track</p>
      <button className="budet-btn" onClick={() => setIsEditing(!isEditing)}>
        Set Monthly Budget
      </button>
    </div>
  );
}

export default MonthlyBudget;
