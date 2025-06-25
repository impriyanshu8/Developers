import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DepartmentFaculty from "@/components/DepartmentFaculty";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Building,
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Beaker,
  ChevronRight,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const DepartmentCSE = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Department statistics
  const stats = [
    { label: "Faculty Members", value: "28+", icon: Users },
    { label: "Students Enrolled", value: "400+", icon: GraduationCap },
    { label: "Research Projects", value: "15+", icon: Beaker },
    { label: "Industry Partners", value: "50+", icon: Building },
  ];

  // Specialization areas
  const specializations = [
    {
      name: "Artificial Intelligence & Machine Learning",
      icon: Brain,
      description:
        "Advanced AI/ML algorithms, deep learning, and neural networks",
      courses: [
        "Pattern Recognition",
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing",
      ],
    },
    {
      name: "Software Engineering",
      icon: Code,
      description:
        "Software development methodologies, testing, and project management",
      courses: [
        "Software Engineering",
        "Software Testing",
        "Agile Development",
        "DevOps",
      ],
    },
    {
      name: "Database Systems",
      icon: Database,
      description: "Database design, management, and big data analytics",
      courses: [
        "Database Management",
        "Data Warehousing",
        "Big Data Analytics",
        "NoSQL Databases",
      ],
    },
    {
      name: "Web & Mobile Development",
      icon: Smartphone,
      description: "Modern web technologies and mobile application development",
      courses: [
        "Web Development",
        "Mobile App Development",
        "Cloud Computing",
        "UI/UX Design",
      ],
    },
    {
      name: "Network & Security",
      icon: Globe,
      description: "Computer networks, cybersecurity, and information systems",
      courses: [
        "Computer Networks",
        "Network Security",
        "Cryptography",
        "Ethical Hacking",
      ],
    },
  ];

  // Academic programs
  const programs = [
    {
      name: "B.E. Computer Science & Engineering",
      duration: "4 Years",
      intake: "60 Students",
      eligibility: "10+2 with Physics, Chemistry, Mathematics",
      highlights: [
        "AICTE Approved",
        "Industry-Oriented Curriculum",
        "Research Opportunities",
      ],
    },
    {
      name: "M.E. Computer Science & Engineering",
      duration: "2 Years",
      intake: "18 Students",
      eligibility: "B.E./B.Tech in CSE or related field",
      highlights: [
        "Research-Based Program",
        "Thesis Work",
        "Industry Collaboration",
      ],
    },
    {
      name: "Ph.D Computer Science & Engineering",
      duration: "3-5 Years",
      intake: "Variable",
      eligibility: "M.E./M.Tech with valid GATE/NET score",
      highlights: [
        "Advanced Research",
        "Publications",
        "Teaching Assistantship",
      ],
    },
  ];

  // Research areas
  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Computer Vision & Image Processing",
    "Natural Language Processing",
    "Internet of Things (IoT)",
    "Cloud Computing & Distributed Systems",
    "Cybersecurity & Cryptography",
    "Software Engineering",
    "Database & Data Mining",
    "Human-Computer Interaction",
    "Bioinformatics",
  ];

  // Recent achievements
  const achievements = [
    {
      title: "Best Department Award",
      description:
        "Recognized for excellence in academic performance and research",
      year: "2023",
    },
    {
      title: "Research Publications",
      description:
        "50+ papers published in international journals and conferences",
      year: "2023",
    },
    {
      title: "Industry Collaborations",
      description:
        "MoUs signed with leading tech companies for internships and placements",
      year: "2023",
    },
    {
      title: "Student Achievements",
      description:
        "Students secured top positions in coding competitions and hackathons",
      year: "2023",
    },
  ];

  // Infrastructure and facilities
  const facilities = [
    {
      name: "Advanced Computing Lab",
      description: "High-performance workstations with latest software tools",
      capacity: "40 Systems",
    },
    {
      name: "Network Security Lab",
      description: "Dedicated lab for cybersecurity and network analysis",
      capacity: "30 Systems",
    },
    {
      name: "Mobile Development Lab",
      description: "Android and iOS development environment",
      capacity: "35 Systems",
    },
    {
      name: "AI/ML Research Lab",
      description: "GPU-enabled systems for machine learning research",
      capacity: "20 Systems",
    },
    {
      name: "Project Development Lab",
      description: "24/7 access lab for final year projects",
      capacity: "25 Systems",
    },
    {
      name: "Smart Classrooms",
      description: "Interactive boards and multimedia facilities",
      capacity: "3 Rooms",
    },
  ];

  // Fixed faculty data structure with all required properties
  const facultyData = {
    coordinator: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Professor & Head",
        specialization: "Machine Learning, Data Mining",
        email: "rajesh.kumar@uiet.puchd.ac.in",
        phone: "+91-172-2534816",
        office: "Room 301, UIET Building",
        experience: "15+ years",
        qualification: "Ph.D. Computer Science, IIT Delhi",
        publications: 45,
        image: "photo-1507003211169-0a1dd7228f2d",
        isCoordinator: true,
        researchAreas: [
          "Machine Learning",
          "Data Mining",
          "Artificial Intelligence",
        ],
        courses: ["Advanced Algorithms", "Machine Learning", "Data Structures"],
      },
    ],
    professors: [
      {
        name: "Dr. Priya Sharma",
        designation: "Professor",
        specialization: "Artificial Intelligence, Neural Networks",
        email: "priya.sharma@uiet.puchd.ac.in",
        experience: "12+ years",
        qualification: "Ph.D. Computer Science, IIT Bombay",
        publications: 38,
        image: "photo-1494790108755-2616b612b786",
        researchAreas: [
          "Artificial Intelligence",
          "Neural Networks",
          "Deep Learning",
        ],
        courses: ["AI Fundamentals", "Neural Networks", "Pattern Recognition"],
      },
      {
        name: "Dr. Amit Singh",
        designation: "Professor",
        specialization: "Software Engineering, Database Systems",
        email: "amit.singh@uiet.puchd.ac.in",
        experience: "14+ years",
        qualification: "Ph.D. Software Engineering, IIT Kanpur",
        publications: 42,
        image: "photo-1472099645785-5658abf4ff4e",
        researchAreas: [
          "Software Engineering",
          "Database Systems",
          "System Design",
        ],
        courses: [
          "Software Engineering",
          "Database Management",
          "System Analysis",
        ],
      },
    ],
    associateProfessors: [
      {
        name: "Dr. Neha Gupta",
        designation: "Associate Professor",
        specialization: "Computer Networks, Cybersecurity",
        email: "neha.gupta@uiet.puchd.ac.in",
        experience: "10+ years",
        qualification: "Ph.D. Computer Networks, NIT Kurukshetra",
        publications: 28,
        image: "photo-1438761681033-6461ffad8d80",
        researchAreas: [
          "Computer Networks",
          "Cybersecurity",
          "Network Security",
        ],
        courses: ["Computer Networks", "Network Security", "Cryptography"],
      },
      {
        name: "Dr. Vikash Yadav",
        designation: "Associate Professor",
        specialization: "Human-Computer Interaction, UI/UX Design",
        email: "vikash.yadav@uiet.puchd.ac.in",
        experience: "8+ years",
        qualification: "Ph.D. Human-Computer Interaction, PU Chandigarh",
        publications: 22,
        image: "photo-1500648767791-00dcc994a43e",
        researchAreas: ["HCI", "UI/UX Design", "User Experience"],
        courses: ["HCI", "UI/UX Design", "Web Development"],
      },
    ],
    assistantProfessors: [
      {
        name: "Dr. Sunita Dhiman",
        designation: "Assistant Professor",
        specialization: "Data Science, Big Data Analytics",
        email: "sunita.dhiman@uiet.puchd.ac.in",
        experience: "6+ years",
        qualification: "Ph.D. Data Science, Thapar University",
        publications: 18,
        image: "photo-1544005313-94ddf0286df2",
        researchAreas: [
          "Data Science",
          "Big Data Analytics",
          "Machine Learning",
        ],
        courses: ["Data Science", "Big Data", "Statistics"],
      },
      {
        name: "Dr. Rohit Tanwar",
        designation: "Assistant Professor",
        specialization: "Cloud Computing, Distributed Systems",
        email: "rohit.tanwar@uiet.puchd.ac.in",
        experience: "5+ years",
        qualification: "Ph.D. Cloud Computing, BITS Pilani",
        publications: 15,
        image: "photo-1507591064344-4c6ce005b128",
        researchAreas: [
          "Cloud Computing",
          "Distributed Systems",
          "Parallel Computing",
        ],
        courses: [
          "Cloud Computing",
          "Distributed Systems",
          "Operating Systems",
        ],
      },
    ],
    guestFaculty: [
      {
        name: "Prof. Arun Mehta",
        designation: "Guest Faculty",
        specialization: "Web Development, Programming Languages",
        email: "arun.mehta@uiet.puchd.ac.in",
        experience: "4+ years",
        qualification: "M.Tech. Computer Science",
        publications: 8,
        image: "photo-1519085360753-af0119f7cbe7",
        researchAreas: [
          "Web Development",
          "Programming Languages",
          "Software Development",
        ],
        courses: [
          "Web Development",
          "Programming Languages",
          "Software Engineering",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Department of Computer Science & Engineering
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Pioneering Innovation in Computing Technology & Software
              Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Apply Now <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Department Brochure <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="faculty">Faculty</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* Department Introduction */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    About the Department
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    The Department of Computer Science & Engineering at UIET,
                    Panjab University, stands as a beacon of excellence in
                    computer science education and research. Established with
                    the vision to create world-class computer professionals, our
                    department has consistently maintained its position as one
                    of the premier institutions in Northern India.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We offer comprehensive programs at undergraduate,
                    postgraduate, and doctoral levels, designed to meet the
                    evolving needs of the technology industry. Our curriculum is
                    regularly updated to incorporate the latest technological
                    advancements and industry best practices.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    With state-of-the-art laboratories, experienced faculty, and
                    strong industry connections, we prepare our students to
                    tackle real-world challenges and become innovative leaders
                    in the field of computer science and engineering.
                  </p>
                </CardContent>
              </Card>

              {/* Specialization Areas */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Areas of Specialization
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {specializations.map((spec, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <spec.icon className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-xl">{spec.name}</CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {spec.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900 mb-2">
                            Key Courses:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {spec.courses.map((course, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs"
                              >
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="programs" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Academic Programs
                </h2>
                <div className="space-y-6">
                  {programs.map((program, index) => (
                    <Card key={index} className="border-none shadow-lg">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <CardTitle className="text-xl text-blue-600 mb-2">
                              {program.name}
                            </CardTitle>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Duration: {program.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                Intake: {program.intake}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Eligibility:
                            </h4>
                            <p className="text-gray-700">
                              {program.eligibility}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Program Highlights:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {program.highlights.map((highlight, idx) => (
                                <Badge
                                  key={idx}
                                  className="bg-green-100 text-green-800"
                                >
                                  {highlight}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faculty">
              <DepartmentFaculty
                departmentName="Computer Science & Engineering"
                facultyData={facultyData}
              />
            </TabsContent>

            <TabsContent value="research" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Research Areas
                </h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {researchAreas.map((area, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-800 font-medium">
                            {area}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Current Research Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">
                        AI-Driven Healthcare Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        Developing machine learning algorithms for early disease
                        detection and personalized treatment recommendations.
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Principal Investigator: Dr. Sarah Johnson</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-600">
                        Smart City Infrastructure
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">
                        IoT-based solutions for traffic management, waste
                        management, and energy optimization in urban
                        environments.
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Principal Investigator: Dr. Michael Chen</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="facilities" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Infrastructure & Facilities
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facilities.map((facility, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader>
                        <CardTitle className="text-lg text-blue-600">
                          {facility.name}
                        </CardTitle>
                        <CardDescription>
                          {facility.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="h-4 w-4 mr-2" />
                          <span>{facility.capacity}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Recent Achievements
                </h2>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-700 mb-2">
                              {achievement.description}
                            </p>
                            <Badge
                              variant="outline"
                              className="text-blue-600 border-blue-600"
                            >
                              {achievement.year}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Contact Department
            </h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Department Office
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">
                          Room 301, UIET Building, Panjab University
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">+91-172-2534816</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">
                          cse@uiet.puchd.ac.in
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Office Hours
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                      </p>
                      <p>
                        <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DepartmentCSE;
