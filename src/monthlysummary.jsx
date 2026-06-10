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

  console.log(Object.entries(summary)[0]);

  return (
    <div>
      <h2>Monthly Summary</h2>

      {monthlyTotals.map(([month, total]) => (
        <p key={month}>
          {month} → ₹{total}
        </p>
      ))}
    </div>
  );
}
export default MonthlySummary;
