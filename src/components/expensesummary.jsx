import { formatCurrency } from "../utils/formatCurrency";
import { HandCoins } from "lucide-react";
function ExpenseSummary({ expenseSummary }) {
  return (
    <div className="expense_summary">
      <h3>
        <HandCoins size={20} />
        <span>Total Expenses</span>
      </h3>
      <p className="summary_amount"> {formatCurrency(expenseSummary)}</p>

      <p className="summary_subtitle">Total amount you've recorded</p>
    </div>
  );
}

export default ExpenseSummary;
