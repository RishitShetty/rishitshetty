import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Calendar, Zap, Info } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  // Project Google Drive links
  const projectLinks: Record<string, string> = {
    "Smart Trolley using ESP32 + AWS": "https://drive.google.com/embeddedfolderview?id=13p3NLIwFAAo92DgFK2eLSFJqOnhg6X6-#grid",
    "Assistive Vision + Bone Conduction Audio": "https://drive.google.com/embeddedfolderview?id=1sp0R1xGy6nrjjGqkkJKF6bbz1TybGcoo#grid", 
    "Embedded Ultrasonic Humidifier": "https://drive.google.com/embeddedfolderview?id=1BADwKLMVwNE-V7m6zT4MTEGDBNezV1jg#grid"
  };

  const projects = [
    {
      title: "Smart Trolley using ESP32 + AWS",
      year: "2024", 
      description: "Intelligent shopping cart system with automated item detection and checkout processing.",
      achievements: [
        "95% scan accuracy for item recognition",
        "60-70% checkout time reduction",
        "Real-time inventory sync with AWS cloud",
        "RFID and computer vision integration"
      ],
      technologies: ["ESP32", "AWS IoT", "Computer Vision", "RFID", "Python"],
      status: "Completed",
      featured: true,
      hasMedia: true
    },
    {
      title: "Real-Time Deterministic Sensor Fusion and Control System using ESP32 FreeRTOS",
      year: "2025",
      description: "Implements 1kHz fused-sensor sampling, 100Hz sensor fusion, and 1kHz PID control loop with RTOS queues, mutexes, and priority inversion",
      achievements: [
        "Dual-sensor sampling achieves 1kHz, 400Hz rates",
        "Average jitter maintained under 25 microseconds",
        "Sensor fusion operates consistently at 100Hz",
        "PID control loop sustains 1kHz frequency",
        "Zero missed deadlines across 10,000+ samples"
      ],
      technologies: ["ESP-IDF", "FreeRTOS", "ESP32", "C"],
      status: "Completed",
      featured: true,
      githubLink: "https://github.com/RishitShetty/RTOS-Sensor-Fusion"
    },
    {
      title: "STM32 Bare-Metal Testing Suite",
      year: "2025",
      description: "Comprehensive testing framework for STM32 microcontrollers at register level.",
      achievements: [
        "Register-level validation system",
        "Memory, GPIO, and timer testing",
        "Automated test execution",
        "Performance benchmarking tools"
      ],
      technologies: ["STM32", "Embedded C", "Assembly", "Unit Testing"],
      status: "Completed",
      githubLink: "https://github.com/RishitShetty/STM32F4-Bare-Metal-Hardware-Validation-Suite"
    },
    {
      title: "AMR with Neural-Enhanced Navigation",
      year: "2025 (Present)",
      description: "Autonomous Mobile Robot with advanced navigation using neural networks.",
      achievements: [
        "Real-time motor control system",
        "Watchdog implementation",
        "40-60% localization improvement",
        "SLAM integration"
      ],
      technologies: ["ROS2", "Neural Networks", "Motor Control", "SLAM", "C++"],
      status: "In Progress",
      featured: true
    },
    {
      title: "Assistive Vision + Bone Conduction Audio",
      year: "2025",
      description: "Accessibility device for visually impaired individuals with advanced object detection.",
      achievements: [
        "84% mAP object detection accuracy",
        "OCR with 95% accuracy for pharmaceutical text", 
        "Real-time audio feedback system",
        "Portable embedded design"
      ],
      technologies: ["Computer Vision", "OCR", "Audio Processing", "Machine Learning"],
      status: "Completed",
      hasMedia: true
    },
    {
      title: "Autonomous Drone for Warehouse Logistics",
      year: "2024",
      description: "ROS2-based quadcopter for automated warehouse inventory management.",
      achievements: [
        "PID controller implementation",
        "30-second precision hover capability",
        "Autonomous navigation system",
        "Inventory scanning integration"
      ],
      technologies: ["ROS2", "PID Control", "Drone Control", "Computer Vision"],
      status: "Completed"
    },
    {
      title: "Embedded Ultrasonic Humidifier", 
      year: "2025",
      description: "Custom PCB design with bare-metal firmware for smart humidifier control.",
      achievements: [
        "Custom PCB design and assembly",
        "Bare-metal ATmega firmware", 
        "Ultrasonic transducer control",
        "Smart environmental monitoring"
      ],
      technologies: ["ATmega", "PCB Design", "Bare-metal", "Sensors"],
      status: "Completed",
      hasMedia: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative embedded systems and robotics projects showcasing practical expertise
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`bg-card/50 border border-border/50 hover-lift animate-fadeInUp ${
                  project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar size={14} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                          className={`text-xs ${
                            project.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                              : 'bg-primary/20 text-primary border-primary/30'
                          }`}
                        >
                          {project.status}
                        </Badge>
                        {project.featured && (
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            <Zap size={10} className="mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 animate-glow"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="text-xs bg-background/50 hover:bg-primary/10 hover:text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* GitHub and Media Buttons */}
                    <div className="flex gap-2">
                      {project.githubLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 flex items-center justify-center space-x-2 hover:bg-primary/10 hover:text-primary"
                          onClick={() => window.open(project.githubLink, '_blank')}
                        >
                          <Github size={14} />
                          <span>GitHub</span>
                        </Button>
                      )}
                      {project.hasMedia && (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              className={`${project.githubLink ? 'flex-1' : 'w-full'} flex items-center justify-center space-x-2 hover:bg-primary/10 hover:text-primary`}
                            >
                              <Info size={14} />
                              <span>More Info</span>
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh]">
                            <DialogHeader>
                              <DialogTitle>{project.title} - Media & Documents</DialogTitle>
                            </DialogHeader>
                            <div className="w-full h-[60vh]">
                              <iframe
                                src={projectLinks[project.title]}
                                width="100%"
                                height="100%"
                                className="border border-border/30 rounded-lg"
                                title={`${project.title} Media`}
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center mt-12 animate-fadeInUp">
            <Button 
              variant="outline"
              className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 hover:text-primary hover-glow"
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;