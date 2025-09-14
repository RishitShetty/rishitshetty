import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">Rishit Shetty</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embedded Systems Enthusiast crafting innovative solutions in robotics and automation. 
                Always excited to push the boundaries of technology.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/RishitShetty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://linkedin.com/in/rishit-shetty-399703254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="mailto:rishitshetty99@gmail.com"
                  className="p-2 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Education & Status */}
            <div className="space-y-4">
              <h4 className="font-semibold">Currently</h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">B.Tech ECE</span> • NIT Warangal
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">Graduating:</span> 2026
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary font-medium">Status:</span> Open for Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-muted-foreground text-sm flex items-center">
              © {currentYear} Rishit Shetty. Crafted with 
              <Heart size={14} className="mx-1 text-red-500" />
              for innovation
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;