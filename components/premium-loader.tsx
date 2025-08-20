"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function PremiumLoader() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/loader.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  useEffect(() => {
    // Hide loader after 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading && animationData) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="w-110 h-110">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    );
  }

  if (isLoading && !animationData) {
    return (
      <div className="fixed inset-0 z-0 flex items-center justify-center bg-black">
        <p className="text-white">BasedOn Loading...</p>
      </div>
    );
  }

  return null;
}

