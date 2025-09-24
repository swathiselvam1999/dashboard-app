import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { eventData } from "../data/chartData";

const EventChart = () => {
  return (
    <div className="p-4 bg-white dark:bg-slate-900 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Events Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={eventData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc"/>
            <XAxis dataKey="month" stroke="#8884d8"/>
            <YAxis stroke="#8884d8"/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey="past" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="upcoming" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventChart;
