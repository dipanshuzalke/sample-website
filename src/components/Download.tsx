
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Download = () => {
  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Anuraag - Founder"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              Hi, I'm Anuraag
            </h2>
            <div className="text-xl text-black space-y-4">
              <p>
                A qualified Chartered Accountant with over 8 years of expertise in Accounting, Bookkeeping, Financial Planning, International Taxation, and Transfer Pricing, making me a trusted professional for your bookkeeping needs.
              </p>
              <p>
                My career has empowered numerous businesses across the US, Canada, Australia, and Europe, equipping them with the tools to master their finances and optimize decision-making.
              </p>
              <p>
                I firmly advocate that meticulous financial records serve as the cornerstone of pivotal business choices. When executed with precision, these financial pillars not only guide but propel businesses toward unparalleled success.
              </p>
            </div>
            <Button className="px-8 py-6 text-lg bg-orange-400 text-white hover:bg-orange-700 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
