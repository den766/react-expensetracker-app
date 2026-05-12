import { useState } from "react";

function AddExpenseForm({ onHandleForm }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onHandleForm(e, title, amount, category);

        setTitle("");
        setAmount("");
        setCategory("");
      }}
    >
      <div className="addexpense">
        <input
          type="text"
          name="Expense_Title"
          id="expense-title"
          placeholder="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="number"
          name="Expense_Amount"
          id="expene-amount"
          placeholder="amount"
          required
          value={amount}
          onChange={(e) => {
            setAmount(Number(e.target.value));
            // console.log(typeof e.target.value);
          }}
        ></input>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option>Select Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default AddExpenseForm;
