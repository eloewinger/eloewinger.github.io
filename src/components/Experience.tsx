const experiences = [{
  role: "Communications and Content Strategist",
  company: "Freelance",
  period: "2024 – Present",
  description: "Developed content informed by audience behavior and performance data, improving engagement and aligning messaging with user intent. Used AI tools to streamline business practices, workflows, and efficiency.",
  achievements: ["Data-driven content", "AI-powered workflows", "Audience engagement"]
}, {
  role: "Copywriter",
  company: "4Patriots",
  period: "2022 – 2025",
  description: "Created conversion-focused copy for survival and preparedness products. Specialized in long-form sales pages, email sequences, and Amazon storefronts with SEO-rich product descriptions.",
  achievements: ["60+ page landers", "Email campaigns", "Amazon optimization"]
}, {
  role: "Digital Marketing Copywriter",
  company: "Drive Social Media",
  period: "2021 – 2022",
  description: "Developed compelling ad copy and marketing strategies for diverse clients. Delivered measurable ROI through data-driven campaign optimization.",
  achievements: ["31.03x ROI (MC Granite)", "10.21x ROAS (Skinworks)", "Multi-channel campaigns"]
}, {
  role: "Copy & Content Strategist",
  company: "Digital Reach Online Solutions",
  period: "2020 – 2021",
  description: "Led content strategy for B2B and D2C clients. Created SEO-optimized blogs, website copy, and brand messaging frameworks.",
  achievements: ["SEO content strategy", "Brand voice development", "Content audits"]
}];
const Experience = () => {
  return <section id="experience" className="py-12 md:py-0">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 py-0 my-[50px]">
          
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Experience </h2>
          
        </div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => <div key={exp.company} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              
              <div className="bg-card p-6 md:p-8 rounded-2xl shadow-soft border border-border/50 ml-4">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-body font-medium rounded-full">
                    {exp.period}
                  </span>
                  <span className="text-muted-foreground font-body text-sm">
                    {exp.company}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-3">
                  {exp.role}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map(achievement => <span key={achievement} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-body rounded-full">
                      {achievement}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;