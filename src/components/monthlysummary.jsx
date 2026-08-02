import { formatCurrency } from "../utils/formatCurrency";
import { CalendarDays } from "lucide-react";
function MonthlySummary({ monthlyTotals }) {
  return (
    <div className="monthly-summary">
      <h3>
        <CalendarDays size={20}/>
        <span>Monthly Summary</span>
      </h3>

      <p className="summary-subtitle">Expenses grouped by month</p>

      {monthlyTotals.map(([month, total]) => (
        <div className="month-row" key={month}>
          <span>{month}</span>
          <span>{formatCurrency(total)}</span>
        </div>
      ))}
    </div>
  );
}
export default MonthlySummary;
