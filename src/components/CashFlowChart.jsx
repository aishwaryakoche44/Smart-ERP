import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Jan", inflow: 5000000, outflow: 3000000 },
  { name: "Feb", inflow: 4500000, outflow: 2800000 },
  { name: "Mar", inflow: 5200000, outflow: 3100000 },
  { name: "Apr", inflow: 4800000, outflow: 2900000 },
  { name: "May", inflow: 5600000, outflow: 3300000 },
  { name: "Jun", inflow: 5100000, outflow: 3000000 },
];

export default function CashFlowChart() {
  return (
    <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mt-5 h-80 flex flex-col hover:shadow-md transition-shadow duration-300">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-gray-800">Cash Flow Trend</h3>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Last 6 Months</p>
      </div>

      <div className="flex-grow w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 10 }}
            />
            <Tooltip 
              cursor={{ fill: '#f9fafb' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            />
            <Legend 
              verticalAlign="top" 
              align="right" 
              iconType="circle" 
              wrapperStyle={{ paddingBottom: '25px', fontSize: '12px', fontWeight: '600' }}
            />
            <Bar 
              name="Inflow" 
              dataKey="inflow" 
              fill="#10B981" 
              radius={[4, 4, 0, 0]} 
              barSize={18}
            />
            <Bar 
              name="Outflow" 
              dataKey="outflow" 
              fill="#F59E0B" 
              radius={[4, 4, 0, 0]} 
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}