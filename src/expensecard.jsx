function ExpenseCard({ id, title, amount, category }) {
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{amount}</p>
      <p>{category}</p>
    </li>
  );
}

export default ExpenseCard;
