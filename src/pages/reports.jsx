import { BarChart3 } from "lucide-react";
import CategorySpendingChart from "../components/CategorySpendingChart";

function DemoReport({ categoryReportData }) {
  return (
    <section className="reports-page">
      <div className="reports-card">
        <div className="reports-icon">
          <BarChart3 size={52} />
        </div>

        <h2>Reports</h2>

        <p className="reports-description">
          Visual insights, spending trends, and category analytics will be
          available here in a future update.
        </p>

        <h3>Category Spending Chart </h3>

        <CategorySpendingChart categoryReportData={categoryReportData} />
      </div>
    </section>
  );
}

export default DemoReport;
