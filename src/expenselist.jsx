import ExpenseCard from "./expensecard";

function ExpenseList({
  expenses,
  onDeleteExpense,
  onEditExpense,
  editingId,
  onUpdateExpense,
  onEditCancel,
  selectedCategory,
  setSelectedCategory,
  error,
}) {
  const categories = [
    "All",
    "Food",
    "Tranport",
    "Utilities",
    "Entertainment",
    "Other",
  ];
  return (
    <div>
      <div className="filter_expenses">
        {categories.map((cat) => (
          <button
            className={selectedCategory === cat ? "active-filter" : ""}
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
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
              editId={editingId}
              updateExpense={onUpdateExpense}
              cancelEdit={onEditCancel}
              error={error}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ExpenseList;
