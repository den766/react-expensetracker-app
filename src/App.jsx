import { useState, useEffect } from "react";

import AddExpenseForm from "./addexpesneform";
import MonthlySummary from "./monthlysummary";
import ExpenseList from "./expenselist";
import { ValidateExpense, formatTitle } from "./utils/validation";
import { saveExpenses, loadExpenses } from "./utils/storage";
import ExpenseSummary from "./expensesummary";
import { Routes, Route, Navigate } from "react-router-dom";
import ExpesneLayoutDashboard from "./pages/expenselayout";

import DemoReport from "./pages/reports";
import SearchExpense from "./searchexpense";

import { toast, ToastContainer } from "react-toastify";
function App() {
  const [expenses, setExpenses] = useState(() => loadExpenses());
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrderValue, setSortOrderValue] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
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

    toast("Expense Added");
  }

  function HandleDeleteExpense(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    toast("Expense Deleted");
  }

  function HandleEdit(id) {
    setEditingId(id);
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

    toast("Expense Updated");
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

  const visibleExpenses = !searchQuery
    ? filteredExpenses
    : filteredExpenses.filter(
        (expense) =>
          expense.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          expense.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );

  let sortExpenses;

  switch (sortOrderValue) {
    case "none":
      sortExpenses = visibleExpenses;
      break;

    case "highest":
      sortExpenses = visibleExpenses.toSorted((a, b) => b.amount - a.amount);
      break;

    case "lowest":
      sortExpenses = visibleExpenses.toSorted((a, b) => a.amount - b.amount);
      break;
    case "az":
      sortExpenses = visibleExpenses.toSorted((a, b) =>
        a.title.localeCompare(b.title),
      );
      break;

    case "za":
      sortExpenses = visibleExpenses.toSorted((a, b) =>
        b.title.localeCompare(a.title),
      );
      break;
    default:
      sortExpenses = visibleExpenses;
  }

  console.log(sortOrderValue);

  const expenseSummary = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigate to="/expense-dashboard" />}></Route>
        <Route path="/expense-dashboard" element={<ExpesneLayoutDashboard />}>
          <Route
            index
            element={
              <>
                <ExpenseSummary expenseSummary={expenseSummary} />
                <MonthlySummary expenses={expenses} />
              </>
            }
          />

          <Route
            path="create-expense"
            element={
              <AddExpenseForm onHandleForm={HandleSubmit} error={error} />
            }
          />
          <Route
            path="expense-list"
            element={
              <>
                <SearchExpense
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <ExpenseList
                  expenses={sortExpenses}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  onDeleteExpense={HandleDeleteExpense}
                  onEditExpense={HandleEdit}
                  editingId={editingId}
                  onUpdateExpense={HandleUpdateExpense}
                  onEditCancel={HandleEditCancel}
                  error={error}
                  setSortOrderValue={setSortOrderValue}
                  sortOrderValue={sortOrderValue}
                />
              </>
            }
          />
          <Route path="reports" element={<DemoReport />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
