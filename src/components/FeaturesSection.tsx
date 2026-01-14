import { MousePointerClick, Mail, Palette, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MousePointerClick,
    title: "Click Tracking",
    description: "Real-time tracking of every click, conversion, and revenue event. Advanced attribution modeling included.",
  },
  {
    icon: Mail,
    title: "Lead Management",
    description: "Capture, validate, and monetize email leads. Built-in lead scoring and automated buyer matching.",
  },
  {
    icon: Palette,
    title: "Whitelabel Ready",
    description: "Launch under your own brand with custom domains, logos, and color schemes. Full API access included.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into campaign performance with customizable dashboards and automated reporting.",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "AI-powered fraud detection to filter bots, duplicate clicks, and suspicious traffic patterns.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-millisecond redirect speeds. Global CDN ensures your campaigns never lose a click.",
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
            Everything You Need to
            <span className="text-gradient"> Scale Affiliate Revenue</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit for affiliate marketers, networks, and lead buyers — 
            designed to maximize conversions and simplify operations.
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
