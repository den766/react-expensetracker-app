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
   cancelEdit
  
}) {
  if (editId === id) {
    return (
      <EditExpenseForm
        id={id}
        title={title}
        amount={amount}
        category={category}
        onUpdateExpense ={updateExpense}
        onCancelEdit ={cancelEdit}
      />
    );
  }
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{amount}</p>
      <p>{category}</p>
      <p>{formatDate(date)}</p>
      <button className="delete-btn" onClick={() => deleteExpense(id)}>
        Delete
      </button>
      <button onClick={() => editExpense(id)}>Edit</button>
    </li>
  );
}

export default ExpenseCard;
