import SplitterComponent from "@/app/layout-comp/splitter/page.client";
import Link from "next/link";

const TemplatePage = () => {
  return (
    <div className="p-10">
      <div className="flex gap-4">
        <Link href="/layout-comp">root</Link>
        <Link href="/layout-comp/list">list</Link>
        <Link href="/layout-comp/modal">modal</Link>
        <Link href="/layout-comp/splitter">splitter</Link>
      </div>
    </div>
  );
};

export default TemplatePage;
