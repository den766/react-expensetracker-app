import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

function CategorySpendingChart({ categoryReportData }) {
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
          <Bar dataKey="total" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategorySpendingChart;
