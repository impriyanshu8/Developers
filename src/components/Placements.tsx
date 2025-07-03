
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Users, Building, Award, Target, Star, Briefcase, DollarSign, MessageSquare, FileText, BarChart3, Globe, GraduationCap, Phone, Mail } from 'lucide-react';

const Placements = () => {
  const placementStats = [
    { icon: TrendingUp, label: 'Placement Rate', value: '95%', color: 'text-green-600' },
    { icon: DollarSign, label: 'Highest Package', value: '₹45 LPA', color: 'text-blue-600' },
    { icon: Users, label: 'Average Package', value: '₹12 LPA', color: 'text-purple-600' },
    { icon: Building, label: 'Companies Visited', value: '150+', color: 'text-orange-600' }
  ];

  const topRecruiters = [
    { name: 'Google', logo: 'Building', package: '₹45 LPA', hired: 5 },
    { name: 'Microsoft', logo: 'Building', package: '₹42 LPA', hired: 8 },
    { name: 'Amazon', logo: 'Building', package: '₹38 LPA', hired: 12 },
    { name: 'Flipkart', logo: 'Building', package: '₹35 LPA', hired: 10 },
    { name: 'Adobe', logo: 'Building', package: '₹40 LPA', hired: 6 },
    { name: 'Salesforce', logo: 'Building', package: '₹38 LPA', hired: 4 },
    { name: 'TCS', logo: 'Building', package: '₹8 LPA', hired: 45 },
    { name: 'Infosys', logo: 'Building', package: '₹7.5 LPA', hired: 40 }
  ];

  const placementProcess = [
    {
      step: '1',
      title: 'Registration',
      description: 'Students register for placement process with complete profile and academic records.'
    },
    {
      step: '2',
      title: 'Pre-placement Training',
      description: 'Comprehensive training on aptitude, technical skills, communication, and interview preparation.'
    },
    {
      step: '3',
      title: 'Company Selection',
      description: 'Students apply to companies based on eligibility criteria and job profiles.'
    },
    {
      step: '4',
      title: 'Assessment Rounds',
      description: 'Online tests, group discussions, technical interviews, and HR interviews.'
    },
    {
      step: '5',
      title: 'Final Selection',
      description: 'Offer letters issued to selected candidates with joining details.'
    }
  ];

  const tpcTeam = [
    { name: 'Dr. Rajesh Kumar', designation: 'Training & Placement Officer', email: 'tpo@uiet.puchd.ac.in', phone: '+91-172-2534816' },
    { name: 'Prof. Priya Sharma', designation: 'Assistant TPO', email: 'atpo@uiet.puchd.ac.in', phone: '+91-172-2534817' },
    { name: 'Dr. Amit Singh', designation: 'Placement Coordinator', email: 'placement@uiet.puchd.ac.in', phone: '+91-172-2534818' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Career Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Training & Placement Cell</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated placement cell ensures students secure rewarding careers with top companies across various industries through comprehensive training and industry partnerships.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placement Tabs */}
        <Tabs defaultValue="tpo-message" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-3 lg:grid-cols-7 mb-8 h-auto p-1">
            <TabsTrigger value="tpo-message" className="px-2 py-3 text-xs">TPO Message</TabsTrigger>
            <TabsTrigger value="brochure" className="px-2 py-3 text-xs">Brochure</TabsTrigger>
            <TabsTrigger value="statistics" className="px-2 py-3 text-xs">Statistics</TabsTrigger>
            <TabsTrigger value="procedure" className="px-2 py-3 text-xs">Procedure</TabsTrigger>
            <TabsTrigger value="portal" className="px-2 py-3 text-xs">Web Portal</TabsTrigger>
            <TabsTrigger value="training" className="px-2 py-3 text-xs">Training</TabsTrigger>
            <TabsTrigger value="contact" className="px-2 py-3 text-xs">TPC Team</TabsTrigger>
          </TabsList>

          <TabsContent value="tpo-message">
            <Card className="max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 mr-2 text-blue-600" />
                  Message from Training & Placement Officer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-gray-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">Dr. Rajesh Kumar</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      "At UIET, we are committed to ensuring that our students not only receive world-class technical education but also develop the skills and mindset needed to excel in their professional careers. Our Training & Placement Cell works tirelessly to bridge the gap between academia and industry."
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      "With strong industry partnerships, comprehensive training programs, and personalized career guidance, we have consistently achieved excellent placement records. I encourage all students to actively participate in our training programs and make the most of the opportunities we provide."
                    </p>
                    <p className="text-blue-600 font-medium mt-4">- Dr. Rajesh Kumar, Training & Placement Officer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="brochure">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-green-600" />
                  Placement Brochure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Download Resources</h4>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Placement Brochure 2024
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Company Presentation Template
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Student Database
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Placement Statistics Report
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Comprehensive institute profile and achievements
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Department-wise student strength and specializations
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Past placement records and salary trends
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Infrastructure and facilities information
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Contact details and visit procedures
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-6 w-6 mr-2 text-purple-600" />
                    Placement Statistics & Past Recruiters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4">5-Year Placement Trend</h4>
                      <div className="space-y-3">
                        {[
                          { year: '2024', placed: 425, total: 450, percentage: 94.4, avgPackage: 12.5 },
                          { year: '2023', placed: 410, total: 430, percentage: 95.3, avgPackage: 11.8 },
                          { year: '2022', placed: 395, total: 420, percentage: 94.0, avgPackage: 10.2 },
                          { year: '2021', placed: 380, total: 400, percentage: 95.0, avgPackage: 9.8 },
                          { year: '2020', placed: 365, total: 390, percentage: 93.6, avgPackage: 9.2 }
                        ].map((trend, index) => (
                          <div key={index} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">{trend.year}</span>
                              <div className="text-right">
                                <div className="text-green-600 font-semibold">{trend.percentage}%</div>
                                <div className="text-sm text-gray-600">₹{trend.avgPackage} LPA avg</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Top Recruiters</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {topRecruiters.slice(0, 8).map((recruiter, index) => (
                          <div key={index} className="bg-white border rounded-lg p-3 text-center">
                            <Building className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="text-sm font-semibold">{recruiter.name}</div>
                            <div className="text-xs text-gray-600">{recruiter.hired} hired</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="procedure">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-6 w-6 mr-2 text-orange-600" />
                  Campus Placement Procedure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {placementProcess.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h4>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Guidelines</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Students must maintain minimum 60% aggregate throughout their academic tenure</li>
                    <li>• No active backlogs allowed during placement season</li>
                    <li>• Mandatory attendance for pre-placement talks and training sessions</li>
                    <li>• One job offer per student policy (exceptions may apply)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portal">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-cyan-600" />
                  Placement Web Portal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">For Students</h4>
                    <div className="space-y-3">
                      <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                        <Users className="h-4 w-4 mr-2" />
                        Student Login Portal
                      </Button>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• Update your profile and resume</p>
                        <p>• Apply for job openings</p>
                        <p>• Track application status</p>
                        <p>• View interview schedules</p>
                        <p>• Access training materials</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">For Companies</h4>
                    <div className="space-y-3">
                      <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                        <Building className="h-4 w-4 mr-2" />
                        Company Registration
                      </Button>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>• Register your company for campus recruitment</p>
                        <p>• Post job requirements and criteria</p>
                        <p>• Access student database</p>
                        <p>• Schedule campus visits</p>
                        <p>• Download placement brochure</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> For portal access credentials, please contact the Training & Placement Cell. 
                    New users need to complete the registration process before gaining access.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="training">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2 text-red-600" />
                  Training Programs & Letters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Training Programs</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Technical Skills Training</h5>
                        <p className="text-sm text-gray-600">Programming, system design, latest technologies</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold">Soft Skills Development</h5>
                        <p className="text-sm text-gray-600">Communication, leadership, teamwork</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold">Interview Preparation</h5>
                        <p className="text-sm text-gray-600">Mock interviews, HR rounds, group discussions</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-semibold">Aptitude Training</h5>
                        <p className="text-sm text-gray-600">Quantitative, logical reasoning, verbal ability</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Download Training Materials</h4>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Training Schedule 2024
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Aptitude Test Papers
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Interview Tips & Guidelines
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Resume Building Template
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Company-wise Previous Questions
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-6 w-6 mr-2 text-green-600" />
                  Training & Placement Committee Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {tpcTeam.map((member, index) => (
                    <Card key={index} className="border">
                      <CardContent className="p-6 text-center">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Users className="h-10 w-10 text-gray-500" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-blue-600 text-sm mb-3">{member.designation}</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center space-x-2">
                            <Mail className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{member.email}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Phone className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{member.phone}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Office Hours & Location</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-medium">Office Hours:</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Location:</p>
                      <p className="text-gray-600">Training & Placement Cell</p>
                      <p className="text-gray-600">UIET, Panjab University</p>
                      <p className="text-gray-600">Sector 25, Chandigarh - 160014</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Career?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join UIET and benefit from our strong industry connections, comprehensive training programs, and exceptional placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3">
                Contact Placement Cell
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-3">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placements;
