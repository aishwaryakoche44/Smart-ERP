import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Purchases", value: 45 },
  { name: "Salaries", value: 25 },
  { name: "Utilities", value: 10 },
  { name: "Rent", value: 8 },
  { name: "Misc.", value: 12 },
];

const COLORS = ["#3B82F6", "#EF4444", "#F59E0B", "#10B981", "#8B5CF6"];

export default function ExpensePieChart() {
  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col h-full">
      <p className="font-semibold mb-4">Top Expense By Category</p>

      {/* Use flex-grow to fill parent height */}
      <div className="flex-grow w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 10, bottom: 10 }}>
            <Tooltip />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom" 
              align="center" 
              iconType="circle"
              wrapperStyle={{ fontSize: '11px', paddingTop: '15px' }}
            />
            <Pie data={data} cx="50%" cy="48%" outerRadius={65} innerRadius={45} dataKey="value" paddingAngle={5}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}