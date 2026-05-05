import { ExternalLink } from "lucide-react";
const projects = [{
  title: "Skinworks Wellness",
  category: "Website Redesign",
  description: "Redesigned website to increase conversions. Added online booking, product store, and improved UX. Achieved 10.21x ROAS on social campaigns.",
  image: "https://static.wixstatic.com/media/413ddb_557ab9a0a4f64b26ada88ab09449506b~mv2.png/v1/fill/w_600,h_312,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_557ab9a0a4f64b26ada88ab09449506b~mv2.png",
  link: "https://skinworkswellness.com/",
  metrics: "10.21x ROAS"
}, {
  title: "Leiper's Fork Distillery",
  category: "Website & Branding",
  description: "Enhanced user experience with online shopping, event booking, and distillery tours. Created an interactive history timeline showcasing their 1771-2017 journey.",
  image: "https://static.wixstatic.com/media/413ddb_d5b01ed403a148289bafef2fbfd010ad~mv2.png/v1/fill/w_600,h_285,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_d5b01ed403a148289bafef2fbfd010ad~mv2.png",
  link: "https://www.leipersforkdistillery.com/whiskeys",
  metrics: "Full Rebrand"
}, {
  title: "MC Granite",
  category: "Case Study",
  description: "Developed data-driven marketing campaigns that delivered exceptional ROI through targeted advertising and optimized conversion funnels.",
  image: "https://static.wixstatic.com/media/413ddb_a018eb96a49f410c835dcdc340017a18~mv2.png/v1/fill/w_600,h_463,al_c,lg_1,q_85,enc_avif,quality_auto/413ddb_a018eb96a49f410c835dcdc340017a18~mv2.png",
  link: "https://drivesocialnow.com/case-study/mc-granite/",
  metrics: "31.03x ROI"
}, {
  title: "Sandman IP",
  category: "Website & SEO",
  description: "Created a professional yet warm website for this Florida-based IP law practice. Incorporated beachy themes and bright visuals per client request.",
  image: "https://static.wixstatic.com/media/413ddb_cca86ad5d57b419da52ec9ad43cf7740~mv2.png/v1/fill/w_600,h_263,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_cca86ad5d57b419da52ec9ad43cf7740~mv2.png",
  link: "https://www.sandmanip.com/",
  metrics: "SEO Optimized"
}];
const shortFormAds = [{
  title: "Spa Ad",
  description: "Copy that feels soothing and luxurious. The goal here was to give customers a sense of longing for a relaxing spa day.",
  image: "https://static.wixstatic.com/media/413ddb_eec829ae91bf4fd3b5435b103d4f21fc~mv2.png/v1/fill/w_250,h_399,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/enhanced_spa_ad.png"
}, {
  title: "Fitness Studio Ad",
  description: "Exciting, fun, and a little risqué—copy that draws customers in for workouts that give a thrill.",
  image: "https://static.wixstatic.com/media/413ddb_13f4ae46486d44508a7eb6a218c6da7a~mv2.png/v1/fill/w_250,h_399,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202025-02-02%20at%204_10_02%20AM.png"
}, {
  title: "Rodeo Ad",
  description: "True Western energy with a good pun and some good ol' family fun.",
  image: "https://static.wixstatic.com/media/413ddb_50bba6c97a2f4e0c94a53e3f93d8783d~mv2.png/v1/crop/x_3,y_0,w_623,h_1008/fill/w_250,h_399,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_50bba6c97a2f4e0c94a53e3f93d8783d~mv2.png"
}];
const amazonStorefront = [{
  title: "4Patriots Breakfast Kit",
  description: "SEO-optimized Amazon listing for survival food products with compelling product descriptions.",
  image: "https://static.wixstatic.com/media/413ddb_2e417880e2ac4d7eafef4384732248d6~mv2.png/v1/fill/w_650,h_323,al_c,lg_1,q_85,enc_avif,quality_auto/413ddb_2e417880e2ac4d7eafef4384732248d6~mv2.png",
  link: "https://www.amazon.com/4Patriots-Country-Griddle-Breakfast-Kit/dp/B09RTBXFXC/"
}, {
  title: "Leiper's Fork Bourbon",
  description: "Product page copy for premium bottled-in-bond bourbon whiskey.",
  image: "https://cdn-ilcagkl.nitrocdn.com/wwWWtSFzmMvtcqqsdxieOpGaLuiuGtVN/assets/images/optimized/rev-611dc53/leipersforkdistillery.com/wp-content/themes/leipersfork/static/img/bourbon-bottle.png",
  link: "https://www.leipersforkdistillery.com/whiskeys"
}, {
  title: "EMP Protection Kit",
  description: "Storefront product copy for emergency preparedness equipment.",
  image: "https://static.wixstatic.com/media/413ddb_37acdaab62db44baa792eba0f525ec49~mv2.png/v1/fill/w_340,h_235,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_37acdaab62db44baa792eba0f525ec49~mv2.png",
  link: "https://4patriots.com/product/emp-protection-3-piece-bag-kit"
}];
const articlesBlog = [{
  title: "New Age Addiction",
  description: "Investigative article on students struggling to break the Juul habit.",
  image: "https://static.wixstatic.com/media/413ddb_921ca9a4480944eba999def0c75fe814~mv2.png/v1/fill/w_578,h_565,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/413ddb_921ca9a4480944eba999def0c75fe814~mv2.png",
  link: "https://eaglenews.org/23279/news/new-age-addiction-students-struggle-to-break-juul-habit/"
}, {
  title: "Why Most People Still Choose the Plastic Straw",
  description: "Op-ed exploring the behavioral and environmental reasons people—even environmentalists—reach for plastic straws.",
  image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*IzPbWLOPR0ZrYpYb5W0qng.png",
  link: "https://medium.com/@emiliahisme/why-most-people-yes-even-environmentalists-still-choose-the-plastic-straw-2729b23c0eec"
}, {
  title: "Are Native Bees Trying to Tell Us Something?",
  description: "Environmental feature exploring the decline of native bee populations in Florida.",
  image: "https://static.wixstatic.com/media/413ddb_418d26965c454eaf8866d29e53a71cfa~mv2.png/v1/fill/w_636,h_310,al_c,lg_1,q_85,enc_avif,quality_auto/413ddb_418d26965c454eaf8866d29e53a71cfa~mv2.png",
  link: "https://changingflorida.org/2019/05/07/are-native-bees-trying-to-tell-us-something-is-anyone-listening/"
}];
const Portfolio = () => {
  return <section id="portfolio" className="py-24 bg-muted/30 md:py-0">
      <div className="container mx-auto px-6 my-0">
        {/* Featured Projects */}
        <div className="text-center max-w-2xl mx-auto mb-16 py-[30px] my-[30px]">
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">Featured Projects</h2>
          <p className="font-body text-lg text-muted-foreground">
            From websites and 60+ page landers to SMS, email campaigns, and everything in between, here's a glimpse of my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {projects.map(project => <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border/50">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-body font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-body font-medium rounded-full">
                    {project.metrics}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>)}
        </div>

        {/* Short-Form Ads */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-heading text-3xl md:text-4xl font-medium mb-4">Short-Form Copy</h3>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {shortFormAds.map(ad => <div key={ad.title} className="group bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50">
              <div className="relative overflow-hidden flex justify-center bg-muted/50 p-4">
                <img src={ad.image} alt={ad.title} className="h-80 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold mb-2">{ad.title}</h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {ad.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* Amazon & Storefront */}
        

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {amazonStorefront.map(item => <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border/50">
              <div className="relative aspect-video overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>)}
        </div>

        {/* Articles & Blogs */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-heading text-3xl md:text-4xl font-medium mb-4">Articles & Blogs</h3>
          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articlesBlog.map(article => <a key={article.title} href={article.link} target="_blank" rel="noopener noreferrer" className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift border border-border/50">
              <div className="relative aspect-video overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-soft">
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </a>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;
