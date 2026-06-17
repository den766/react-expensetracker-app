import { NavLink, Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";

function ExpesneLayoutDashboard() {
  return (
    <div>
      <Header />
      
      <nav className="dashboard-nav">
        
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/expense-dashboard"}
          end
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"create-expense"}
        >
          Create Expense
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"expense-list"}
        >
          Expense List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"reports"}
        >
          Reports
        </NavLink>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default ExpesneLayoutDashboard;
