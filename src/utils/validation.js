export function sanitize(txt) {
  return String(txt || "").trim();
}

export function formatTitle(title) {
  const clean = sanitize(title);

   if (!clean) return "";

  return clean[0].toUpperCase() + clean.slice(1).toLowerCase();
}

export function ValidateExpense(title, amount, category) {
  if (!title || title.trim().length < 3) {
    return "Title must be at least 3 characters";
  }

  if (isNaN(amount)) {
    return "Amount must be a valid number";
  }

  if (amount <= 0) {
    return "Amount must be greater than 0";
  }

  if (amount > 1000000) {
    return "Amount cannot exceed 1,000,000";
  }

  if (!category) {
    return "Please select a category";
  }
}
