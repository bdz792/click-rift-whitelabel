import { MousePointerClick, Mail, Palette, BarChart3, Shield, Zap } from "lucide-react";

import { Link, Globe, Phone, Code, Repeat, Wallet } from "lucide-react";

const features = [
  {
    icon: Link,
    title: "Smartlinks",
    description: "Automated offer rotation, A/B testing, and EPC-optimized routing for maximum earnings per click.",
  },
  {
    icon: Palette,
    title: "Custom Networks",
    description: "SaaS-ready tracking platform powers fully branded networks, built to scale with your affiliates and growth demands.",
  },
  {
    icon: Phone,
    title: "Pay Per Call",
    description: "Mastery of Ringba and top platforms lets us drive unmatched ROI on Pay Per Call campaigns.",
  },
  {
    icon: Code,
    title: "Development Solutions",
    description: "Tailored web and lander development, data and call platform integrations, and end-to-end tools built to scale.",
  },
  {
    icon: Repeat,
    title: "Meta CAPI",
    description: "Seamless postback integration with Meta gives ad buyers real-time conversion data and tracking advantages.",
  },
  {
    icon: Wallet,
    title: "Weekly Payouts",
    description: "Reliable weekly payments for the previous week's earnings with flexible options including wire, PayPal, and crypto.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-clickrift-soft">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-clickrift-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Unlock the Full Power of
            <span className="text-gradient"> Performance Marketing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Build and scale your own network with custom SaaS tracking. 
            Fully branded networks with advanced analytics, invoicing and real-time optimization.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
