import ExpenseCard from "./expensecard";

function ExpenseList({expenses}) {
  return (
    <ul>
      {expenses.map((expense) => {
        return (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
            date={expense.createdAt}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;
