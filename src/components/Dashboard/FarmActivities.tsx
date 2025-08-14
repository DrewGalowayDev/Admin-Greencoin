const activities = [
  {
    icon: "fas fa-camera",
    title: "Field Documentation Uploaded",
    description: "GPS-tagged photos of agroforestry plots submitted for verification",
    time: "2 hours ago"
  },
  {
    icon: "fas fa-flask",
    title: "Soil Sample Analysis Completed", 
    description: "SOC levels increased by 2.3% compared to baseline measurements",
    time: "1 day ago"
  },
  {
    icon: "fas fa-coins",
    title: "Carbon Credits Issued",
    description: "12.35 credits generated from Q2 2025 verification",
    time: "3 days ago"
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Training Session Completed",
    description: "Advanced Agroforestry Techniques certification earned",
    time: "1 week ago"
  }
];

const FarmActivities = () => {
  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      <h3 className="text-primary text-xl font-semibold mb-6 relative z-10">Recent Farm Activities</h3>
      
      <div className="space-y-4 relative z-10">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center p-4 bg-white/5 rounded-xl border-l-4 border-l-primary transition-all duration-300 hover:bg-primary/10 hover:translate-x-1 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
              <i className={activity.icon}></i>
            </div>
            
            <div className="flex-1">
              <h4 className="text-white font-semibold mb-1">{activity.title}</h4>
              <p className="text-white/60 text-sm">{activity.description}</p>
            </div>
            
            <div className="text-white/50 text-xs ml-4 flex-shrink-0">
              {activity.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmActivities;