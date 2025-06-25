import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  Award,
  Building2,
  BookOpen,
  Microscope,
  Trophy,
  Heart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Code,
  Cog,
  Zap,
  FlaskConical,
  Wrench,
  Dna,
  Calculator,
  ExternalLink,
} from "lucide-react";

const HomepageContent = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Quality Education",
      description:
        "Excellence in engineering education with industry-relevant curriculum",
      link: "/academics",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced faculty members",
      link: "/faculty",
    },
    {
      icon: Award,
      title: "NAAC A+ Accredited",
      description: "Recognized for academic excellence and quality standards",
      link: "/about",
    },
    {
      icon: Building2,
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities and well-equipped laboratories",
      link: "/about#infrastructure",
    },
    {
      icon: BookOpen,
      title: "Research Focus",
      description: "Strong emphasis on research and innovation",
      link: "/research",
    },
    {
      icon: Microscope,
      title: "Industry Connect",
      description: "Strong industry partnerships and placement record",
      link: "/placements",
    },
  ];

  const departments = [
    {
      name: "Computer Science & Engineering",
      icon: Code,
      students: 480,
      faculty: 25,
      link: "/departments/cse",
    },
    {
      name: "Electronics & Communication",
      icon: Cog,
      students: 360,
      faculty: 20,
      link: "/departments/ece",
    },
    {
      name: "Electrical & Electronics",
      icon: Zap,
      students: 240,
      faculty: 15,
      link: "/departments/eee",
    },
    {
      name: "Information Technology",
      icon: Code,
      students: 360,
      faculty: 18,
      link: "/departments/it",
    },
    {
      name: "Mechanical Engineering",
      icon: Wrench,
      students: 240,
      faculty: 16,
      link: "/departments/me",
    },
    {
      name: "Biotechnology",
      icon: Dna,
      students: 120,
      faculty: 12,
      link: "/departments/bt",
    },
    {
      name: "Applied Sciences",
      icon: Calculator,
      students: 60,
      faculty: 10,
      link: "/departments/as",
    },
  ];

  const achievements = [
    {
      title: "100% Placement Record",
      description: "All eligible students placed in top companies",
      icon: Trophy,
      link: "/placements",
    },
    {
      title: "50+ Research Papers",
      description: "Published in international journals annually",
      icon: BookOpen,
      link: "/research",
    },
    {
      title: "25+ Industry Partners",
      description: "Strong collaboration with leading companies",
      icon: Building2,
      link: "/placements#recruiters",
    },
    {
      title: "NAAC A+ Rating",
      description: "Highest accreditation for quality education",
      icon: Award,
      link: "/about",
    },
  ];

  const campusLife = [
    {
      title: "Student Clubs & Societies",
      description: "Technical and cultural clubs for holistic development",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop",
      link: "/students#clubs",
    },
    {
      title: "Annual Tech Fest - UTechnos",
      description: "Premier technical festival with competitions and workshops",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
      link: "/students#events",
    },
    {
      title: "Sports & Recreation",
      description: "Sports facilities and inter-college tournaments",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      link: "/students#sports",
    },
    {
      title: "Research Projects",
      description: "Student involvement in cutting-edge research",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      link: "/research",
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Features Section */}
      <section className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose UIET?
          </h2>
          <p className="text-lg text-gray-600">
            Discover what makes us a leading engineering institute
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-md hover:shadow-[#118DC4]/20"
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[#118DC4]/10 to-[#118DC4]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-[#118DC4]/20 group-hover:to-[#118DC4]/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-10 w-10 text-[#118DC4]" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#118DC4] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Link to={feature.link}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#118DC4]/40 text-[#118DC4] hover:bg-[#118DC4] hover:text-white hover:border-[#118DC4] transition-all duration-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gradient-to-br from-gray-50 to-[#118DC4]/5 py-20">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of engineering programs designed to
              shape tomorrow's innovators
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:shadow-[#118DC4]/20 hover:-translate-y-2"
              >
                <Link to={dept.link}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-[#118DC4]/10 rounded-lg flex items-center justify-center group-hover:bg-[#118DC4] group-hover:scale-110 transition-all duration-300">
                        <dept.icon className="h-6 w-6 text-[#118DC4] group-hover:text-white transition-colors" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-[#118DC4] group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-4 group-hover:text-[#118DC4] transition-colors leading-tight">
                      {dept.name}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between items-center">
                        <span>Students:</span>
                        <span className="font-semibold text-[#118DC4]">
                          {dept.students}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Faculty:</span>
                        <span className="font-semibold text-[#118DC4]">
                          {dept.faculty}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/departments">
              <Button className="bg-gradient-to-r from-[#118DC4] to-[#0d75a8] hover:from-[#0f7db0] hover:to-[#0a5d87] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container-modern py-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milestones that define our excellence and commitment to quality
            education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:shadow-[#118DC4]/20 hover:-translate-y-2"
            >
              <Link to={achievement.link}>
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-amber-200 group-hover:to-amber-300 group-hover:scale-110 transition-all duration-300">
                    <achievement.icon className="h-10 w-10 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#118DC4] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="bg-gradient-to-br from-[#118DC4]/8 via-[#118DC4]/5 to-transparent py-20">
        <div className="container-modern">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Campus Life
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience vibrant student life at UIET with diverse opportunities
              for growth and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusLife.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:shadow-[#118DC4]/20 hover:-translate-y-2"
              >
                <Link to={item.link}>
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-[#118DC4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/students">
              <Button className="bg-gradient-to-r from-[#118DC4] to-[#0d75a8] hover:from-[#0f7db0] hover:to-[#0a5d87] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Student Life
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container-modern py-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find what you need quickly with our streamlined access points
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/admissions">
            <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 hover:shadow-green-500/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                  <GraduationCap className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  Admissions 2024
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Apply now for various programs
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/previous-papers">
            <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 hover:shadow-[#118DC4]/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#118DC4]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#118DC4] group-hover:scale-110 transition-all duration-300">
                  <BookOpen className="h-8 w-8 text-[#118DC4] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#118DC4] transition-colors mb-2">
                  Previous Papers
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Access question papers
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/downloads">
            <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 hover:shadow-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <Award className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
                  Downloads
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Important documents & forms
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/placements">
            <Card className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 shadow-md hover:-translate-y-2 hover:shadow-orange-500/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <Trophy className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
                  Placements
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Career opportunities
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden bg-transparent">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-24 -translate-x-24"></div>

        <div className="container-modern relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Get In Touch
              </h2>
              <p className="text-lg mb-10 leading-relaxed text-gray-700">
                Have questions about admissions, academics, or campus life?
                We're here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <MapPin className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-700">
                      Sector 25, Chandigarh - 160014
                    </p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <Phone className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a
                      href="tel:+91-172-2534816"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      +91-172-2534816
                    </a>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-black/20 transition-colors">
                    <Mail className="h-5 w-5 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a
                      href="mailto:info@uiet.puchd.ac.in"
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      info@uiet.puchd.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800 tracking-tight">
                Quick Inquiry
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] resize-none transition-all"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#118DC4] text-white font-semibold py-3 rounded-xl hover:bg-[#0e79aa] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98]">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomepageContent;
