import { Link , Outlet} from "react-router-dom";


function ExpesneLayoutDashboard() {


      return (

          <div>

             <h1>Expese Tracker</h1>
            <nav>
                <Link to={"create-expense"}>Create Expense</Link>
                <Link to={"expense-list"}>Expense List</Link>
                <Link to={"reports"}>reports</Link>
            </nav>
            <Outlet/>
            <footer>2026</footer>
          </div>
      )
}

export default ExpesneLayoutDashboard;