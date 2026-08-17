import { BarChart, Bar, XAxis, YAxis } from "recharts";

function CategorySpendingChart({ categoryReportData }) {
  return (
    <div>
      <h3>Category Spending Chart </h3>
      <BarChart width={600} height={300} data={categoryReportData}>
        {
          <>
            <XAxis dataKey={"category"} />
            <YAxis />
            <Bar dataKey="total" />
          </>
        }
      </BarChart>
    </div>
  );
}

export default CategorySpendingChart;
