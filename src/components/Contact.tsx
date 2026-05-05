import { Mail, Linkedin, MapPin } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-12 md:py-[40px]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            
            <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Let's Work Together </h2>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            <a href="mailto:eloewinger1@gmail.com" className="group flex flex-col items-center p-8 bg-card rounded-2xl shadow-soft border border-border/50 hover-lift text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">Email</h3>
              <p className="font-body text-sm text-muted-foreground">eloewinger1@gmail.com</p>
            </a>

            <a href="https://www.linkedin.com/in/emily-loewinger/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center p-8 bg-card rounded-2xl shadow-soft border border-border/50 hover-lift text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">LinkedIn</h3>
              <p className="font-body text-sm text-muted-foreground">Connect with me</p>
            </a>

            
          </div>

          {/* CTA */}
          <div className="text-center p-8 md:p-12 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl">
            <h3 className="font-heading text-2xl md:text-3xl font-medium mb-4">
              Ready to start a project?
            </h3>
            
            <a href="mailto:eloewinger1@gmail.com" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium hover:opacity-90 transition-all hover:-translate-y-0.5">
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;