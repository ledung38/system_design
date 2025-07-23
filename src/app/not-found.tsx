"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// import animationData from '@/shared/assets/lotties/404.json';
// import { Button, Container, Text } from '@/shared/components/ui';

// const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex min-h-[70dvh] flex-col items-center justify-center">
      {/* <Lottie options={defaultOptions} height={400} width={400} /> */}
      <span>Trang không tồn tại</span>
      <button>
        <Link href="/" className="text-main">
          Quay lại trang chủ
        </Link>
      </button>
    </div>
  );
}
