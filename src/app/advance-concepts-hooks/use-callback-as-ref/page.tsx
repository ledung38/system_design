"use client";
import React, { useCallback, useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  // Xử lý khi element thực sự mount vào DOM và khi unmount.
  // Nếu có TH input chưa xuất hiện như giả lập switch open thì khi dùng useRef nó sẽ null, useEffect sẽ null
  //   Dùng useCallback ref khi bạn cần phản ứng với việc DOM được mount/unmount, hoặc cần sự chủ động cao hơn trong việc điều khiển node.
  const ref = useCallback((input) => {
    if (!input) return;
    input.focus();
  }, []);
  return (
    <div className="p-3">
      <button onClick={() => setOpen(!open)}>Switch</button>
      <p>
        Page
        {open && (
          <input
            ref={ref}
            type="text"
            className="border-2 pl-2 ml-2 rounded-md"
          />
        )}
      </p>
    </div>
  );
};

export default Page;
