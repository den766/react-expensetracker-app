import { formatDate } from "../utils/formatDate";
import EditExpenseForm from "./editexpenseform";
import { formatCurrency } from "../utils/formatCurrency";
function ExpenseCard({
  id,
  title,
  amount,
  category,
  date,
  deleteExpense,
  editExpense,
  editId,
  updateExpense,
  cancelEdit,
  error,
  selectedExpenseId,
  openModal,
  closeModal,
}) {
  if (editId === id) {
    return (
      <EditExpenseForm
        id={id}
        title={title}
        amount={amount}
        category={category}
        onUpdateExpense={updateExpense}
        onCancelEdit={cancelEdit}
        error={error}
      />
    );
  }

  return (
    <>
      <li key={id}>
        <div className="expense-card__content">
          <p className="expense-title">{title}</p>
          <p className="category">{category}</p>
          <p className="expense-date">{formatDate(date)}</p>
        </div>

        <div className="expense-card__actions">
          <p className="amount">{formatCurrency(amount)}</p>

          <div className="edt-delete-btngroup">
            <button className="edit-btn" onClick={() => editExpense(id)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => openModal(id)}>
              Delete
            </button>
          </div>
        </div>
      </li>

      {selectedExpenseId === id && (
        <div className="modal-overlay">
          <div className="confirmation-modal">
            <p>
              Are you sure you want to delete {title}? This action cannot be
              undone.
            </p>
            <div className="btn-container">
              <button onClick={closeModal}>Cancel</button>

              <button
                onClick={() => {
                  deleteExpense(id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExpenseCard;
