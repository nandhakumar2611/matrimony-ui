import { useEffect, useState } from "react";
import lotusFlower from "@/assets/lotus-flower.gif";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading after fade out animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-zen transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="animate-lotus-float">
          <img
            src={lotusFlower}
            alt="Loading..."
            className="w-32 h-32 object-contain drop-shadow-lg"
          />
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
