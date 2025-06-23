
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Star, Users, Building, Calendar, Award, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide quality technical education fostering innovation, research excellence, and ethical values for national development.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To emerge as a center of excellence in technical education, producing globally competent engineers and researchers.'
    },
    {
      icon: Star,
      title: 'Academic Excellence',
      description: 'Maintaining highest standards in teaching, learning, and research with industry-relevant curriculum.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Contributing to society through skilled graduates, research innovations, and community engagement programs.'
    }
  ];

  const achievements = [
    { icon: Award, text: 'NAAC Grade A+ Accreditation (2020-2025)' },
    { icon: Building, text: 'NBA Accredited Engineering Programs' },
    { icon: Star, text: 'NIRF Ranking - Engineering Category' },
    { icon: Users, text: '95% Placement Rate with Top Companies' },
    { icon: Target, text: 'Research Publications in International Journals' },
    { icon: MapPin, text: 'International Academic Collaborations' }
  ];

  const milestones = [
    { year: '2002', event: 'Institute Established under Panjab University' },
    { year: '2005', event: 'First Batch of B.Tech Students Graduated' },
    { year: '2010', event: 'M.Tech Programs Launched' },
    { year: '2015', event: 'Ph.D Programs Initiated' },
    { year: '2020', event: 'NAAC A+ Accreditation Achieved' },
    { year: '2023', event: 'New Research Centers Established' }
  ];

  return (
    <section id="about" className="gov-section bg-gray-50">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="official-badge mb-4">
            About UIET
          </div>
          <h2 className="section-title">Premier Technical Education Institute</h2>
          <p className="section-subtitle">
            University Institute of Engineering & Technology (UIET), established in 2002, 
            stands as a distinguished technical institution under Panjab University, Chandigarh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Excellence in Engineering Education Since 2002
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>University Institute of Engineering & Technology (UIET)</strong> is a premier 
                  government institution that has been at the forefront of technical education and research 
                  for over two decades. Located in the planned city of Chandigarh, we serve as a beacon 
                  of academic excellence in North India.
                </p>
                
                <p>
                  Our institute operates under the prestigious <strong>Panjab University</strong>, one of 
                  India's oldest and most respected universities. We offer comprehensive undergraduate, 
                  postgraduate, and doctoral programs across various engineering disciplines.
                </p>
                
                <p>
                  With state-of-the-art infrastructure, experienced faculty, and strong industry partnerships, 
                  UIET provides a conducive environment for holistic development of students, preparing them 
                  to meet the challenges of the modern technological landscape.
                </p>
              </div>

              {/* Key Facts */}
              <div className="gov-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Institute at a Glance</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Established:</strong> 2002</div>
                  <div><strong>Type:</strong> Government Institute</div>
                  <div><strong>Affiliated to:</strong> Panjab University</div>
                  <div><strong>Location:</strong> Chandigarh, India</div>
                  <div><strong>Campus Area:</strong> 25+ Acres</div>
                  <div><strong>Students:</strong> 2000+ Active</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border-l-4 border-amber-500">
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {milestone.year}
                  </div>
                  <p className="text-gray-700 text-sm flex-1">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 m

d:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="gov-card text-center hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Key Achievements & Recognitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <achievement.icon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Government Compliance Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Government Compliance & Transparency</h3>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            As a government institution, UIET maintains complete transparency in its operations and 
            adheres to all regulatory requirements set by UGC, AICTE, and other governing bodies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="official-badge">UGC Recognized</span>
            <span className="official-badge">AICTE Approved</span>
            <span className="official-badge">RTI Compliant</span>
            <span className="official-badge">Government Audited</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
