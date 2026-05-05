const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="font-heading text-xl font-semibold text-foreground">
            Emily<span className="text-primary">.</span>
          </a>
          
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Emily Loewinger. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/emily-loewinger/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:eloewinger1@gmail.com"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
