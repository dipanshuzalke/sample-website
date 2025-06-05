
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-black">Procountants</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Services</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          <Button className="bg-orange-400 text-white hover:bg-orange-700">
            Book a Consultation
            <Calendar className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
