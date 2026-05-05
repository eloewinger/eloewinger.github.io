import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, FileText, Mail, Megaphone, MessageSquare, Sparkles } from "lucide-react";

const serviceCategories = [
  {
    title: "Website Copy",
    icon: FileText,
    services: [
      { name: "Homepage", price: "$350–$500" },
      { name: "Services/Programs Page", price: "$200–$300" },
      { name: "Full Website (5–7 pages)", price: "$1,200–$1,600" },
    ],
  },
  {
    title: "Content Writing",
    icon: MessageSquare,
    services: [
      { name: "Blog Post (800–1200 words)", price: "$250–$400" },
      { name: "Long-Form SEO Article (1300–2500 words)", price: "$400–$700" },
    ],
  },
  {
    title: "Email & CRM",
    icon: Mail,
    services: [
      { name: "Email Newsletter", price: "$150" },
      { name: "3-Email Welcome or Nurture Sequence", price: "$350" },
      { name: "Sales Sequence (5–7 emails)", price: "$550–$800" },
    ],
  },
  {
    title: "Advertising & Landing Pages",
    icon: Megaphone,
    services: [
      { name: "Facebook Ads (2–3 ads)", price: "$175" },
      { name: "Google Ads (3–5 variations)", price: "$150" },
      { name: "Landing Page Copy", price: "$300–$500" },
    ],
  },
  {
    title: "Brand Messaging",
    icon: Sparkles,
    services: [
      { name: "Brand Voice & Tone Guide", price: "$500–$900" },
      { name: "Tagline Development", price: "$150" },
    ],
  },
];

const retainers = [
  { name: "Starter", price: "$450/mo", hours: "up to 6 hours" },
  { name: "Growth", price: "$900/mo", hours: "up to 12 hours" },
  { name: "Full Support", price: "$2,000/mo", hours: "up to 25 hours" },
];

const pricingFactors = [
  { title: "Scope/length", description: "More sections, pages, or words require more time and depth." },
  { title: "Complexity", description: "Technical, research-heavy, or specialized topics may fall on the higher end." },
  { title: "Starting point", description: "Editing existing copy will be on the lower cost end, while creating from scratch will be higher." },
  { title: "Revisions", description: "Multiple rounds (3+) of feedback or team approvals may increase pricing." },
  { title: "Timeline", description: "Rush or tight deadlines may include an expedited fee." },
];

const policies = [
  "50% deposit for projects over $500",
  "Includes 2 rounds of revisions",
  "Pricing customizable based on scope",
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 animate-fade-up">
                Services & Pricing
              </h1>
              <p className="font-body text-lg md:text-xl text-muted-foreground animate-fade-up-delay-1">
                Thank you for your interest in working together. I'm grateful for the chance to help support your brand and bring your ideas to life!
              </p>
            </div>

            {/* Hourly Rate Highlight */}
            <div className="mt-12 flex justify-center animate-fade-up-delay-2">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 rounded-full border border-primary/20">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-body text-lg">
                  General Hourly Rate: <span className="font-semibold text-primary">$55/hour</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories.map((category, index) => (
                <Card key={category.title} className="hover-lift bg-card border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.services.map((service) => (
                        <li key={service.name} className="flex justify-between items-start gap-4">
                          <span className="font-body text-sm text-muted-foreground">{service.name}</span>
                          <span className="font-body text-sm font-medium text-foreground whitespace-nowrap">
                            {service.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Retainers */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
              Monthly Retainers
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {retainers.map((retainer, index) => (
                <Card
                  key={retainer.name}
                  className={`hover-lift text-center ${
                    index === 1 ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "bg-card border-border"
                  }`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="font-heading text-2xl">{retainer.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-heading text-3xl font-semibold text-primary mb-2">{retainer.price}</p>
                    <p className="font-body text-sm text-muted-foreground">{retainer.hours}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How Pricing Works */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
                How My Pricing Works
              </h2>
              <p className="font-body text-muted-foreground text-center mb-12">
                Prices may vary depending on a variety of factors including…
              </p>
              <div className="space-y-4">
                {pricingFactors.map((factor) => (
                  <div key={factor.title} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{factor.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Policies */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
                Policies
              </h2>
              <div className="inline-flex flex-col gap-4">
                {policies.map((policy) => (
                  <div key={policy} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-body text-muted-foreground">{policy}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
