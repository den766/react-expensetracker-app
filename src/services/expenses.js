export async function getExpenses() {
  const response = await fetch("http://localhost:5000/expenses");

  const data =  response.json();

  return data;
}

export async function createExpenses(expense) {
  const request = await fetch("http://localhost:5000/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });

  return request.json();

  // console.log(expenses);
}
