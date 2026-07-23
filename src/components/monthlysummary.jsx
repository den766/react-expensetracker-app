import { formatCurrency } from "../utils/formatCurrency";
function MonthlySummary({ monthlyTotals }) {
  return (
    <div className="monthly-summary">
      <h3>Monthly Summary</h3>

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
