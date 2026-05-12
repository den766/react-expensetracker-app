import ExpenseCard from "./expensecard";

function ExpenseList({expenses , onDeleteExpense , onEditExpense , editingId , onUpdateExpense , onEditCancel}) {
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
            deleteExpense={onDeleteExpense}
            editExpense={onEditExpense}
            editId = {editingId}
            updateExpense= {onUpdateExpense}
            cancelEdit={onEditCancel}
          />
        );
      })}
    </ul>
  );
}

export default ExpenseList;
