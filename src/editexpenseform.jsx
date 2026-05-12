import { useState } from "react";

function EditExpenseForm({
  id,
  title,
  amount,
  category,
  onUpdateExpense,
  onCancelEdit,
}) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedCategory, setEditedCategory] = useState(category);
  return (
    <div className="editexpense">
      <input
        type="text"
        name="Expense_Title"
        id="expense-title"
        placeholder="title"
        required
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      ></input>
      <input
        type="number"
        name="Expense_Amount"
        id="expene-amount"
        placeholder="amount"
        required
        value={editedAmount}
        onChange={(e) => {
          setEditedAmount(Number(e.target.value));
          // console.log(typeof e.target.value);
        }}
      ></input>
      <label htmlFor="category">Category:</label>
      <select
        name="category"
        id="category"
        value={editedCategory}
        onChange={(e) => setEditedCategory(e.target.value)}
        required
      >
        <option>Select Category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        onClick={() =>
          onUpdateExpense(id, editedTitle, editedAmount, editedCategory)
        }
      >
        Update Expense
      </button>
      <button
        type="button"
        onClick={() => {
          onCancelEdit();
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditExpenseForm;
