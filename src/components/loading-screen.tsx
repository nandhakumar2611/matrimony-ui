import { useEffect, useState } from "react";
// import lotusFlower from "@/assets/lotus-flower.gif";
// import lotusFlowerNew from "@/assets/lotus-flower-2.gif";
// import lotusFlowerNew from "@/assets/lotus-flower-3.gif";
import frame1 from "@/assets/lotus-1.png";
import frame2 from "@/assets/lotus-left-1.png";
import frame3 from "@/assets/lotus-right-1.png";

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
    // <div
    //   className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-zen transition-opacity duration-600 ${
    //     fadeOut ? "opacity-0" : "opacity-100"
    //   }`}
    // >
    //   <div className="flex flex-col items-center gap-6">
    //     <div className="animate-lotus-float">
    //       <img
    //         src={lotusFlowerNew}
    //         alt="Loading..."            
    //         className="w-32 h-32 object-contain drop-shadow-lg"
    //       />
    //     </div>
    //     <div className="flex gap-1.5">
    //       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
    //       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
    //       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
    //     </div>
    //   </div>
    // </div>
    <>
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-zen transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-64 h-32 flex items-center justify-center">
          <img
            src={frame1}
            alt="Loading..."
            // className="absolute w-16 h-16 object-contain animate-fade-in"
            className="absolute w-32 h-32 object-contain animate-lotus-fade-scale"
            // style={{ animationDelay: "0s", animationFillMode: "both" }}
            style={{ animationDelay: "0s"}}
          />
          <img
            src={frame2}
            alt="Loading..."
            // className="absolute w-16 h-16 object-contain animate-slide-in-from-right"
            className="absolute w-32 h-32 object-contain animate-lotus-from-left"
            // style={{ animationDelay: "0.4s", animationFillMode: "both", left: "25%" }}
            // style={{ animationDelay: "0.4s", animationFillMode: "both"}}
            style={{ animationDelay: "0.4s"}}
          />
          <img
            src={frame3}
            alt="Loading..."
            // className="absolute w-16 h-16 object-contain animate-slide-in-from-left"
            className="absolute w-32 h-32 object-contain animate-lotus-from-right"
            // style={{ animationDelay: "0.8s", animationFillMode: "both", right: "25%" }}
            // style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
    </>
  );
};

export default LoadingScreen;
