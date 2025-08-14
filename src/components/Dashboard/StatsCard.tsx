interface StatsCardProps {
  title: string;
  value: string;
  label: string;
  icon: string;
  iconBg: string;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
}

const StatsCard = ({ title, value, label, icon, iconBg, trend }: StatsCardProps) => {
  const bgGradients = {
    green: 'from-primary to-primary-light',
    blue: 'from-blue-500 to-blue-400',
    orange: 'from-orange-500 to-orange-400',
    red: 'from-red-500 to-red-400'
  };

  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl hover:shadow-primary/20 relative overflow-hidden group">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <h3 className="text-primary font-semibold text-base">{title}</h3>
        <div className={`w-12 h-12 bg-gradient-to-br ${bgGradients[iconBg as keyof typeof bgGradients]} rounded-xl flex items-center justify-center text-white text-lg shadow-lg`}>
          <i className={icon}></i>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
        <div className="text-white/70 text-sm mb-3">{label}</div>
        
        {trend && (
          <div className={`flex items-center gap-2 text-sm ${trend.direction === 'up' ? 'text-success' : 'text-danger'}`}>
            <i className={`fas ${trend.direction === 'up' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
            <span>{trend.value}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;