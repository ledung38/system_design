import ParentComponent from "./parent";
import mitt from "mitt";

export const emitter = mitt();

function Page() {
  return (
    <>
      <ParentComponent />
    </>
  );
}

export default Page;
