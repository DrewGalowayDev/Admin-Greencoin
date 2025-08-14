import { useState } from 'react';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuSections = [
    {
      title: "Dashboard",
      items: [
        { icon: "fas fa-tachometer-alt", label: "Overview", active: true, badge: undefined },
        { icon: "fas fa-chart-pie", label: "Stats", badge: undefined },
        { icon: "fas fa-chart-line", label: "Analytics", badge: undefined }
      ]
    },
    {
      title: "Farmers",
      items: [
        { icon: "fas fa-users", label: "All Farmers", badge: undefined },
        { icon: "fas fa-user-check", label: "Approvals", badge: undefined },
        { icon: "fas fa-user-slash", label: "Blocked Accounts", badge: undefined }
      ]
    },
    {
      title: "Land Parcels",
      items: [
        { icon: "fas fa-map", label: "All Parcels", badge: undefined },
        { icon: "fas fa-hourglass-half", label: "Pending Approval", badge: undefined }
      ]
    },
    {
      title: "Projects",
      items: [
        { icon: "fas fa-folder-open", label: "All Projects", badge: undefined },
        { icon: "fas fa-clipboard-check", label: "Verification Requests", badge: undefined }
      ]
    },
    {
      title: "Credits",
      items: [
        { icon: "fas fa-certificate", label: "Issued Credits", badge: undefined },
        { icon: "fas fa-leaf", label: "Retired Credits", badge: undefined }
      ]
    },
    {
      title: "Marketplace",
      items: [
        { icon: "fas fa-store", label: "Marketplace", badge: undefined },
        { icon: "fas fa-gavel", label: "Auctions", badge: undefined },
        { icon: "fas fa-exchange-alt", label: "Transactions", badge: undefined },
        { icon: "fas fa-tag", label: "Set Prices", badge: undefined }
      ]
    },
    {
      title: "Activities",
      items: [
        { icon: "fas fa-history", label: "Recent Logs", badge: undefined },
        { icon: "fas fa-server", label: "System Events", badge: undefined }
      ]
    },
    {
      title: "Notifications",
      items: [
        { icon: "fas fa-bell", label: "Send Alert", badge: undefined },
        { icon: "fas fa-bell-slash", label: "System Notifications", badge: undefined }
      ]
    },
    {
      title: "Settings",
      items: [
        { icon: "fas fa-cogs", label: "System Config", badge: undefined },
        { icon: "fas fa-file-alt", label: "Policies", badge: undefined }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary/20 text-white border-none rounded-lg p-3 shadow-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <i className="fas fa-bars text-xl"></i>
      </button>

      {/* Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-screen w-sidebar bg-sidebar backdrop-blur-xl border-r border-sidebar-border z-40 overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/10 before:to-transparent before:pointer-events-none
      `}>
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white/20 rounded border border-white/30"></div>
          </div>
          <div className="text-white font-semibold text-lg">GreenCoin</div>
        </div>

        {/* Menu */}
        <div className="p-4">
          {menuSections.map((section, index) => (
            <div key={index} className="mb-6">
              <div className="px-5 py-2 text-xs uppercase tracking-wider text-white/70 font-medium">
                {section.title}
              </div>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button className={`
                      w-full flex items-center gap-3 px-5 py-3 text-left transition-all duration-200 
                      border-l-3 relative group
                      ${item.active 
                        ? 'bg-white/10 border-l-secondary text-success' 
                        : 'border-l-transparent text-white/90 hover:bg-white/10 hover:border-l-secondary hover:text-success'
                      }
                    `}>
                      <i className={`${item.icon} w-5 text-center`}></i>
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="bg-secondary text-primary-dark px-2 py-1 rounded-full text-xs font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;