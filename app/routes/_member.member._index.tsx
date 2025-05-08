import { DataTable } from "~/components/data-table";
import { data } from "~/data/constant/data";
import { DashboardContent } from "~/components/Members/dashboard-content";

const Member = () => {
  return (
    <div className="p-3 text-black">
      {/* <DataTable data={data} /> */}
      <DashboardContent />
    </div>
  );
};

export default Member;
