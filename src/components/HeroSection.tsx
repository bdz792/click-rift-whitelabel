import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-clickrift-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-clickrift-glow/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container-section relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clickrift-primary/10 border border-clickrift-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-clickrift-primary animate-pulse" />
            <span className="text-sm font-medium text-clickrift-primary">
              Now Available as Whitelabel SaaS
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Track, Convert &{" "}
            <span className="text-gradient">Monetize</span>
            <br />
            Your Affiliate Campaigns
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Powerful affiliate tracking and lead management platform. 
            Monitor clicks, optimize conversions, and sell email leads — all under your own brand.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="mr-2 h-5 w-5 fill-current" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by affiliate marketers worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground">50M+</span>
                <span className="text-sm">Clicks Tracked</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground">10K+</span>
                <span className="text-sm">Campaigns</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground">500+</span>
                <span className="text-sm">Whitelabel Partners</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground">99.9%</span>
                <span className="text-sm">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
