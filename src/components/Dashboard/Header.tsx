import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
    document.body.classList.toggle('light-theme');
  };

  return (
    <header className="fixed top-0 left-sidebar right-0 h-header bg-card backdrop-blur-xl border-b border-primary/20 flex items-center justify-between px-8 z-30 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        {/* Breadcrumb */}
        <div className="hidden md:flex items-center gap-2 text-foreground-light text-sm">
          <span>Home</span>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-primary font-semibold">Dashboard</span>
        </div>

        {/* Search */}
        <div className="relative">
          <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-foreground-light pointer-events-none"></i>
          <input 
            type="text"
            placeholder="Search projects, credits, transactions..."
            className="bg-white/10 border border-primary/30 rounded-full pl-12 pr-4 py-2 w-80 lg:w-96 transition-all duration-300 focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/10 placeholder-foreground-light"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative bg-white/10 hover:bg-primary text-foreground hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
          <i className="fas fa-bell"></i>
          <span className="absolute -top-1 -right-1 bg-danger text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
            3
          </span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="bg-white/10 border border-primary text-primary hover:bg-primary hover:text-white w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
          title="Toggle light/dark mode"
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-full p-2 cursor-pointer transition-all duration-300">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-semibold text-sm">
            JD
          </div>
          <div className="hidden md:block">
            <div className="text-foreground font-semibold text-sm">John Doe</div>
            <div className="text-foreground-light text-xs">Carbon Farmer</div>
          </div>
          <i className="fas fa-chevron-down text-foreground-light text-xs"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;