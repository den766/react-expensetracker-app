import { useState } from "react";

function AddExpenseForm({ onHandleForm, error }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const success = onHandleForm(title, amount, category);
        console.log(success);
        if (success) {
          setTitle("");
          setAmount("");
          setCategory("");
        }
      }}
    >
      <div className="addexpense">
        <h2>Create Expense</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="Expense_Title"
          id="expense-title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          type="number"
          name="Expense_Amount"
          id="expene-amount"
          placeholder="Amount"
          value={amount}
          onWheel={(e) => e.target.blur()}
          onChange={(e) => {
            setAmount(Number(e.target.value));
          }}
        ></input>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Category
          </option>
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
