function MonthlySummary({ expenses }) {
  const summary = expenses.reduce((acc, expense) => {
    const date = new Date(expense.createdAt);
    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const year = date.getFullYear();

    const key = `${month} ${year}`;

    if (!acc[key]) {
      acc[key] = 0;
    }

    acc[key] += expense.amount;
    return acc;
  }, {});

  const monthlyTotals = Object.entries(summary);

  // console.log(Object.entries(summary)[0]);

  return (
    <div className="monthly-summary">
      <h3>Monthly Summary</h3>

      <p className="summary-subtitle">Expenses grouped by month</p>

      {monthlyTotals.map(([month, total]) => (
        <div className="month-row" key={month}>
          <span>{month}</span>
          <span>₹{total}</span>
        </div>
      ))}
    </div>
  );
}
export default MonthlySummary;
