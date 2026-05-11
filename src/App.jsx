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
      createdAt : new Date().toISOString(),
    };

    setExpenses((prev) => [...prev, newExpense]);

    console.log(expenses);
  }

  function HandleDeleteExpense(id){

     setExpenses((prev)=> prev.filter((expense)=> expense.id !== id));
  }

  return (
    <div className="container">
      <Header />
      <AddExpenseForm onHandleForm={HandleSubmit} />
      <ExpenseList expenses={expenses} onDeleteExpense={HandleDeleteExpense} />
    </div>
  );
}

export default App;
