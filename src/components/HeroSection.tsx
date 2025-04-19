
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn("w-full bg-government-blue-pale py-12 md:py-20", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-government-blue mb-4">
            Your Guide to Local Government
          </h1>
          <p className="text-lg md:text-xl text-government-gray-dark mb-8">
            Find information about local rules, ordinances, and public data easily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-government-blue hover:bg-government-blue-light text-white"
            >
              Find Local Ordinances
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-government-blue text-government-blue hover:bg-government-blue-pale"
            >
              Apply for Permits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
