
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Shield, Heart, Scale, UserCheck, AlertTriangle, Beaker, Laptop, Search, Phone, Mail, Clock, MapPin } from 'lucide-react';

const CommitteesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const committees = [
    {
      name: 'Departmental Committee',
      icon: Users,
      category: 'academic',
      description: 'Oversees academic and administrative functions of all departments',
      chairperson: 'Prof. R.K. Sharma',
      members: ['Prof. R.K. Sharma (Chairperson)', 'Dr. P. Singh', 'Dr. M. Gupta', 'Dr. S. Verma', 'Dr. A. Kumar', 'Prof. N. Rani'],
      responsibilities: [
        'Academic policy formulation and implementation',
        'Curriculum development and updates',
        'Faculty recruitment and promotion',
        'Research coordination and funding',
        'Industry collaboration initiatives',
        'Quality assurance and NAAC compliance'
      ],
      meetingSchedule: 'First Monday of every month',
      contact: 'dept.committee@uiet.puchd.ac.in',
      achievements: ['Implemented new curriculum 2023', 'NAAC A+ grade achievement']
    },
    {
      name: 'Grievance Redressal Cell',
      icon: Scale,
      category: 'welfare',
      description: 'Addresses student and staff grievances in a fair and timely manner',
      chairperson: 'Dr. A. Kumar',
      members: ['Dr. A. Kumar (Chairperson)', 'Prof. S. Rani', 'Dr. N. Patel', 'Student Representative', 'Staff Representative'],
      responsibilities: [
        'Handle student and staff complaints',
        'Ensure fair and timely resolution',
        'Maintain complete confidentiality',
        'Regular grievance monitoring and reporting',
        'Conduct awareness programs',
        'Maintain grievance portal'
      ],
      meetingSchedule: 'Every Wednesday, 2:00 PM',
      contact: 'grievance@uiet.puchd.ac.in',
      achievements: ['98% resolution rate in 2023', 'Online portal implementation']
    },
    {
      name: 'Committee Against Sexual Harassment',
      icon: Shield,
      category: 'safety',
      description: 'Prevents and addresses cases of sexual harassment as per UGC guidelines',
      chairperson: 'Dr. Priya Sharma',
      members: ['Dr. Priya Sharma (Chairperson)', 'Prof. M. Singh', 'External Legal Expert', 'Student Member (Female)', 'NGO Representative'],
      responsibilities: [
        'Prevention of sexual harassment',
        'Complaint investigation and resolution',
        'Awareness and sensitivity programs',
        'Policy implementation and monitoring',
        'Training sessions for staff and students',
        'Annual report submission to UGC'
      ],
      meetingSchedule: 'Monthly or as required',
      contact: 'antish@uiet.puchd.ac.in',
      achievements: ['Zero tolerance policy implementation', 'Campus safety certification']
    },
    {
      name: 'Board of Control',
      icon: UserCheck,
      category: 'academic',
      description: 'Maintains academic standards and examination procedures',
      chairperson: 'Director UIET',
      members: ['Director (Chairperson)', 'All HODs', 'External Examiner', 'Controller of Examinations', 'Academic Coordinator'],
      responsibilities: [
        'Examination oversight and conduct',
        'Result declaration and verification',
        'Academic standards maintenance',
        'Quality assurance in evaluation',
        'Appeals and re-evaluation handling',
        'Academic calendar approval'
      ],
      meetingSchedule: 'Before each examination session',
      contact: 'board.control@uiet.puchd.ac.in',
      achievements: ['Digital examination system', 'Reduced result declaration time']
    },
    {
      name: 'SC/ST Cell',
      icon: Heart,
      category: 'welfare',
      description: 'Ensures welfare and equal opportunities for SC/ST students and staff',
      chairperson: 'Dr. R. Patel',
      members: ['Dr. R. Patel (Coordinator)', 'Prof. K. Singh', 'SC/ST Student Representatives', 'Administrative Officer'],
      responsibilities: [
        'Scholarship assistance and guidance',
        'Mentoring and counseling programs',
        'Grievance handling for SC/ST community',
        'Awareness and empowerment initiatives',
        'Fee concession facilitation',
        'Liaison with government agencies'
      ],
      meetingSchedule: 'Bi-monthly',
      contact: 'scst.cell@uiet.puchd.ac.in',
      achievements: ['100% scholarship disbursement', 'Mentorship program success']
    },
    {
      name: 'Anti-Ragging Committee',
      icon: AlertTriangle,
      category: 'safety',
      description: 'Prevents ragging and ensures a safe campus environment for all students',
      chairperson: 'Prof. S.K. Gupta',
      members: ['Prof. S.K. Gupta (Chairperson)', 'Security Officer', 'Student Counselor', 'Senior Students', 'Hostel Wardens'],
      responsibilities: [
        'Ragging prevention and awareness',
        'Complaint handling and investigation',
        'Disciplinary action implementation',
        'Campus safety monitoring',
        'New student orientation programs',
        'Anti-ragging affidavit management'
      ],
      meetingSchedule: 'Monthly during academic session',
      contact: 'antiragging@uiet.puchd.ac.in',
      achievements: ['Ragging-free campus certification', 'Proactive prevention measures']
    },
    {
      name: 'Research & Development Cell',
      icon: Beaker,
      category: 'research',
      description: 'Promotes research culture and facilitates R&D activities',
      chairperson: 'Dr. V. Kumar',
      members: ['Dr. V. Kumar (Coordinator)', 'Research Faculty Representatives', 'Industry Representatives', 'PhD Scholars'],
      responsibilities: [
        'Research promotion and facilitation',
        'Funding assistance and guidance',
        'Industry collaboration development',
        'Patent filing support and IPR',
        'Conference and publication support',
        'Research infrastructure development'
      ],
      meetingSchedule: 'Monthly',
      contact: 'research@uiet.puchd.ac.in',
      achievements: ['50+ research projects funded', 'International collaborations established']
    },
    {
      name: 'UTechnos Committee',
      icon: Laptop,
      category: 'events',
      description: 'Organizes the annual technical festival and promotes technical activities',
      chairperson: 'Prof. A. Rani',
      members: ['Prof. A. Rani (Faculty Coordinator)', 'Student Coordinators', 'Technical Team', 'Event Management Team'],
      responsibilities: [
        'Technical festival organization',
        'Inter-college competition management',
        'Industry partnership for events',
        'Student engagement activities',
        'Technical workshop coordination',
        'Innovation showcase platforms'
      ],
      meetingSchedule: 'Weekly during event preparation',
      contact: 'utechnos@uiet.puchd.ac.in',
      achievements: ['National level participation', 'Industry recognition awards']
    }
  ];

  const categories = ['all', 'academic', 'welfare', 'safety', 'research', 'events'];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCommittees = committees.filter(committee => {
    const matchesSearch = committee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         committee.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || committee.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Institute Committees</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ensuring governance, welfare, and excellence across all aspects of institute life through 
              dedicated committees and transparent processes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search committees..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Committees Grid */}
        <div className="grid gap-8">
          {filteredCommittees.map((committee, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <committee.icon className="h-8 w-8 mr-3 text-blue-600" />
                    <div>
                      <CardTitle className="text-xl">{committee.name}</CardTitle>
                      <div className="flex items-center mt-2 gap-2">
                        <Badge variant="secondary" className="capitalize">{committee.category}</Badge>
                        <span className="text-sm text-gray-600">Chair: {committee.chairperson}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-3">{committee.description}</p>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="members">Members</TabsTrigger>
                    <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="mt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Meeting Schedule</h4>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {committee.meetingSchedule}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Recent Achievements</h4>
                        <ul className="space-y-1">
                          {committee.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="members" className="mt-4">
                    <h4 className="font-semibold mb-3 text-gray-900">Committee Members</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {committee.members.map((member, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm">{member}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="responsibilities" className="mt-4">
                    <h4 className="font-semibold mb-3 text-gray-900">Key Responsibilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {committee.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start p-3 bg-green-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                          <span className="text-sm">{responsibility}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="contact" className="mt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Contact Information</h4>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">{committee.contact}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">+91-172-2534816</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">UIET Campus, Sector 25, Chandigarh</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-900">Office Hours</h4>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-sm text-blue-800">Monday - Friday: 9:00 AM - 5:00 PM</p>
                          <p className="text-sm text-blue-800">Saturday: 9:00 AM - 1:00 PM</p>
                          <p className="text-sm text-blue-600 mt-2">For urgent matters, contact via email</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCommittees.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No committees found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </CardContent>
          </Card>
        )}

        {/* General Contact Information */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Assistance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For any concerns, suggestions, or queries related to any committee, 
              please reach out through the following channels. We are committed to transparency and prompt response.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Mail className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-blue-600">committees@uiet.puchd.ac.in</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Phone className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-blue-600">+91-172-2534816</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h4 className="font-semibold mb-1">Office Hours</h4>
                <p className="text-blue-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default CommitteesPage;
