"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

type LazyLottieProps = {
  animationPath: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
};

export function LazyLottie({ animationPath, className, loop = true, autoplay = true }: LazyLottieProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    fetch(animationPath)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load animation");
        return res.json();
      })
      .then((data) => {
        if (isMounted) setAnimationData(data);
      })
      .catch((err) => {
        console.error("Lottie loading error:", err);
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [animationPath]);

  if (error) return <div className={className} />; // Fallback to empty div or placeholder
  if (!animationData) return <div className={className} />; // Loading state

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
