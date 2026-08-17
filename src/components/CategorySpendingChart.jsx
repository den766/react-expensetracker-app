import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

function CategorySpendingChart({ categoryReportData }) {
  if (categoryReportData.length === 0) {
    return (
      <div className="chart-empty-state">
        <ChartNoAxesColumnIncreasing size={40} />
        <p>No spending data available for this month.</p>
      </div>
    );
  }
  return (
    <div className="category-spending-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 50,
          }}
          data={categoryReportData}
        >
          <XAxis
            dataKey={"category"}
            angle={-45}
            textAnchor="end"
            height={70}
            interval={0}
          />
          <YAxis />
          <Bar dataKey="total" fill="#2563eb" maxBarSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategorySpendingChart;
