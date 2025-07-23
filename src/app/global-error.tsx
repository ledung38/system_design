"use client";

import { useTransition } from "react";

// Error boundaries must be Client Components
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <h2>Có lỗi xảy ra vui lòng thử lại!</h2>
        <button
          onClick={() => {
            startTransition(() => {
              reset();
            });
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
