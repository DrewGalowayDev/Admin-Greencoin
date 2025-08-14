const transactions = [
  {
    date: "Jun 15, 2023",
    id: "TX-789456",
    type: "Sale",
    credits: "120.50",
    amount: "$843.50",
    status: "active"
  },
  {
    date: "Jun 10, 2023",
    id: "TX-123456",
    type: "Verification",
    credits: "85.25",
    amount: "-",
    status: "verified"
  },
  {
    date: "Jun 5, 2023",
    id: "TX-654321",
    type: "Purchase",
    credits: "40.00",
    amount: "$280.00",
    status: "active"
  },
  {
    date: "May 28, 2023",
    id: "TX-987654",
    type: "Sale",
    credits: "200.00",
    amount: "$1,400.00",
    status: "pending"
  },
  {
    date: "May 20, 2023",
    id: "TX-456789",
    type: "Verification",
    credits: "62.50",
    amount: "-",
    status: "verified"
  }
];

const TransactionsTable = () => {
  const getStatusStyles = (status: string) => {
    const styles = {
      active: "bg-success/15 text-success",
      pending: "bg-warning/15 text-warning",
      verified: "bg-info/15 text-info"
    };
    return styles[status as keyof typeof styles] || "bg-gray-500/15 text-gray-500";
  };

  const getStatusText = (status: string) => {
    const texts = {
      active: "Completed",
      pending: "Pending", 
      verified: "Verified"
    };
    return texts[status as keyof typeof texts] || status;
  };

  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl overflow-hidden col-span-2 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center p-6 relative z-10">
        <h3 className="text-primary font-semibold text-lg">Recent Transactions</h3>
        <button className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center gap-2">
          <i className="fas fa-plus"></i>
          New Transaction
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto relative z-10">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
            <tr>
              <th className="text-left py-4 px-6 font-semibold">Date</th>
              <th className="text-left py-4 px-6 font-semibold">Transaction ID</th>
              <th className="text-left py-4 px-6 font-semibold">Type</th>
              <th className="text-left py-4 px-6 font-semibold">Credits</th>
              <th className="text-left py-4 px-6 font-semibold">Amount</th>
              <th className="text-left py-4 px-6 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-primary/15 hover:bg-white/5 transition-colors duration-200">
                <td className="py-4 px-6 text-white">{transaction.date}</td>
                <td className="py-4 px-6 text-white">{transaction.id}</td>
                <td className="py-4 px-6 text-white">{transaction.type}</td>
                <td className="py-4 px-6 text-white">{transaction.credits}</td>
                <td className="py-4 px-6 text-white">{transaction.amount}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(transaction.status)}`}>
                    {getStatusText(transaction.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;