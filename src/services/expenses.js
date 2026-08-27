export async function getExpenses() {

    const response = await fetch("http://localhost:5000/expenses")
    console.log(response);

    const data = response.json();

    return data;
}

