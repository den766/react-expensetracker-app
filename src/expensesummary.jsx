function ExpenseSummary({ expenseSummary }) {
  return (
    <div className="expense_summary">
      <h3>Total Expenses</h3>

      <p className="summary_amount">₹ {expenseSummary}</p>
    </div>
  );
}

export default ExpenseSummary;
