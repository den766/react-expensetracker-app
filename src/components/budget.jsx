import { useState } from "react";
import { validateMonthlyBudget } from "../utils/validation";
import { formatCurrency } from "../utils/formatCurrency";
import { Target } from "lucide-react";

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
  const percentageSpent = Math.round((currentMonthSpent / monthlyBudget) * 100);

  let budgetStatusMessage;
  const progressColor =
    percentageSpent < 80
      ? "var(--color-success)"
      : percentageSpent < 100
        ? "var(--color-warning)"
        : "var(--color-danger)";

  if (percentageSpent < 80) {
    budgetStatusMessage = "🟢 You are within your monthly budget.";
  } else if (percentageSpent <= 100) {
    budgetStatusMessage = `🟡 Warning: You've used ${percentageSpent}% of your monthly budget.`;
  } else {
    budgetStatusMessage = `🔴 You've exceeded your monthly budget by ₹${Math.abs(remainingBudget)}.`;
  }
  if (isEditing) {
    return (
      <>
        <div className="budget-form">
          <h3>{monthlyBudget ? "Edit Your Budget" : "Set Your Budget"}</h3>
          {budgetError && <p className="error">{budgetError}</p>}
          <form className="Budget-txt" onSubmit={handleSubmit}>
            <input
              value={budgetInput}
              onChange={(e) => setBudgetInput(e.target.value)}
              type="number"
              placeholder="Type your budget"
            />
            <button> {monthlyBudget ? "Save Changes" : "Review Budget"}</button>
          </form>
        </div>
      </>
    );
  }

  if (monthlyBudget) {
    return (
      <div className="budget-card">
        <h3>
          <Target size={20} />
          <span>Monthly Budget</span>
        </h3>
        <p className="budget-subtitle">Stay within your monthly spending</p>
        <div className="budget-row">
          <span>Budget</span>
          <strong>{formatCurrency(monthlyBudget)}</strong>
        </div>

        <div className="budget-row">
          <span>Spent</span>
          <strong>{formatCurrency(currentMonthSpent)}</strong>
        </div>

        <div className="budget-row">
          <span>Remaining</span>
          <strong className="remaining-budget">
            {formatCurrency(remainingBudget)}
          </strong>
        </div>
        <div className="budget-progress">
          <div className="budget-progress__header">
            <span>Budget Usage</span>
            <span>{percentageSpent}%</span>
          </div>

          <div className="budget-progress__track">
            <div
              className="budget-progress__fill"
              style={{
                width: `${percentageSpent}%`,
                backgroundColor: progressColor,
              }}
            />
          </div>
        </div>
        <p className="budget-status">{budgetStatusMessage}</p>
        <button
          className="budget-edit-btn"
          onClick={() => {
            setBudgetInput(monthlyBudget);
            setIsEditing(true);
          }}
        >
          Edit Budget
        </button>
      </div>
    );
  }

  return (
    <div className="monthly-budget">
      <h3>Monthly Budget</h3>
      <p>Set simple limits to stay on track</p>
      <button className="budget-btn" onClick={() => setIsEditing(!isEditing)}>
        Set Monthly Budget
      </button>
    </div>
  );
}

export default MonthlyBudget;
