import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Flexli Technologies Pvt. Ltd.",
      role: "Embedded Systems Intern",
      duration: "May 2025 – Aug 2025",
      location: "India, Bangalore",
      description: "Focused on hardware testing, firmware optimization, and advanced communication protocol improvements.",
      achievements: [
        "Optimized SPI/I2C/UART communication protocols",
        "Improved CAN throughput by 25%",
        "Enhanced ADC read times by ~90%",
        "Designed failure handling states and unit tests",
        "Conducted system-level RCA analysis",
        "Worked on motor drivers and Maxon PID testing",
        "Integrated BLDC and stepper motors with TMC drivers"
      ],
      technologies: ["C/C++", "CAN Protocol", "SPI/I2C/UART", "Motor Control", "PCB Design", "Unit Testing"]
    },
    {
      company: "AUMA Riester Gmbh & Co. Kg",
      role: "Student Industrial Intern",
      duration: "Jun 2024 – Jul 2024",
      location: "Bahrain, Saudi Arabia",
      description: "Gained hands-on experience in industrial automation and actuator systems in a global environment.",
      achievements: [
        "Simulation and configuration of customer-specific electric actuators",
        "Worked with Modbus protocols & SIMA² Master Station",
        "Conducted field visits to oil, gas, and water treatment facilities",
        "Tested electromechanical components in actuators",
        "Gained quality assurance experience",
        "Exposure to real-world industrial automation systems"
      ],
      technologies: ["Modbus Protocol", "SIMA² Master", "Industrial Automation", "QA Testing", "Actuator Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on experience in embedded systems development and industrial automation
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border border-border/50 hover-lift animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">Key Achievements</h4>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-glow"></div>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <h5 className="font-medium mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx}
                              variant="secondary" 
                              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;