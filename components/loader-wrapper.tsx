"use client";

import { useState, useEffect } from "react";
import PremiumLoader from "@/components/premium-loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000); // 10s loader
    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
        <PremiumLoader />
      </div>
    </div>
  );
}
  return <>{children}</>;
}
