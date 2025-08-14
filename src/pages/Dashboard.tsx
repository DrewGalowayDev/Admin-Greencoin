import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";
import StatsCard from "@/components/Dashboard/StatsCard";
import { EarningsChart, ProjectDistributionChart } from "@/components/Dashboard/Charts";
import TransactionsTable from "@/components/Dashboard/TransactionsTable";
import LandParcels from "@/components/Dashboard/LandParcels";
import ClimatePractices from "@/components/Dashboard/ClimatePractices";
import FarmActivities from "@/components/Dashboard/FarmActivities";
import ActionButtons from "@/components/Dashboard/ActionButtons";

const Dashboard = () => {
  const statsData = [
    {
      title: "Total Farmers",
      value: "1,024",
      label: "Registered Accounts",
      icon: "fas fa-users",
      iconBg: "blue",
      trend: {
        direction: "up" as const,
        value: "+24 this month"
      }
    },
    {
      title: "Active Projects",
      value: "87",
      label: "Ongoing Carbon Projects",
      icon: "fas fa-folder-open",
      iconBg: "green",
      trend: {
        direction: "up" as const,
        value: "+5 new projects"
      }
    },
    {
      title: "Credits Issued",
      value: "12,480",
      label: "Total Carbon Credits",
      icon: "fas fa-certificate",
      iconBg: "orange",
      trend: {
        direction: "up" as const,
        value: "+1,200 this month"
      }
    },
    {
      title: "Pending Approvals",
      value: "14",
      label: "Awaiting Admin Review",
      icon: "fas fa-hourglass-half",
      iconBg: "red",
      trend: {
        direction: "down" as const,
        value: "-3 from last week"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Header />
      {/* Main Content */}
      <main className="ml-0 lg:ml-sidebar mt-header p-8 min-h-screen">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2">
            Admin Dashboard
          </h1>
          <p className="text-foreground-light">Welcome, Admin! Manage farmers, projects, credits, and system events.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Charts Section: Project Distribution & Credits Issued */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ProjectDistributionChart />
          <EarningsChart />
        </div>

        {/* Admin Tables: Approvals & Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TransactionsTable />
          {/* Approvals Table Placeholder */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Pending Approvals</h2>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Farmer: Jane Doe</span>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
              </li>
              <li className="flex justify-between items-center">
                <span>Project: Green Acres</span>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
              </li>
              <li className="flex justify-between items-center">
                <span>Credit: #1248</span>
                <button className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
              </li>
            </ul>
          </div>
        </div>

        {/* System Events & Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* System Events Placeholder */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">System Events</h2>
            <ul className="space-y-2 text-sm">
              <li>Farmer John added new parcel (2 hours ago)</li>
              <li>Project "Green Future" verified (1 day ago)</li>
              <li>Credit #1247 retired (3 days ago)</li>
            </ul>
          </div>
          {/* Recent Logs Placeholder */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Logs</h2>
            <ul className="space-y-2 text-sm">
              <li>Admin login from IP 192.168.1.10</li>
              <li>Policy updated: Marketplace rules</li>
              <li>System notification sent to all farmers</li>
            </ul>
          </div>
        </div>

        {/* Action Buttons: Admin Quick Actions */}
        <ActionButtons />
      </main>
    </div>
  );
};

export default Dashboard;