import { useState, useEffect } from "react";
import Header from "./Header";
import AddExpenseForm from "./addexpesneform";
import ExpenseList from "./expenselist";
import { ValidateExpense, formatTitle } from "./utils/validation";
import { saveExpenses, loadExpenses } from "./utils/storage";

function App() {
  const [expenses, setExpenses] = useState(() => loadExpenses());
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  function HandleSubmit(e, title, amount, category) {
    e.preventDefault();

    const cleanTitle = formatTitle(title);
    const validationError = ValidateExpense(cleanTitle, amount, category);

    if (validationError) {
      setError(validationError);
      return false;
    }

    const isDuplicate = expenses.some(
      (expense) => expense.title.toLowerCase() === cleanTitle.toLowerCase(),
    );
    console.log(isDuplicate);

    if (isDuplicate) {
      setError("Duplicate entries ,Try different Keyword");
      return false;
    }

    const newExpense = {
      id: Date.now(),
      title: cleanTitle,
      amount,
      category,
      createdAt: new Date().toISOString(),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setError("");

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
    const cleanTitle = formatTitle(editedTitle);
    const validationError = ValidateExpense(
      cleanTitle,
      editedAmount,
      editedCategory,
    );

    if (validationError) {
      setError(validationError);
      return;
    }
    setExpenses((prev) =>
      prev.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              title: cleanTitle,
              amount: editedAmount,
              category: editedCategory,
            }
          : expense,
      ),
    );

    setEditingId(null);
  }

  function HandleEditCancel() {
    setEditingId(null);
  }

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <div className="container">
      <Header />
      <AddExpenseForm onHandleForm={HandleSubmit} error={error} />
      <ExpenseList
        expenses={filteredExpenses}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onDeleteExpense={HandleDeleteExpense}
        onEditExpense={HandleEdit}
        editingId={editingId}
        onUpdateExpense={HandleUpdateExpense}
        onEditCancel={HandleEditCancel}
        error={error}
      />
    </div>
  );
}

export default App;
