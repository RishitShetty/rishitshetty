import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu, 
  Code, 
  Wrench, 
  Zap,
  Microchip,
  Wifi,
  Settings,
  Timer
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-500",
      skills: ["Embedded C", "C++", "Assembly", "Python", "VHDL"]
    },
    {
      title: "Hardware Platforms",
      icon: Cpu,
      color: "text-green-500",
      skills: ["ARM Cortex", "ESP32", "Arduino", "Raspberry Pi", "STM32", "ATmega"]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "text-orange-500",
      skills: ["KiCad", "LTspice", "ROS2", "Gazebo", "Blender"]
    },
    {
      title: "Communication Protocols",
      icon: Wifi,
      color: "text-purple-500",
      skills: ["SPI", "I2C", "UART", "CAN", "Modbus"]
    },
    {
      title: "Real-Time Systems",
      icon: Timer,
      color: "text-red-500",
      skills: ["FreeRTOS", "Bare-metal Programming", "Interrupt Handling", "Task Scheduling"]
    },
    {
      title: "Embedded Specializations",
      icon: Microchip,
      color: "text-cyan-500",
      skills: ["IoT Architecture", "Power Optimization", "Motor Control", "PCB Design"]
    },
    {
      title: "System Integration",
      icon: Settings,
      color: "text-yellow-500",
      skills: ["Hardware-Software Integration", "System Testing", "Debugging", "Performance Analysis"]
    },
    {
      title: "Advanced Topics",
      icon: Zap,
      color: "text-pink-500",
      skills: ["Machine Learning", "Computer Vision", "Neural Networks", "Edge Computing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set in embedded systems, robotics, and automation technologies
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card/50 border border-border/50 hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <h3 className="font-semibold text-sm">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline" 
                          className="mr-2 mb-2 text-xs bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Core Expertise Highlight */}
          <div className="mt-16 text-center animate-fadeInUp">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Core Expertise</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Specializing in <span className="text-primary font-semibold">bare-metal programming</span>, 
                  <span className="text-primary font-semibold"> FreeRTOS</span>, and 
                  <span className="text-primary font-semibold"> real-time systems</span> with a focus on 
                  <span className="text-primary font-semibold"> IoT device architecture</span> and 
                  <span className="text-primary font-semibold"> power optimization</span> for 
                  performance-critical embedded applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;