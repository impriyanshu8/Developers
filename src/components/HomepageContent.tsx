import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Users, Award, Building2, BookOpen, Microscope, 
  Trophy, Heart, Calendar, Mail, Phone, MapPin, ArrowRight,
  Code, Cog, Zap, FlaskConical, Wrench, Dna, Calculator, ExternalLink
} from 'lucide-react';

const HomepageContent = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Quality Education',
      description: 'Excellence in engineering education with industry-relevant curriculum',
      link: '/academics'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced faculty members',
      link: '/faculty'
    },
    {
      icon: Award,
      title: 'NAAC A+ Accredited',
      description: 'Recognized for academic excellence and quality standards',
      link: '/about'
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      description: 'State-of-the-art facilities and well-equipped laboratories',
      link: '/about#infrastructure'
    },
    {
      icon: BookOpen,
      title: 'Research Focus',
      description: 'Strong emphasis on research and innovation',
      link: '/research'
    },
    {
      icon: Microscope,
      title: 'Industry Connect',
      description: 'Strong industry partnerships and placement record',
      link: '/placements'
    }
  ];

  const departments = [
    { 
      name: 'Computer Science & Engineering', 
      icon: Code, 
      students: 480, 
      faculty: 25,
      link: '/departments/cse'
    },
    { 
      name: 'Electronics & Communication', 
      icon: Cog, 
      students: 360, 
      faculty: 20,
      link: '/departments/ece'
    },
    { 
      name: 'Electrical & Electronics', 
      icon: Zap, 
      students: 240, 
      faculty: 15,
      link: '/departments/eee'
    },
    { 
      name: 'Information Technology', 
      icon: Code, 
      students: 360, 
      faculty: 18,
      link: '/departments/it'
    },
    { 
      name: 'Mechanical Engineering', 
      icon: Wrench, 
      students: 240, 
      faculty: 16,
      link: '/departments/me'
    },
    { 
      name: 'Biotechnology', 
      icon: Dna, 
      students: 120, 
      faculty: 12,
      link: '/departments/bt'
    },
    { 
      name: 'Applied Sciences', 
      icon: Calculator, 
      students: 60, 
      faculty: 10,
      link: '/departments/as'
    }
  ];

  const achievements = [
    {
      title: '100% Placement Record',
      description: 'All eligible students placed in top companies',
      icon: Trophy,
      link: '/placements'
    },
    {
      title: '50+ Research Papers',
      description: 'Published in international journals annually',
      icon: BookOpen,
      link: '/research'
    },
    {
      title: '25+ Industry Partners',
      description: 'Strong collaboration with leading companies',
      icon: Building2,
      link: '/placements#recruiters'
    },
    {
      title: 'NAAC A+ Rating',
      description: 'Highest accreditation for quality education',
      icon: Award,
      link: '/about'
    }
  ];

  const campusLife = [
    {
      title: 'Student Clubs & Societies',
      description: 'Technical and cultural clubs for holistic development',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop',
      link: '/students#clubs'
    },
    {
      title: 'Annual Tech Fest - UTechnos',
      description: 'Premier technical festival with competitions and workshops',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
      link: '/students#events'
    },
    {
      title: 'Sports & Recreation',
      description: 'Sports facilities and inter-college tournaments',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
      link: '/students#sports'
    },
    {
      title: 'Research Projects',
      description: 'Student involvement in cutting-edge research',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      link: '/research'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Features Section */}
      <section className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose UIET?</h2>
          <p className="text-lg text-gray-600">
            Discover what makes us a leading engineering institute
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-modern">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of engineering programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <Link to={dept.link}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <dept.icon className="h-8 w-8 text-blue-600" />
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {dept.name}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Students:</span>
                        <span className="font-semibold">{dept.students}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Faculty:</span>
                        <span className="font-semibold">{dept.faculty}</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/departments">
              <Button className="modern-button">
                View All Departments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600">
            Milestones that define our excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow group cursor-pointer">
              <Link to={achievement.link}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                    <achievement.icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="bg-blue-50 py-16">
        <div className="container-modern">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Life</h2>
            <p className="text-lg text-gray-600">
              Experience vibrant student life at UIET
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusLife.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <Link to={item.link}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/students">
              <Button className="modern-button">
                Explore Student Life
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container-modern">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access</h2>
          <p className="text-lg text-gray-600">
            Find what you need quickly
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/admissions">
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                  Admissions 2024
                </h3>
                <p className="text-sm text-gray-600 mt-2">Apply now for various programs</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/previous-papers">
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Previous Papers
                </h3>
                <p className="text-sm text-gray-600 mt-2">Access question papers</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/downloads">
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  Downloads
                </h3>
                <p className="text-sm text-gray-600 mt-2">Important documents & forms</p>
              </CardContent>
            </Card>
          </Link>
          
          <Link to="/placements">
            <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardContent className="p-6 text-center">
                <Trophy className="h-12 w-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                  Placements
                </h3>
                <p className="text-sm text-gray-600 mt-2">Career opportunities</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-lg text-blue-100 mb-8">
                Have questions about admissions, academics, or campus life? 
                We're here to help you every step of the way.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-200" />
                  <span>Sector 25, Chandigarh - 160014</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-blue-200" />
                  <a href="tel:+91-172-2534816" className="hover:text-blue-200 transition-colors">
                    +91-172-2534816
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-blue-200" />
                  <a href="mailto:info@uiet.puchd.ac.in" className="hover:text-blue-200 transition-colors">
                    info@uiet.puchd.ac.in
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                  Send Message
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
