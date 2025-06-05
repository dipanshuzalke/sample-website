
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Transforming Chaos to Clarity, one transaction at a time.
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            We specialize in restoring clarity to your finances, ensuring you maintain a firm grip on your business's financial health so that you can focus on what you truly love – your business.
          </p>
          <Button className="px-8 py-6 text-lg bg-orange-400 text-white hover:bg-orange-700 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Book A Free Consultation Today
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-black">8+</div>
              <div className="text-black">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">100%</div>
              <div className="text-black">Personalized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-black">4+</div>
              <div className="text-black">Countries Served</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1011&q=80"
              alt="Bookkeeping Services"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
