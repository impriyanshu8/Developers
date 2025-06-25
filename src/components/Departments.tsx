import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Computer,
  Zap,
  Cog,
  Dna,
  Users,
  BookOpen,
  Award,
  Smartphone,
  Lightbulb,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";

const Departments = () => {
  const departments = [
    {
      name: "Computer Science & Engineering",
      icon: Computer,
      head: "Dr. Rajesh Kumar",
      faculty: 18,
      students: 240,
      description:
        "Leading department in software development, AI, and emerging technologies.",
      specializations: [
        "Artificial Intelligence",
        "Data Science",
        "Cybersecurity",
        "Software Engineering",
      ],
      image: "photo-1461749280684-dccba630e2f6",
      link: "/departments/cse",
    },
    {
      name: "Electronics & Communication Engineering",
      icon: Zap,
      head: "Dr. Priya Sharma",
      faculty: 15,
      students: 200,
      description:
        "Excellence in electronics, communication systems, and signal processing.",
      specializations: [
        "VLSI Design",
        "Embedded Systems",
        "Communication Networks",
        "IoT",
      ],
      image: "photo-1518877593221-1f28583780b4",
      link: "/departments/ece",
    },
    {
      name: "Electrical & Electronics Engineering",
      icon: Lightbulb,
      head: "Dr. Santosh Gupta",
      faculty: 12,
      students: 160,
      description:
        "Power systems, control engineering, and renewable energy solutions.",
      specializations: [
        "Power Systems",
        "Control Engineering",
        "Renewable Energy",
        "Electric Drives",
      ],
      image: "photo-1581092160562-40aa08e78837",
      link: "/departments/eee",
    },
    {
      name: "Information Technology",
      icon: Smartphone,
      head: "Dr. Neha Verma",
      faculty: 14,
      students: 180,
      description:
        "Modern IT solutions, web technologies, and digital transformation.",
      specializations: [
        "Web Development",
        "Mobile Computing",
        "Cloud Technology",
        "Digital Marketing",
      ],
      image: "photo-1551288049-bebda4e38f71",
      link: "/departments/it",
    },
    {
      name: "Mechanical Engineering",
      icon: Cog,
      head: "Dr. Amit Singh",
      faculty: 12,
      students: 180,
      description:
        "Traditional engineering with modern applications in automation and design.",
      specializations: [
        "CAD/CAM",
        "Robotics",
        "Thermal Engineering",
        "Manufacturing",
      ],
      image: "photo-1485833077593-4278bba3f11f",
      link: "/departments/me",
    },
    {
      name: "Biotechnology",
      icon: Dna,
      head: "Dr. Suresh Patel",
      faculty: 8,
      students: 90,
      description:
        "Interdisciplinary approach to biological systems and technology.",
      specializations: [
        "Genetic Engineering",
        "Bioinformatics",
        "Bioprocessing",
        "Medical Biotechnology",
      ],
      image: "photo-1501286353178-1ec881214838",
      link: "/departments/bt",
    },
    {
      name: "Applied Sciences",
      icon: Calculator,
      head: "Dr. Kavita Rani",
      faculty: 20,
      students: 300,
      description:
        "Foundation courses in mathematics, physics, and chemistry for all engineering disciplines.",
      specializations: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Environmental Science",
      ],
      image: "photo-1532094349884-543bc11b234d",
      link: "/departments/as",
    },
  ];

  return (
    <section id="departments" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
            Our Departments
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Leading Engineering Departments
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            World-class departments with experienced faculty, modern facilities,
            and strong industry connections.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-16">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-card border-0 shadow-lg bg-white"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img
                    src={`https://images.unsplash.com/${dept.image}?w=300&h=250&fit=crop&crop=center`}
                    alt={dept.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-3/5">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <dept.icon className="h-8 w-8 text-[#118DC4]" />
                      <CardTitle className="text-xl text-slate-900 leading-tight">
                        {dept.name}
                      </CardTitle>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {dept.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Department Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-semibold text-slate-900">
                            {dept.faculty}
                          </div>
                          <div className="text-sm text-slate-600">Faculty</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-900">
                            {dept.students}
                          </div>
                          <div className="text-sm text-slate-600">Students</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-slate-900">
                            A+
                          </div>
                          <div className="text-sm text-slate-600">Rating</div>
                        </div>
                      </div>

                      {/* Head of Department */}
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <div className="text-sm text-slate-600">
                          Head of Department
                        </div>
                        <div className="font-semibold text-slate-900">
                          {dept.head}
                        </div>
                      </div>

                      {/* Specializations */}
                      <div>
                        <div className="text-sm font-semibold text-slate-900 mb-2">
                          Key Areas:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {dept.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="bg-[#118DC4]/10 text-[#118DC4] text-xs px-2 py-1 rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link to={dept.link}>
                        <Button
                          variant="outline"
                          className="w-full hover-button border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4] hover:text-white"
                        >
                          Explore Department
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Department Stats */}
        <div className="bg-gradient-to-r from-slate-900 to-[#118DC4] text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Department Excellence</h3>
            <p className="text-slate-300">
              Our departments consistently deliver outstanding results
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="h-8 w-8 mx-auto mb-2 text-[#118DC4]/70" />
              <div className="text-2xl font-bold">99</div>
              <div className="text-slate-300">Total Faculty</div>
            </div>
            <div>
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-[#118DC4]/70" />
              <div className="text-2xl font-bold">1350</div>
              <div className="text-slate-300">Total Students</div>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto mb-2 text-[#118DC4]/70" />
              <div className="text-2xl font-bold">21+</div>
              <div className="text-slate-300">Programs</div>
            </div>
            <div>
              <Computer className="h-8 w-8 mx-auto mb-2 text-[#118DC4]/70" />
              <div className="text-2xl font-bold">35+</div>
              <div className="text-slate-300">Research Labs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
