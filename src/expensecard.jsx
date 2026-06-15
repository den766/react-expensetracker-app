import { formatDate } from "./utils/formatDate";
import EditExpenseForm from "./editexpenseform";
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
    <li key={id}>
      <h1>{title}</h1>
      <p className="amount">₹{amount}</p>
      <p className="category">{category}</p>
      <p>{formatDate(date)}</p>
      <div className="edt-delete-btngroup">
        <button className="delete-btn" onClick={() => deleteExpense(id)}>
          Delete
        </button>
        <button className="edit-btn" onClick={() => editExpense(id)}>
          Edit
        </button>
      </div>
    </li>
  );
}

export default ExpenseCard;
