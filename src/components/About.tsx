import { Award, BookOpen, Target } from "lucide-react";
const About = () => {
  return <section id="about" className="py-12 md:py-[30px]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img alt="Emily Loewinger" className="w-full h-full object-cover" src="/lovable-uploads/049216bd-1710-4d96-90df-43165f6c25a7.png" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          </div>

          {/* Content side */}
          <div>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Content That Converts</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">Strategy is everything. It's what turns content into something that resonates, performs, and drives real results.</p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">Over the past 6 years, I've developed and executed content and communication strategies across eCommerce, B2B, D2C, and nonprofit organizations — translating complex ideas into clear, audience-focused messaging.</p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">I'm especially drawn to the "why" behind performance. I use data and audience insights to refine messaging, improve engagement, and create content that not only performs, but informs and drives impact.</p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-6">
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
