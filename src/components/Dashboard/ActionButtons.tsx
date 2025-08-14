const actions = [
  {
    icon: "fas fa-plus",
    label: "Log Farm Activity",
    primary: true
  },
  {
    icon: "fas fa-store", 
    label: "List Credits for Sale",
    primary: true
  },
  {
    icon: "fas fa-download",
    label: "Download Report",
    primary: false
  },
  {
    icon: "fas fa-calendar",
    label: "Schedule Field Visit", 
    primary: false
  }
];

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-8">
      {actions.map((action, index) => (
        <button 
          key={index}
          className={`
            px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2
            ${action.primary 
              ? 'bg-gradient-to-r from-primary to-primary-light text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30' 
              : 'bg-white/10 text-white border border-primary/30 hover:bg-primary/20 hover:border-primary'
            }
          `}
        >
          <i className={action.icon}></i>
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;