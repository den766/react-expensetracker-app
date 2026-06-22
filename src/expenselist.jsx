import { useState } from "react";
import ExpenseCard from "./expensecard";
import UserConfirmationModel from "./hooks/useConfirmmodel";
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
  const { selectedExpenseId, openModal, closeModal } = UserConfirmationModel();
  const categories = [
    "All",
    "Food",
    "Transport",
    "Utilities",
    "Entertainment",
    "Other",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);

  const perPage = 10;

   const totalPages = Math.ceil(expenses.length / perPage);

  const start = (currentPage - 1) * perPage;
  console.log(start);
  const end = start + perPage;
  console.log(end);
  const currentExpenses = expenses.slice(start, end);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };


  const handleNext= () => {

     setCurrentPage((prev) => prev + 1);
  }
  return (
    <div>
      <h2>Expense List</h2>
      <div className="filter_expenses">
        {categories.map((cat) => (
          <button
            className={selectedCategory === cat ? "active-filter" : ""}
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      {expenses.length === 0 ? (
        <div className="empty_expense">
          <p>📒No expenses under the selected category</p>
        </div>
      ) : (
        ""
      )}
      <ul>
        {currentExpenses.map((expense) => {
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
              selectedExpenseId={selectedExpenseId}
              openModal={openModal}
              closeModal={closeModal}
            />
          );
        })}
      </ul>

      <div>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Prev
        </button>
         <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        </div>
    </div>
  );
}

export default ExpenseList;
