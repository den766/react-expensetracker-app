import { useState, useEffect } from "react";

import AddExpenseForm from "./components/addexpesneform";
import MonthlySummary from "./components/monthlysummary";
import ExpenseList from "./components/expenselist";
import { ValidateExpense, formatTitle } from "./utils/validation";
import {
  saveExpenses,
  loadExpenses,
  saveMonthlyBudget,
  loadMonthlyBudget,
} from "./services/storage";
import ExpenseSummary from "./components/expensesummary";
import { Routes, Route, Navigate } from "react-router-dom";
import ExpesneLayoutDashboard from "./pages/expenselayout";
import MonthlyBudget from "./components/budget";

import Report from "./pages/reports";
import SearchExpense from "./components/searchexpense";

import { toast, ToastContainer } from "react-toastify";
function App() {
  const [expenses, setExpenses] = useState(() => loadExpenses());
  const [editingId, setEditingId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrderValue, setSortOrderValue] = useState("none");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(() => loadMonthlyBudget());

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  useEffect(() => {
    saveMonthlyBudget(monthlyBudget);
  }, [monthlyBudget]);

  function HandleSubmit(title, amount, category) {
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

    return true;
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

    case "newest":
      sortExpenses = visibleExpenses.toSorted((a, b) =>
        b.createdAt.localeCompare(a.createdAt),
      );
      break;

    case "oldest":
      sortExpenses = visibleExpenses.toSorted((a, b) =>
        a.createdAt.localeCompare(b.createdAt),
      );
      break;
    default:
      sortExpenses = visibleExpenses;
  }

  const expenseSummary = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  const summary = expenses.reduce((acc, expense) => {
    const date = new Date(expense.createdAt);
    const month = date.toLocaleString("en-US", {
      month: "short",
    });

    const year = date.getFullYear();

    const key = `${month} ${year}`;

    if (!acc[key]) {
      acc[key] = 0;
    }

    acc[key] += expense.amount;
    return acc;
  }, {});

  const monthlyTotals = Object.entries(summary);

  const currentDate = new Date();

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.createdAt);

    const expenseMonth = expenseDate.getMonth();

    const expenseYear = expenseDate.getFullYear();

    return expenseMonth === currentMonth && expenseYear === currentYear;
  });

  const categoryTotals = currentMonthExpenses.reduce((acc, expense) => {
    const category = expense.category.toLowerCase();
    const amount = expense.amount;

    if (!acc[category]) {
      acc[category] = amount;
    } else {
      acc[category] += amount;
    }

    return acc;
  }, {});

  const categoryReportData = Object.entries(categoryTotals).map(
    ([category, total]) => ({
      category,
      total,
    }),
  );

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
                <MonthlyBudget
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  monthlyBudget={monthlyBudget}
                  setMonthlyBudget={setMonthlyBudget}
                  monthlyTotals={monthlyTotals}
                />
                <MonthlySummary monthlyTotals={monthlyTotals} />
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
                  searchQuery={searchQuery}
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
          <Route
            path="reports"
            element={<Report categoryReportData={categoryReportData} />}
          />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
