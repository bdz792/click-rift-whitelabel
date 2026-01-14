import { Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configure Your Platform",
    description: "Set up your whitelabel instance in minutes. Add your branding, connect domains, and configure tracking parameters.",
  },
  {
    number: "02",
    icon: Rocket,
    title: "Launch Campaigns",
    description: "Create tracking links, set up conversion pixels, and start routing traffic. Our system handles the complexity.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Scale & Monetize",
    description: "Analyze performance in real-time, optimize campaigns, and monetize your leads through our buyer network.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-section">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-clickrift-primary uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Go Live in <span className="text-gradient">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to revenue in record time. Our streamlined process gets your affiliate tracking platform up and running fast.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-clickrift-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step Number Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-cta shadow-glow mb-8 relative z-10">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-clickrift-primary/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-6 h-6 text-clickrift-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
