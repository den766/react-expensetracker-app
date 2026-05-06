import { useState } from "react";
import Header from "./Header";
import AddExpenseForm from "./addexpesneform";
import ExpenseList from "./expenselist";

function App() {
  const [expenses, setExpenses] = useState([]);

  function HandleSubmit(e, title, amount, category) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    setExpenses((prev) => [...prev, newExpense]);

    console.log(expenses);
  }

  return (
    <div className="container">
      <Header />
      <AddExpenseForm onHandleForm={HandleSubmit} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
