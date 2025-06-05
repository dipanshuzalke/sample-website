
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Anuraag is a wonderful professional for any team. He has excellent skills in bookkeeping, amazing communication, and goes above and beyond to provide the best results for the job.",
      author: "Eri Kardos",
      role: "Relearn Love LLC"
    },
    {
      quote: "I especially appreciated his positive attitude and desire for process improvement. I would hire him back for future job openings in a heartbeat!",
      author: "Eri Kardos",
      role: "Relearn Love LLC"
    },
    {
      quote: "Professional bookkeeping services that transformed our financial management. Highly recommended for any business.",
      author: "Satisfied Client",
      role: "Business Owner"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-black text-center mb-4">
          What Our Clients Say
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Join businesses who have transformed their financial management with our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift border border-gray-500">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <p className="text-black mb-4 italic">{testimonial.quote}</p>
              <div className="text-black font-semibold">{testimonial.author}</div>
              <div className="text-black text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
