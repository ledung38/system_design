import { RegularList } from "@/modules/layoutComp/lists";
import { LagerItems } from "@/modules/layoutComp/lists/LagerItems";
import { SmallItems } from "@/modules/layoutComp/lists/SmallItems";

const templateData = {
  items: [
    {
      name: "John Doe",
      age: 30,
    },
    {
      name: "Jane Doe",
      age: 25,
    },
    {
      name: "Bob Smith",
      age: 35,
    },
  ],
};
const ListClientPage = () => {
  return (
    <>
      <RegularList
        items={templateData.items}
        sourceName="author"
        ItemComp={SmallItems}
      />
      <RegularList
        items={templateData.items}
        sourceName="author"
        ItemComp={LagerItems}
      />
    </>
  );
};

export default ListClientPage;
