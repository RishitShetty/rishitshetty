import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUpload, type UploadedFile } from '@/components/ui/file-upload';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { GraduationCap, MapPin, Calendar, FileText, Upload, ChevronDown, Download } from 'lucide-react';

const About = () => {
  const [resumeFiles, setResumeFiles] = useState<UploadedFile[]>([]);
  const [openResumeUpload, setOpenResumeUpload] = useState(false);

  const handleResumeChange = (files: UploadedFile[]) => {
    setResumeFiles(files);
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6 animate-slideInLeft">
              <h3 className="text-2xl font-semibold text-gradient">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year Electronics and Communication Engineering student at NIT Warangal, 
                  aspiring to build a career in embedded systems for robotics and automation. My journey 
                  in technology is driven by a deep fascination with how hardware and software converge 
                  to create intelligent systems.
                </p>
                <p>
                  With extensive experience in firmware coding using C, C++, and Assembly, I specialize 
                  in FreeRTOS, PCB design, and embedded communication protocols including SPI, I2C, UART, 
                  and CAN. My passion lies in bare-metal programming, IoT architectures, 
                  hardware-software integration, and developing power-optimized real-time systems.
                </p>
                <p>
                  I believe in the power of innovation and problem-solving through technology, constantly 
                  seeking to push the boundaries of what's possible in embedded systems and robotics.
                </p>
              </div>
            </div>

            {/* Education Card */}
            <div className="animate-fadeInUp">
              <Card className="bg-card/50 border border-border/50 hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">Education</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-foreground">
                            B.Tech in Electronics and Communication Engineering
                          </h5>
                          <p className="text-primary font-medium">
                            National Institute of Technology, Warangal
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>2022 – 2026</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>Warangal, India</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Interests */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-semibold">Key Interests</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Embedded Systems',
                    'Robotics & Automation',
                    'IoT Architecture',
                    'Real-time Systems',
                    'Bare-metal Programming',
                    'Hardware Integration'
                  ].map((interest, index) => (
                    <div 
                      key={interest}
                      className="flex items-center space-x-2 text-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
                      <span className="text-muted-foreground">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Section */}
              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-semibold">Resume</h4>
                
                {/* Display Resume if uploaded */}
                {resumeFiles.length > 0 && (
                  <div className="space-y-2">
                    {resumeFiles.map((file, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/10 rounded">
                            <FileText size={16} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{file.file.name}</p>
                            <p className="text-xs text-muted-foreground">{(file.file.size / 1024).toFixed(1)} KB</p>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            const url = URL.createObjectURL(file.file);
                            window.open(url, '_blank');
                          }}
                          className="flex items-center space-x-2"
                        >
                          <Download size={14} />
                          <span>View</span>
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Resume Upload Section */}
                <Collapsible
                  open={openResumeUpload}
                  onOpenChange={setOpenResumeUpload}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-between hover:bg-primary/10 hover:text-primary"
                    >
                      <div className="flex items-center space-x-2">
                        <Upload size={14} />
                        <span>Upload Resume</span>
                      </div>
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform ${
                          openResumeUpload ? 'rotate-180' : ''
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-3">
                    <FileUpload
                      onFilesChange={handleResumeChange}
                      maxFiles={1}
                      acceptedTypes={['.pdf', '.doc', '.docx']}
                      className="text-sm"
                    />
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;