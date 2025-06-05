
import { Github, Twitter, Linkedin, Mail, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden border border-gray-500-t-1" id="contact">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black">Procountants</h3>
            <p className="text-black">
              Transforming financial chaos to clarity for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-black">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-black">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-black">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-black transition-colors">Bookkeeping</a></li>
              <li><a href="#" className="text-black hover:text-black transition-colors">Financial Clean-Up</a></li>
              <li><a href="#" className="text-black hover:text-black transition-colors">Payroll Services</a></li>
              <li><a href="#" className="text-black hover:text-black transition-colors">Financial Forecasting</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-black hover:text-black transition-colors">About Anuraag</a></li>
              <li><a href="#testimonials" className="text-black hover:text-black transition-colors">Testimonials</a></li>
              <li><a href="#why-choose-us" className="text-black hover:text-black transition-colors">Why Choose Us</a></li>
              <li><a href="#pricing" className="text-black hover:text-black transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-black" />
                <a href="mailto:anuraag@procountants.com" className="text-black hover:text-black transition-colors">anuraag@procountants.com</a>
              </li>
              <li>
                <Button className="mt-4 w-full bg-orange text-white bg-orange-400 hover:bg-orange-700 flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Consultation
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-black">
            © 2024 Procountants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
