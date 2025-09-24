import { stats } from "../data/stats";

const StatsCards = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ id, title, value, icon: Icon, color }) => (
        <div
          key={id}
          className="flex items-center p-4 rounded-xl shadow bg-white dark:bg-slate-900 
          transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${color}`}>
            <Icon size={22} />
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</h3>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
