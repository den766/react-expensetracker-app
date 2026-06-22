export function saveExpenses(expenses) {
  // expenses = [
  //   {
  //     id: 1,
  //     title: "Groceries",
  //     amount: 1850,
  //     category: "Food",
  //     createdAt: "2026-02-03T08:15:00.000Z",
  //   },
  //   {
  //     id: 2,
  //     title: "Internet Bill",
  //     amount: 899,
  //     category: "Utilities",
  //     createdAt: "2026-02-05T14:30:00.000Z",
  //   },
  //   {
  //     id: 3,
  //     title: "Movie Ticket",
  //     amount: 350,
  //     category: "Entertainment",
  //     createdAt: "2026-02-12T18:45:00.000Z",
  //   },
  //   {
  //     id: 4,
  //     title: "Fuel",
  //     amount: 1200,
  //     category: "Transport",
  //     createdAt: "2026-02-18T10:20:00.000Z",
  //   },
  //   {
  //     id: 5,
  //     title: "Restaurant Dinner",
  //     amount: 950,
  //     category: "Food",
  //     createdAt: "2026-02-24T19:10:00.000Z",
  //   },

  //   {
  //     id: 6,
  //     title: "Electricity Bill",
  //     amount: 1450,
  //     category: "Utilities",
  //     createdAt: "2026-03-02T09:00:00.000Z",
  //   },
  //   {
  //     id: 7,
  //     title: "Bus Pass",
  //     amount: 800,
  //     category: "Transport",
  //     createdAt: "2026-03-06T07:30:00.000Z",
  //   },
  //   {
  //     id: 8,
  //     title: "Coffee Shop",
  //     amount: 280,
  //     category: "Food",
  //     createdAt: "2026-03-10T16:15:00.000Z",
  //   },
  //   {
  //     id: 9,
  //     title: "Netflix Subscription",
  //     amount: 649,
  //     category: "Entertainment",
  //     createdAt: "2026-03-15T20:00:00.000Z",
  //   },
  //   {
  //     id: 10,
  //     title: "Books",
  //     amount: 1200,
  //     category: "Other",
  //     createdAt: "2026-03-28T11:40:00.000Z",
  //   },

  //   {
  //     id: 11,
  //     title: "Groceries",
  //     amount: 2100,
  //     category: "Food",
  //     createdAt: "2026-04-04T17:00:00.000Z",
  //   },
  //   {
  //     id: 12,
  //     title: "Mobile Recharge",
  //     amount: 399,
  //     category: "Utilities",
  //     createdAt: "2026-04-08T13:25:00.000Z",
  //   },
  //   {
  //     id: 13,
  //     title: "Auto Fare",
  //     amount: 250,
  //     category: "Transport",
  //     createdAt: "2026-04-13T08:50:00.000Z",
  //   },
  //   {
  //     id: 14,
  //     title: "Gym Membership",
  //     amount: 1500,
  //     category: "Other",
  //     createdAt: "2026-04-20T18:00:00.000Z",
  //   },
  //   {
  //     id: 15,
  //     title: "Movie Night",
  //     amount: 600,
  //     category: "Entertainment",
  //     createdAt: "2026-04-22T20:10:00.000Z",
  //   },

  //   {
  //     id: 16,
  //     title: "Snacks",
  //     amount: 420,
  //     category: "Food",
  //     createdAt: "2026-04-27T15:45:00.000Z",
  //   },
  //   {
  //     id: 17,
  //     title: "Doctor Visit",
  //     amount: 1800,
  //     category: "Other",
  //     createdAt: "2026-04-30T10:00:00.000Z",
  //   },
  //   {
  //     id: 18,
  //     title: "Laptop Mouse",
  //     amount: 799,
  //     category: "Other",
  //     createdAt: "2026-05-03T12:15:00.000Z",
  //   },
  //   {
  //     id: 19,
  //     title: "Electricity Bill",
  //     amount: 1620,
  //     category: "Utilities",
  //     createdAt: "2026-05-07T09:30:00.000Z",
  //   },
  //   {
  //     id: 20,
  //     title: "Groceries",
  //     amount: 2400,
  //     category: "Food",
  //     createdAt: "2026-05-12T17:20:00.000Z",
  //   },

  //   {
  //     id: 21,
  //     title: "Fuel",
  //     amount: 1400,
  //     category: "Transport",
  //     createdAt: "2026-05-18T08:10:00.000Z",
  //   },
  //   {
  //     id: 22,
  //     title: "Online Course",
  //     amount: 2999,
  //     category: "Other",
  //     createdAt: "2026-05-25T21:00:00.000Z",
  //   },
  //   {
  //     id: 23,
  //     title: "Concert Ticket",
  //     amount: 699,
  //     category: "Entertainment",
  //     createdAt: "2026-05-28T14:35:00.000Z",
  //   },
  //   {
  //     id: 24,
  //     title: "Internet Bill",
  //     amount: 899,
  //     category: "Utilities",
  //     createdAt: "2026-06-02T09:15:00.000Z",
  //   },
  //   {
  //     id: 25,
  //     title: "Groceries",
  //     amount: 2250,
  //     category: "Food",
  //     createdAt: "2026-06-06T16:40:00.000Z",
  //   },

  //   {
  //     id: 26,
  //     title: "Coffee",
  //     amount: 180,
  //     category: "Food",
  //     createdAt: "2026-06-10T11:10:00.000Z",
  //   },
  //   {
  //     id: 27,
  //     title: "Movie Ticket",
  //     amount: 420,
  //     category: "Entertainment",
  //     createdAt: "2026-06-14T19:25:00.000Z",
  //   },
  //   {
  //     id: 28,
  //     title: "Fuel",
  //     amount: 1300,
  //     category: "Transport",
  //     createdAt: "2026-06-18T08:30:00.000Z",
  //   },
  //   {
  //     id: 29,
  //     title: "Headphones",
  //     amount: 1799,
  //     category: "Other",
  //     createdAt: "2026-06-21T13:50:00.000Z",
  //   },
  //   {
  //     id: 30,
  //     title: "Restaurant Lunch",
  //     amount: 780,
  //     category: "Food",
  //     createdAt: "2026-06-22T12:00:00.000Z",
  //   },
  // ];

  localStorage.setItem("expenses", JSON.stringify(expenses));
}

export function loadExpenses() {
  const storedExpenses = JSON.parse(localStorage.getItem("expenses"));

  return storedExpenses || [];
}
