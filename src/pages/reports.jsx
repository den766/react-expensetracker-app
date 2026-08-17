import { BarChart3 } from "lucide-react";
import CategorySpendingChart from "../components/CategorySpendingChart";

function Report({ categoryReportData }) {
  return (
    <section className="reports-page">
      <div className="reports-card">
        <div className="reports-icon">
          <BarChart3 size={52} />
        </div>

        <h2>Reports</h2>

        <p className="reports-description">
          View your spending patterns and category-wise expenses for the current month.
        </p>

        <h3>Category Spending Chart </h3>

        <CategorySpendingChart categoryReportData={categoryReportData} />
      </div>
    </section>
  );
}

export default Report;
