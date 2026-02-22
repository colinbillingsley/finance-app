import H1 from "@/components/headers/H1";
import dayjs from "dayjs";
import { CalendarDays } from "lucide-react";

const Dashboard = () => {
  const todaysDate = new Date();
  return (
    <div>
      <H1>Dashboard</H1>
      <div className="mt-4">
        <div className="flex items-center gap-2 text-2xl font-medium">
          <CalendarDays />
          <p>{dayjs(todaysDate).format("dddd, MMMM DD, YYYY")}</p>
        </div>
        <p className="text-xl font-medium">Welcome, Colin Billingsley</p>
      </div>
    </div>
  );
};

export default Dashboard;
