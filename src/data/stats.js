import { RiCalendarEventFill, RiTeamFill, RiBarChartFill, RiUserStarFill } from "react-icons/ri";

export const stats = [
  {
    id: 1,
    title: "Upcoming Events",
    value: 12,
    icon: RiCalendarEventFill,
    color: "bg-indigo-500",
  },
  {
    id: 2,
    title: "Total Attendance",
    value: 340,
    icon: RiTeamFill,
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Feedback Rating",
    value: "4.5/5",
    icon: RiBarChartFill,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Active Users",
    value: 128,
    icon: RiUserStarFill,
    color: "bg-pink-500",
  },
];
