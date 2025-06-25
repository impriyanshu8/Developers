
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, BookOpen, GraduationCap, FlaskConical, 
  Calendar, Trophy, FileText, Mail, Phone, MapPin,
  Zap, Cpu, Radio, Satellite, Award, TrendingUp, Globe,
  Download, ExternalLink, Building, Clock, DollarSign
} from 'lucide-react';

const DepartmentECE = () => {
  const programs = [
    { 
      name: 'B.E. Electronics & Communication Engineering', 
      duration: '4 Years', 
      intake: '60',
      eligibility: '10+2 with PCM, JEE Main qualified',
      fees: '₹85,000/year'
    },
    { 
      name: 'M.E. Electronics & Communication Engineering', 
      duration: '2 Years', 
      intake: '18',
      eligibility: 'B.E./B.Tech in ECE/EEE, GATE qualified',
      fees: '₹45,000/year'
    }
  ];

  const faculty = [
    { 
      name: 'Dr. Rajesh Kumar', 
      position: 'Professor & HOD', 
      specialization: 'VLSI Design, Digital Signal Processing',
      experience: '20+ years',
      publications: '85+ papers',
      email: 'rajesh.kumar@pu.ac.in'
    },
    { 
      name: 'Dr. Priya Sharma', 
      position: 'Associate Professor', 
      specialization: 'Communication Systems, Wireless Networks',
      experience: '15+ years',
      publications: '65+ papers',
      email: 'priya.sharma@pu.ac.in'
    },
    { 
      name: 'Dr. Amit Singh', 
      position: 'Assistant Professor', 
      specialization: 'Embedded Systems, IoT',
      experience: '12+ years',
      publications: '45+ papers',
      email: 'amit.singh@pu.ac.in'
    },
    { 
      name: 'Dr. Neha Gupta', 
      position: 'Assistant Professor', 
      specialization: 'Microwave Engineering, Antenna Design',
      experience: '10+ years',
      publications: '35+ papers',
      email: 'neha.gupta@pu.ac.in'
    }
  ];

  const labs = [
    { name: 'Digital Electronics Lab', equipment: 'Logic trainers, FPGA boards', capacity: '30 students' },
    { name: 'Analog Electronics Lab', equipment: 'CRO, Function generators, Multimeters', capacity: '30 students' },
    { name: 'Communication Systems Lab', equipment: 'DSO, Signal generators, Spectrum analyzers', capacity: '25 students' },
    { name: 'VLSI Design Lab', equipment: 'Cadence tools, Xilinx ISE, ModelSim', capacity: '40 students' },
    { name: 'Microprocessor Lab', equipment: '8085, 8086 kits, ARM boards', capacity: '30 students' },
    { name: 'Signal Processing Lab', equipment: 'MATLAB, LabVIEW, DSP processors', capacity: '35 students' },
    { name: 'Antenna & Wave Propagation Lab', equipment: 'Network analyzer, Anechoic chamber', capacity: '20 students' },
    { name: 'Project Lab', equipment: 'Prototyping tools, 3D printer', capacity: '50 students' }
  ];

  const achievements = [
    { year: '2024', achievement: 'Best Paper Award at IEEE Conference on 5G Technologies' },
    { year: '2024', achievement: 'Patent Filed for IoT-based Health Monitoring System' },
    { year: '2023', achievement: 'Students Won National Level Project Competition (Smart India Hackathon)' },
    { year: '2023', achievement: 'Research Grant of ₹15 Lakhs Received from DRDO' },
    { year: '2023', achievement: 'MoU signed with Texas Instruments for advanced training' },
    { year: '2022', achievement: 'Department ranked among top 50 ECE departments in India' }
  ];

  const researchAreas = [
    { area: '5G & Beyond Communication', projects: 8, funding: '₹25L' },
    { area: 'VLSI Design & Testing', projects: 12, funding: '₹35L' },
    { area: 'IoT & Wireless Sensor Networks', projects: 10, funding: '₹20L' },
    { area: 'Digital Signal Processing', projects: 6, funding: '₹15L' },
    { area: 'Antenna Design & RF Engineering', projects: 5, funding: '₹18L' },
    { area: 'Machine Learning in Communications', projects: 7, funding: '₹22L' }
  ];

  const placements = {
    percentage: '95%',
    averagePackage: '₹8.5 LPA',
    highestPackage: '₹45 LPA',
    companies: ['Google', 'Microsoft', 'Samsung', 'Intel', 'Qualcomm', 'MediaTek', 'Texas Instruments', 'Broadcom']
  };

  const events = [
    { 
      name: 'TECHNOVISION 2024', 
      type: 'National Conference', 
      date: 'March 15-16, 2024',
      description: 'Two-day conference on emerging communication technologies'
    },
    { 
      name: 'VLSI Workshop', 
      type: 'Technical Workshop', 
      date: 'February 20-22, 2024',
      description: 'Hands-on workshop on chip design using industry tools'
    },
    { 
      name: 'Industry Expert Lecture Series', 
      type: 'Guest Lectures', 
      date: 'Monthly',
      description: 'Regular lectures by industry experts and alumni'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Department Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Electronics & Communication Engineering</h1>
              <p className="text-xl text-purple-100">Innovating Communication Technologies</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">NBA Accredited</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">NIRF Ranked</Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">Industry Partnerships</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="placements">Placements</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To be a center of excellence in Electronics & Communication Engineering education and research, 
                    producing competent engineers who contribute to technological advancement and societal development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Provide quality education in ECE with emphasis on practical learning</li>
                    <li>• Foster innovation and research in emerging technologies</li>
                    <li>• Develop industry-ready professionals with strong ethical values</li>
                    <li>• Promote entrepreneurship and startup culture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold">450+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <GraduationCap className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm text-gray-600">Faculty</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <FlaskConical className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-gray-600">Laboratories</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-gray-600">Placement</div>
                </CardContent>
              </Card>
            </div>

            {/* Program Educational Objectives */}
            <Card>
              <CardHeader>
                <CardTitle>Program Educational Objectives (PEOs)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">PEO1: Technical Competence</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Graduates will demonstrate technical competence in electronics and communication engineering domains
                    </p>
                    <h4 className="font-semibold mb-2 text-blue-600">PEO2: Innovation & Research</h4>
                    <p className="text-sm text-gray-600">
                      Graduates will engage in innovative research and development activities
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">PEO3: Professional Ethics</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Graduates will exhibit professional ethics and social responsibility
                    </p>
                    <h4 className="font-semibold mb-2 text-blue-600">PEO4: Lifelong Learning</h4>
                    <p className="text-sm text-gray-600">
                      Graduates will pursue lifelong learning and adapt to changing technologies
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid gap-6">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" />
                        {program.name}
                      </span>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-sm text-gray-600">Intake</h4>
                        <p className="text-blue-600 font-medium">{program.intake} students</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-600">Eligibility</h4>
                        <p className="text-gray-700 text-sm">{program.eligibility}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-600">Annual Fees</h4>
                        <p className="text-green-600 font-medium">{program.fees}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Curriculum Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Curriculum Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Core Subjects</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Electronic Devices and Circuits</li>
                      <li>• Digital Signal Processing</li>
                      <li>• Communication Systems</li>
                      <li>• VLSI Design</li>
                      <li>• Microprocessors and Microcontrollers</li>
                      <li>• Antenna Theory and Wave Propagation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Emerging Technologies</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 5G and Beyond Communications</li>
                      <li>• Internet of Things (IoT)</li>
                      <li>• Machine Learning for Communications</li>
                      <li>• Embedded System Design</li>
                      <li>• Optical Communication</li>
                      <li>• Satellite Communication</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.position}</p>
                    <p className="text-gray-600 mb-2">Specialization: {member.specialization}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-3">
                      <span>Experience: {member.experience}</span>
                      <span>Publications: {member.publications}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <a href={`mailto:${member.email}`} className="text-blue-600 text-sm hover:underline">
                        {member.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Faculty Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Faculty Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">Total Faculty</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-600">PhD Holders</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">300+</div>
                    <div className="text-sm text-gray-600">Publications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">₹1.5Cr</div>
                    <div className="text-sm text-gray-600">Research Funding</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            {/* Research Areas */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{area.area}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Projects: </span>
                        <span className="font-medium text-blue-600">{area.projects}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Funding: </span>
                        <span className="font-medium text-green-600">{area.funding}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Ongoing and Completed Research */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600 mt-1" />
                      <div>
                        <span className="font-medium">5G Massive MIMO Systems</span>
                        <p className="text-sm text-gray-600">Funding: DRDO, ₹12L</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600 mt-1" />
                      <div>
                        <span className="font-medium">IoT-based Smart Agriculture</span>
                        <p className="text-sm text-gray-600">Funding: DST, ₹8L</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="h-4 w-4 mr-2 text-green-600 mt-1" />
                      <div>
                        <span className="font-medium">Machine Learning for 6G</span>
                        <p className="text-sm text-gray-600">Funding: SERB, ₹15L</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Award className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                      <div>
                        <span className="font-medium">Smart Antenna Systems (2023)</span>
                        <p className="text-sm text-gray-600">Published: 8 papers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                      <div>
                        <span className="font-medium">Medical Image Processing (2023)</span>
                        <p className="text-sm text-gray-600">Published: 5 papers</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Award className="h-4 w-4 mr-2 text-blue-600 mt-1" />
                      <div>
                        <span className="font-medium">Embedded System Design (2022)</span>
                        <p className="text-sm text-gray-600">Published: 6 papers</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Research Collaborations */}
            <Card>
              <CardHeader>
                <CardTitle>Research Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Industry Partners</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Texas Instruments</li>
                      <li>• Qualcomm Technologies</li>
                      <li>• Samsung R&D Institute</li>
                      <li>• Intel Technology</li>
                      <li>• MediaTek Inc.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Academic Partners</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• IIT Delhi</li>
                      <li>• IIT Kanpur</li>
                      <li>• IIIT Hyderabad</li>
                      <li>• University of California</li>
                      <li>• Technical University of Munich</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="labs" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {labs.map((lab, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <FlaskConical className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{lab.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{lab.equipment}</p>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-blue-600" />
                          <span className="text-sm text-blue-600">{lab.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lab Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Facilities & Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Software Tools</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• MATLAB & Simulink</li>
                      <li>• Cadence Design Suite</li>
                      <li>• Xilinx Vivado</li>
                      <li>• LabVIEW</li>
                      <li>• HFSS & CST Studio</li>
                      <li>• Proteus Design Suite</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Hardware Equipment</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Digital Storage Oscilloscopes</li>
                      <li>• Vector Network Analyzer</li>
                      <li>• Spectrum Analyzers</li>
                      <li>• FPGA Development Boards</li>
                      <li>• ARM Cortex Boards</li>
                      <li>• RF Test Equipment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Special Facilities</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Anechoic Chamber</li>
                      <li>• Clean Room Facility</li>
                      <li>• 3D Printer</li>
                      <li>• PCB Fabrication Unit</li>
                      <li>• High-Speed Internet</li>
                      <li>• Climate Controlled Environment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="grid gap-6">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-blue-600">{event.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date}
                          </span>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events & Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">IEEE Student Branch Annual Technical Fest</h4>
                    <p className="text-sm text-gray-600">April 2024 - Technical competitions and industry talks</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">5G Technology Workshop</h4>
                    <p className="text-sm text-gray-600">May 2024 - Hands-on workshop on 5G implementation</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Industry-Academia Meet</h4>
                    <p className="text-sm text-gray-600">June 2024 - Networking event with industry professionals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notable Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Rohit Sharma (2018)</h4>
                      <p className="text-sm text-gray-600">Senior Engineer at Qualcomm, San Diego, USA</p>
                      <p className="text-xs text-blue-600">Specialization: 5G Modem Design</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Priya Patel (2017)</h4>
                      <p className="text-sm text-gray-600">Lead VLSI Designer at Intel Corporation</p>
                      <p className="text-xs text-blue-600">Specialization: Processor Architecture</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Ankit Kumar (2019)</h4>
                      <p className="text-sm text-gray-600">Founder & CEO, TechStartup Solutions</p>
                      <p className="text-xs text-blue-600">IoT and Embedded Systems</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold">Neha Singh (2016)</h4>
                      <p className="text-sm text-gray-600">Research Scientist at Samsung R&D Institute</p>
                      <p className="text-xs text-blue-600">Wireless Communication Research</p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold">Vikash Gupta (2020)</h4>
                      <p className="text-sm text-gray-600">Software Engineer at Google, Bangalore</p>
                      <p className="text-xs text-blue-600">Machine Learning & AI</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold">Ravi Sharma (2015)</h4>
                      <p className="text-sm text-gray-600">PhD Scholar at MIT, USA</p>
                      <p className="text-xs text-blue-600">Quantum Communication</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Alumni Network */}
            <Card>
              <CardHeader>
                <CardTitle>Alumni Network & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Globe className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-gray-600">Alumni Worldwide</div>
                  </div>
                  <div>
                    <Building className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-gray-600">Startups Founded</div>
                  </div>
                  <div>
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-600">Industry Awards</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <Trophy className="h-5 w-5 mr-3 text-yellow-600" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{achievement.year}</Badge>
                          <span className="font-medium">{achievement.achievement}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Department Rankings */}
            <Card>
              <CardHeader>
                <CardTitle>Rankings & Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">National Rankings</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• NIRF Ranking: Top 50 ECE Departments (2024)</li>
                      <li>• Outlook India: Top 25 Engineering Colleges (2023)</li>
                      <li>• India Today: Best ECE Programs (2023)</li>
                      <li>• Times Engineering Survey: Excellence Award (2022)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Accreditations</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• NBA Accreditation (Valid till 2025)</li>
                      <li>• NAAC A+ Grade</li>
                      <li>• ISO 9001:2015 Certified</li>
                      <li>• IEEE Student Branch Active</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="placements" className="space-y-6">
            {/* Placement Statistics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-green-600">{placements.percentage}</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <DollarSign className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-blue-600">{placements.averagePackage}</div>
                  <div className="text-sm text-gray-600">Average Package</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                  <div className="text-2xl font-bold text-yellow-600">{placements.highestPackage}</div>
                  <div className="text-sm text-gray-600">Highest Package</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold text-purple-600">80+</div>
                  <div className="text-sm text-gray-600">Companies Visited</div>
                </CardContent>
              </Card>
            </div>

            {/* Top Recruiters */}
            <Card>
              <CardHeader>
                <CardTitle>Top Recruiters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {placements.companies.map((company, index) => (
                    <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{company}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Placement Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Placement Trends & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Training & Preparation</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Technical skill development workshops</li>
                      <li>• Aptitude and reasoning training</li>
                      <li>• Mock interviews and group discussions</li>
                      <li>• Soft skills and communication training</li>
                      <li>• Resume building and LinkedIn optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Industry Connections</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Regular industry guest lectures</li>
                      <li>• Internship opportunities</li>
                      <li>• Alumni mentorship program</li>
                      <li>• Industry project collaborations</li>
                      <li>• Career guidance and counseling</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Department Office</h4>
                    <p className="text-gray-700 text-sm">
                      Department of Electronics & Communication Engineering<br/>
                      University Institute of Engineering & Technology<br/>
                      Panjab University, Sector 25<br/>
                      Chandigarh - 160014, India
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">+91-172-2534816 (Ext: 2201)</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">ece@pu.ac.in</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">Office Hours: 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/admissions" className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Admission Information
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/academics#syllabus" className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Curriculum & Syllabus
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/downloads" className="flex items-center">
                      <Download className="h-4 w-4 mr-2" />
                      Downloads & Forms
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/placements" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Placement Portal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* HOD Message */}
            <Card>
              <CardHeader>
                <CardTitle>Head of Department</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">Dr. Rajesh Kumar</h3>
                    <p className="text-blue-600 font-medium mb-2">Professor & Head of Department</p>
                    <p className="text-gray-700 text-sm mb-3">
                      "The ECE department is committed to excellence in education and research. 
                      We strive to prepare our students for the challenges of tomorrow's technology landscape."
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <a href="mailto:rajesh.kumar@pu.ac.in" className="flex items-center text-blue-600 hover:underline">
                        <Mail className="h-4 w-4 mr-1" />
                        Contact HOD
                      </a>
                      <span className="text-gray-500">Ph.D. IIT Delhi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentECE;
