import { formatDate } from "./utils/formatDate";
function ExpenseCard({ id, title, amount, category, date }) {
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{amount}</p>
      <p>{category}</p>
      <p>{formatDate(date)}</p>
    </li>
  );
}

export default ExpenseCard;
