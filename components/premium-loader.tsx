"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function PremiumLoader() {
  const [animationData, setAnimationData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    fetch("/loader.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  useEffect(() => {
    // Start fade out after 10 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 10000);

    // Hide loader completely after fade animation (1 second)
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 11000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (isLoading && animationData) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-150 h-150">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    );
  }

  if (isLoading && !animationData) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        <p className="text-white">BasedOn Loading...</p>
      </div>
    );
  }

  return null;
}
