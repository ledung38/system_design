import ContainerClientComp from "@/app/container-comp/page.client";
import { ProtectedDashboard, ProtectedProfile } from "@/app/HOC/page.client";
import { LagerItems } from "@/modules/layoutComp/lists/LagerItems";
import { SmallItems } from "@/modules/layoutComp/lists/SmallItems";

const ContainerPage = () => {
  return (
    <div>
      <ProtectedDashboard />
      <ProtectedProfile />
    </div>
  );
};

export default ContainerPage;
