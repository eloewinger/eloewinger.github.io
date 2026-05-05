import { Search, Users, Mail, Palette } from "lucide-react";
const skillCategories = [{
  icon: Search,
  title: "SEO Implementation",
  description: "Keyword research, optimization, and content strategy for ranking.",
  tools: ["SEMRush", "Google Analytics"]
}, {
  icon: Users,
  title: "CRM Systems",
  description: "Managing customer relationships and sales.",
  tools: ["Salesforce", "HubSpot"]
}, {
  icon: Mail,
  title: "Email Marketing",
  description: "Thoughtful campaigns that won't go to the spam folder.",
  tools: ["Mailchimp", "Klaviyo", "Constant Contact"]
}, {
  icon: Palette,
  title: "Design & Creative",
  description: "Visual storytelling and compelling copy.",
  tools: ["Canva", "Adobe Creative Cloud", "Photoshop"]
}];
const Skills = () => {
  return <section id="skills" className="py-12 bg-muted/30 md:py-0">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 my-[30px] py-[30px]">
          
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
            Skills & Expertise
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((skill, index) => <div key={skill.title} className="group bg-card p-8 rounded-2xl shadow-soft hover-lift border border-border/50" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">
                {skill.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map(tool => <span key={tool} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {tool}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;