import { BarChart3, Clock3 } from "lucide-react";

function DemoReport() {
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

        <div className="reports-coming-soon">
          <Clock3 size={18} />
          <span>Coming Soon</span>
        </div>
      </div>
    </section>
  );
}

export default DemoReport;
