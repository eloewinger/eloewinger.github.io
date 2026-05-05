import { ArrowDown } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="animate-fade-up font-body text-sm uppercase tracking-[0.2em] text-primary font-medium mb-6">
            Strategic Communications & Content Strategist
          </p>
          
          <h1 className="animate-fade-up-delay-1 font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] mb-8">
            <span className="text-gradient">Emily Loewinger</span>
          </h1>
          
          <p className="animate-fade-up-delay-2 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            With 6 years of experience, I develop data-driven content and communication strategies that transform complex ideas into clear, impactful narratives — driving engagement and measurable results.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium hover:opacity-90 transition-all hover:-translate-y-0.5">
              View My Work
            </a>
            <a href="#about" className="inline-flex items-center px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-body font-medium hover:border-foreground/40 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>;
};
export default Hero;