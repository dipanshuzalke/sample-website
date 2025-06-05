
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ title, prices, features, isPopular = false }) => {
  return (
    <Card className={`bg-gray-100 border hover-lift ${isPopular ? 'border-gray-500' : 'border-gray-500'}`} id="pricing">
      <CardHeader>
        <CardTitle className="text-black text-2xl">{title}</CardTitle>
        <CardDescription className="text-black">
          Select the volume of expenses per month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="text-black">$0-$10K expenses:</div>
            <div className="text-4xl font-bold text-black">${prices[0]}<span className="text-black text-lg">/mo</span></div>
          </div>
          <div className="space-y-2">
            <div className="text-black">$10K-$50K expenses:</div>
            <div className="text-2xl font-bold text-black">${prices[1]}<span className="text-black text-sm">/mo</span></div>
          </div>
          <div className="space-y-2">
            <div className="text-black">$50K-$100K expenses:</div>
            <div className="text-2xl font-bold text-black">${prices[2]}<span className="text-black text-sm">/mo</span></div>
          </div>
          <div className="pt-4 space-y-2">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check className="text-accent mt-1 flex-shrink-0" size={16} />
                <span className="text-black text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className={`w-full ${isPopular ? 'bg-orange-400 text-black hover:bg-orange-700' : 'glass-effect hover:bg-black'}`}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

const AddonService = ({ title, price, features }) => {
  return (
    <Card className="border hover-lift bg-gray-100 border-gray-500 p-4">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-black text-lg font-semibold">{title}</h3>
          <div className="text-black font-bold">${price}</div>
        </div>
        <div className="space-y-2">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="text-accent mt-1 flex-shrink-0" size={14} />
              <span className="text-black text-xs">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Pricing = () => {
  const pricingTiers = [
    {
      title: "Basic Plan",
      prices: [75, 180, 300],
      features: [
        "Set up (Subscribing to necessary software, Syncing Bank feeds, etc.)",
        "Building custom chart of Accounts",
        "Processing Bank Feeds",
        "Monthly Bookkeeping (Cash Basis)",
        "Preparation of profit and loss statement",
        "Monthly call to understand the books"
      ]
    },
    {
      title: "Standard Plan",
      prices: [120, 300, 500],
      features: [
        "Includes all Basic Plan features",
        "Fortnightly Bookkeeping (Cash/Accrual Basis)",
        "Entering bills and invoices",
        "Preparation of Accounts Payables and Accounts Receivables"
      ],
      isPopular: true
    },
    {
      title: "Advanced Plan",
      prices: [200, 500, 800],
      features: [
        "Includes all Standard Plan features",
        "Weekly Bookkeeping (Cash/Accrual basis)",
        "Class/Location-based bookkeeping",
        "Preparation of Budgets and Budgets vs Actuals report",
        "Preparation of KPI Reports"
      ]
    }
  ];

  const addons = [
    {
      title: "Clean-Up",
      price: "15/hr",
      features: [
        "Analyzing historical data and correcting opening balances",
        "Identifying duplicate entries, mismatched transactions",
        "Cleaning the chart of accounts",
        "Segregating business and personal transactions"
      ]
    },
    {
      title: "Payroll",
      price: "50",
      features: [
        "Adding Employees on the payroll system",
        "Processing Payroll periodically"
      ]
    },
    {
      title: "Forecasting",
      price: "500",
      features: [
        "Gather historical data and set assumptions",
        "Create forecasted financial statements"
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-background backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. For transactions over 500+, contact us for a custom quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingTier
              key={index}
              title={tier.title}
              prices={tier.prices}
              features={tier.features}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">Add-On Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <AddonService
                key={index}
                title={addon.title}
                price={addon.price}
                features={addon.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
