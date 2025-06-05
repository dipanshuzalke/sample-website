
import { Card } from "@/components/ui/card";
import { LineChart, SearchCheck, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "In-Depth Micro Analysis",
      description: "Detailed analysis of your accounts to provide actionable financial insights for your business"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "100% Personalized Service",
      description: "Tailored bookkeeping solutions designed specifically for your business needs and goals"
    },
    {
      icon: <SearchCheck className="w-6 h-6 text-white" />,
      title: "A Dedicated Team",
      description: "Work with experienced professionals committed to ensuring your financial success"
    }
  ];

  return (
    <div className="py-20 px-4 bg-white text-black relative overflow-hidden" id="why-choose-us">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-black">
              Why Choose Us?
            </h2>
            <p className="text-xl text-black">
              Our commitment to excellence in bookkeeping services ensures your business maintains financial clarity and control, allowing you to focus on growth and success.
            </p>
          </div>
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift border border-gray-500 flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center group-hover:bg-black transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
