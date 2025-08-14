const parcels = [
  { name: "Parcel A (North Field)", credits: "45.2 tCO2e" },
  { name: "Parcel B (South Field)", credits: "32.7 tCO2e" },
  { name: "Parcel C (West Orchard)", credits: "46.9 tCO2e" }
];

const LandParcels = () => {
  return (
    <div className="bg-card backdrop-blur-xl border border-primary/20 rounded-2xl p-6 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-primary font-semibold text-lg">Land Parcels</h3>
        <button className="bg-white/10 border border-primary/30 text-white hover:bg-primary/20 hover:border-primary px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2">
          <i className="fas fa-plus"></i>
          Add
        </button>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="h-72 bg-green-100 rounded-lg flex items-center justify-center text-primary mb-4 relative z-10">
        <div className="text-center">
          <i className="fas fa-map-marked-alt text-5xl mb-4"></i>
          <p className="font-semibold">Interactive Land Map</p>
          <p className="text-sm text-green-700">Click to view parcel details</p>
        </div>
      </div>

      {/* Parcels List */}
      <div className="space-y-3 relative z-10">
        {parcels.map((parcel, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <span className="text-white">{parcel.name}</span>
            <span className="text-primary font-semibold">{parcel.credits}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandParcels;