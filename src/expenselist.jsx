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
  setSortOrderValue,
  sortOrderValue,
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

  const perPage = 10;

  const totalPages = Math.ceil(expenses.length / perPage);

  const start = (currentPage - 1) * perPage;

  const end = start + perPage;

  const currentExpenses = expenses.slice(start, end);

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div>
 
      <div className="filter_expenses">
        {categories.map((cat) => (
          <button
            className={selectedCategory === cat ? "active-filter" : ""}
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
              setSortOrderValue("none");
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {expenses.length > 1 && (
        <div className="sort-container">
          <label htmlFor="sort">Sort by</label>

          <select
            id="sort"
            value={sortOrderValue}
            onChange={(e) => setSortOrderValue(e.target.value)}
          >
            <option value="none">None</option>
            <option value="highest">Highest Amount</option>
            <option value="lowest">Lowest Amount</option>
            <option value="az">Title (A-Z)</option>
            <option value="za">Title (Z-A)</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      )}

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

      {expenses.length > 0 && (
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>
            Prev
          </button>
          <button onClick={handleNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
