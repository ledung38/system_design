import ContainerClientComp from "@/app/container-comp/page.client";
import { LagerItems } from "@/modules/layoutComp/lists/LagerItems";
import { SmallItems } from "@/modules/layoutComp/lists/SmallItems";

const ContainerPage = () => {
  return (
    <ContainerClientComp sourceName="author">
      <SmallItems />
      <LagerItems />
    </ContainerClientComp>
  );
};

export default ContainerPage;
