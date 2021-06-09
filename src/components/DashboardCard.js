const DashboardCard = ({ title, icon, value }) => {
  return (
    <div className="flex flex-grow max-w-xs my-5 rounded-lg shadow-lg bg-white">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg m-5">
        {icon}
      </div>
      <div className="mx-2 self-center">
        <span className="text-sm">{title}</span>
        <p className="font-semibold antialiased">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
