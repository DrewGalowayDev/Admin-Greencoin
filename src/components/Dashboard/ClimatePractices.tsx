const practices = [
  {
    icon: "fas fa-tree",
    title: "Agroforestry",
    description: "2.5 hectares planted with coffee & shade trees",
    progress: 85
  },
  {
    icon: "fas fa-seedling", 
    title: "No-Till Farming",
    description: "3.0 hectares under conservation tillage",
    progress: 100
  },
  {
    icon: "fas fa-leaf",
    title: "Cover Cropping", 
    description: "Leguminous cover crops on 2.0 hectares",
    progress: 70
  },
  {
    icon: "fas fa-recycle",
    title: "Composting",
    description: "Organic waste management system",
    progress: 90
  }
];

const ClimatePractices = () => {
  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-8 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      <h3 className="text-primary text-xl font-semibold mb-6 relative z-10">Active Climate-Smart Practices</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {practices.map((practice, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="w-15 h-15 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white text-xl mb-4 mx-auto relative z-10">
              <i className={practice.icon}></i>
            </div>
            
            <h4 className="text-primary font-semibold mb-2 relative z-10">{practice.title}</h4>
            <p className="text-white/70 text-sm mb-4 relative z-10">{practice.description}</p>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative z-10">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                style={{ width: `${practice.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClimatePractices;