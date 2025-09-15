import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import rishitPortrait from '@/assets/rishit-new-portrait.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-2">
              <p className="text-text-dim font-medium tracking-wider uppercase text-sm">
                Embedded Systems Engineer
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Rishit
                <br />
                <span className="text-gradient">Shetty</span>
              </h1>
            </div>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground font-light max-w-lg">
              Embedded Systems Enthusiast | Robotics & Automation Innovator
            </h2>
            
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Final-year ECE student at NIT Warangal, specializing in embedded firmware development, 
              real-time systems, and IoT architectures with a passion for innovation.
            </p>

            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium hover-glow"
              >
                View My Work
              </Button>
              
              <div className="flex items-center space-x-3">
                <a 
                  href="https://github.com/RishitShetty" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/rishit-shetty-399703254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:rishitshetty99@gmail.com"
                  className="p-3 rounded-full border border-border hover:bg-surface-elevated transition-colors hover-glow"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Portrait */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20"></div>
              <img 
                src={rishitPortrait} 
                alt="Rishit Shetty - Embedded Systems Engineer" 
                className="relative w-80 lg:w-96 h-96 lg:h-[480px] object-cover rounded-3xl border border-border/20"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;