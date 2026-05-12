import { useState } from "react";
import Header from "./Header";
import AddExpenseForm from "./addexpesneform";
import ExpenseList from "./expenselist";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function HandleSubmit(e, title, amount, category) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
      createdAt: new Date().toISOString(),
    };

    setExpenses((prev) => [...prev, newExpense]);

    console.log(expenses);
  }

  function HandleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  }

  function HandleEdit(id) {
    setEditingId(id);
    console.log(editingId);
  }

  function HandleUpdateExpense(id, editedTitle, editedAmount, editedCategory) {
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              title: editedTitle,
              amount: editedAmount,
              category: editedCategory,
            }
          : expense,
      ),
    );

    setEditingId(null);
  }

  function HandleEditCancel(){

      setEditingId(null);
  }

  return (
    <div className="container">
      <Header />
      <AddExpenseForm onHandleForm={HandleSubmit} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={HandleDeleteExpense}
        onEditExpense={HandleEdit}
        editingId={editingId}
        onUpdateExpense={HandleUpdateExpense}
        onEditCancel= {HandleEditCancel}
      />
    </div>
  );
}

export default App;
