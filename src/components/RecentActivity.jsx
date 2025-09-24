import { activities } from "../data/activityData";
import { FiUser, FiCheckCircle, FiXCircle } from "react-icons/fi";

const RecentActivity = () => {
  return (
    <div className="mt-6 p-4 bg-white dark:bg-slate-900 rounded-xl shadow">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Recent Activity
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-slate-700">
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(({ id, user, action, date }) => (
              <tr
                key={id}
                className="hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                {/* User */}
                <td className="px-4 py-2">
                  <div className="inline-flex items-center gap-2 dark:text-white">
                    <FiUser className="text-gray-500 dark:text-gray-300" />
                    {user}
                  </div>
                </td>

                {/* Action */}
                <td className="px-4 py-2">
                  <div className="inline-flex items-center gap-2 dark:text-white">
                    {action.includes("Canceled") ? (
                      <FiXCircle className="text-red-500" />
                    ) : (
                      <FiCheckCircle className="text-green-500" />
                    )}
                    {action}
                  </div>
                </td>

                {/* Date */}
                <td className="px-4 py-2 dark:text-white">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
