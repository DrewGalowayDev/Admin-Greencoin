import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const earningsData = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 110 },
  { name: 'Mar', value: 150 },
  { name: 'Apr', value: 180 },
  { name: 'May', value: 220 },
  { name: 'Jun', value: 280 },
];

const projectDistributionData = [
  { name: 'Agroforestry', value: 45, color: '#1a936f' },
  { name: 'Soil Management', value: 30, color: '#88d498' },
  { name: 'Renewable Energy', value: 25, color: '#c6dabf' },
];

export const EarningsChart = () => {
  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-6 col-span-2 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-primary font-semibold text-lg">Credit Earnings (Last 6 Months)</h3>
        <button className="bg-white/10 border border-primary/30 text-white hover:bg-primary/20 hover:border-primary px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2">
          <i className="fas fa-download"></i>
          Export Data
        </button>
      </div>

      <div className="h-64 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)"
              fontSize={12}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#1a936f" 
              strokeWidth={3}
              dot={{ fill: '#1a936f', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, fill: '#2ec294' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ProjectDistributionChart = () => {
  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-primary font-semibold text-lg">Project Distribution</h3>
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white text-lg shadow-lg">
          <i className="fas fa-chart-pie"></i>
        </div>
      </div>

      <div className="h-64 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={projectDistributionData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {projectDistributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Legend */}
        <div className="flex flex-col gap-2 mt-4">
          {projectDistributionData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-white/80 text-sm">{item.name}</span>
              <span className="text-white/60 text-sm ml-auto">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};