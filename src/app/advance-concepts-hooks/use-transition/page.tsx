"use client";
import { ListClientPageDelay } from "@/app/advance-concepts-hooks/use-transition/page.client";
import React, { useState, useTransition } from "react";

const Page = () => {
  const [section, setSection] = useState("1");

  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec: string) => {
    // thực hiện setSection() dạng ưu tiên thấp. Nó sẽ được chạy ngầm để render Component nặng với trạng thái loading.
    // Khi có sự thay đổi nhanh, unMount như trường hợp chuyển tab ở đây thì sẽ mượt mà. Ghì đè luôn action mới.
    // Còn nếu ko sử dụng startTransition, Nó sẽ block, chờ component nặng nó hoàn thành đã thì mới chạy action mới.
    startTransition(() => {
      setSection(sec);
    });
  };
  return (
    <div className="p-10">
      <div className="flex gap-4">
        <button
          className="p-2 px-5 text-white rounded-2xl bg-gray-500"
          onClick={() => sectionHandler("1")}
        >
          Tab 1
        </button>
        <button
          className="p-2 px-5 text-white rounded-2xl bg-gray-500"
          onClick={() => sectionHandler("2")}
        >
          Tab 2
        </button>
        <button
          className="p-2 px-5 text-white rounded-2xl bg-gray-500"
          onClick={() => sectionHandler("3")}
        >
          Tab 3
        </button>
      </div>
      <div className="text-2xl">
        {section === "1" && <>Tab 1</>}
        {section === "2" && (
          <>
            <ListClientPageDelay value={15} />
          </>
        )}
        {section === "3" && <>Tab 3</>}
      </div>
    </div>
  );
};

export default Page;
