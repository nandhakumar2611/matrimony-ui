import { useState } from "react";
import { Button } from "@/components/ui/button";
import lotusFlower from "@/assets/lotus-flower.gif";
import LoadingScreen from "@/components/loading-screen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-rose-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <div className="mb-8 animate-lotus-float">
              <img
                src={lotusFlower}
                alt="Lotus Flower"
                className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6  bg-clip-text">
              Find Your Inner Peace
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Welcome to a sanctuary of tranquility. Discover balance, harmony, and mindfulness 
              in every moment of your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-rose-400 hover:opacity-90 transition-opacity text-white shadow-soft"
              >
                Begin Your Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-accent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}      
      <section className="py-20 bg-rose-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-lotus flex items-center justify-center">
                <span className="text-3xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Mindfulness</h3>
              <p className="text-muted-foreground">
                Cultivate awareness and presence in every moment of your life
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-lotus flex items-center justify-center">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Growth</h3>
              <p className="text-muted-foreground">
                Nurture your personal development and blossom into your best self
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-soft hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-lotus flex items-center justify-center">
                <span className="text-3xl">☮️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Harmony</h3>
              <p className="text-muted-foreground">
                Discover balance between mind, body, and spirit
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
