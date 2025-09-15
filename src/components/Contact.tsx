import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rishitshetty99@gmail.com',
      link: 'mailto:rishitshetty99@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8971884379',
      link: 'tel:+918971884379'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'rishit-shetty-399703254',
      link: 'https://linkedin.com/in/rishit-shetty-399703254'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'RishitShetty',
      link: 'https://github.com/RishitShetty'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'NIT Warangal, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting embedded systems projects or discuss opportunities? Let's connect!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or simply connect with fellow engineers and technology enthusiasts. Whether you're 
                  looking for expertise in embedded systems, robotics, or automation, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div className="flex items-center space-x-4 p-4 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a 
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover-lift"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>
                      {content}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;