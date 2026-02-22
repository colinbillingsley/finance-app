import { AddIncome } from "@/components/forms/AddIncome";
import H1 from "@/components/headers/H1";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

const Income = () => {
  const todaysDate = new Date();
  return (
    <div>
      <H1 className="mb-6">Income</H1>

      <div>
        <AddIncome />
      </div>
    </div>
  );
};

export default Income;
