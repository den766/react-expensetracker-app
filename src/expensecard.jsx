import { formatDate } from "./utils/formatDate";
function ExpenseCard({ id, title, amount, category, date , deleteExpense}) {
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{amount}</p>
      <p>{category}</p>
      <p>{formatDate(date)}</p>
      <button className="delete-btn" onClick={()=> deleteExpense(id)}>Delete</button>
    </li>
  );
}

export default ExpenseCard;
