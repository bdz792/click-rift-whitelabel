import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Full whitelabel access",
  "Priority support",
];

const CTASection = () => {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-section">
        <div className="relative rounded-3xl bg-gradient-hero p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Affiliate Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Join hundreds of affiliate networks and marketers who trust ClickRift to power their tracking and lead generation.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                className="bg-primary-foreground text-clickrift-primary-dark hover:bg-primary-foreground/90 shadow-elevated"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="text-primary-foreground hover:bg-primary-foreground/10 border-2 border-primary-foreground/30"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
