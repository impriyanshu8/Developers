
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Trophy, BookOpen, Calendar, Star, Award, Activity, GraduationCap, Bell, DollarSign, FileText, Heart, User } from 'lucide-react';

const Students = () => {
  const studentStats = [
    { icon: Users, label: 'Total Students', value: '750+' },
    { icon: GraduationCap, label: 'Graduates (2023)', value: '450' },
    { icon: Trophy, label: 'Awards Won', value: '150+' },
    { icon: Star, label: 'Average CGPA', value: '8.2' }
  ];

  const scholarships = [
    { name: 'Merit Scholarship', amount: '₹50,000', eligibility: 'CGPA > 8.5', deadline: '15th March' },
    { name: 'Need-based Scholarship', amount: '₹30,000', eligibility: 'Family income < ₹2 LPA', deadline: '20th March' },
    { name: 'SC/ST Scholarship', amount: '₹25,000', eligibility: 'SC/ST category students', deadline: '25th March' },
    { name: 'Sports Scholarship', amount: '₹40,000', eligibility: 'State/National level sports', deadline: '30th March' }
  ];

  const aicteScholarships = [
    { name: 'AICTE-SWANATH Scholarship', amount: '₹50,000', eligibility: 'Orphan students', details: 'For students who have lost both parents' },
    { name: 'AICTE Pragati Scholarship', amount: '₹30,000', eligibility: 'Girl students', details: 'For meritorious girl students in technical education' },
    { name: 'AICTE Saksham Scholarship', amount: '₹30,000', eligibility: 'Disabled students', details: 'For students with disabilities (>40%)' }
  ];

  const notices = [
    { date: '2024-01-15', title: 'Semester End Examination Schedule', type: 'Academic', urgent: true },
    { date: '2024-01-12', title: 'Workshop on AI and Machine Learning', type: 'Event', urgent: false },
    { date: '2024-01-10', title: 'Fee Submission Deadline Extension', type: 'Important', urgent: true },
    { date: '2024-01-08', title: 'Industrial Visit Registration Open', type: 'Activity', urgent: false },
    { date: '2024-01-05', title: 'Placement Drive - TCS', type: 'Placement', urgent: false }
  ];

  const achievements = [
    { student: 'Rahul Sharma (B.Tech CSE)', achievement: 'Google Summer of Code 2023', category: 'Technical' },
    { student: 'Priya Gupta (B.Tech ECE)', achievement: 'Best Paper Award - IEEE Conference', category: 'Research' },
    { student: 'Amit Kumar (M.Tech ME)', achievement: 'National Level Robotics Competition Winner', category: 'Innovation' },
    { student: 'Neha Singh (B.Tech IT)', achievement: 'Microsoft Student Partner', category: 'Leadership' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Student Life
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Student Services & Information</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support system for academic excellence, personal development, and career growth of our students.
          </p>
        </div>

        {/* Student Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {studentStats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Student Services Tabs */}
        <Tabs defaultValue="batches" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1">
            <TabsTrigger value="batches" className="px-2 py-3 text-xs">BE Batches</TabsTrigger>
            <TabsTrigger value="research" className="px-2 py-3 text-xs">Research</TabsTrigger>
            <TabsTrigger value="notices" className="px-2 py-3 text-xs">Notices</TabsTrigger>
            <TabsTrigger value="scholarships" className="px-2 py-3 text-xs">Scholarships</TabsTrigger>
            <TabsTrigger value="aicte" className="px-2 py-3 text-xs">AICTE</TabsTrigger>
            <TabsTrigger value="achievements" className="px-2 py-3 text-xs">Achievements</TabsTrigger>
            <TabsTrigger value="activities" className="px-2 py-3 text-xs">Activities</TabsTrigger>
            <TabsTrigger value="emergency" className="px-2 py-3 text-xs">Emergency</TabsTrigger>
          </TabsList>

          <TabsContent value="batches">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-6 w-6 mr-2 text-blue-600" />
                  B.E. 1st Year Batch Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Batch 2024-28</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Computer Science & Engineering</h5>
                        <p className="text-sm text-gray-600">Intake: 120 students | Class Coordinator: Dr. Sarbjeet Singh</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Electronics & Communication</h5>
                        <p className="text-sm text-gray-600">Intake: 60 students | Class Coordinator: Dr. Jaget Singha</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Mechanical Engineering</h5>
                        <p className="text-sm text-gray-600">Intake: 60 students | Class Coordinator: Prof. Shankar Sehgal</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Information Technology</h5>
                        <p className="text-sm text-gray-600">Intake: 60 students | Class Coordinator: Dr. Amandeep Verma</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Important Information</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Academic Session</h5>
                        <p className="text-sm text-gray-600">July 2024 - June 2028</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold">Orientation Program</h5>
                        <p className="text-sm text-gray-600">21st - 23rd August 2024</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold">First Semester</h5>
                        <p className="text-sm text-gray-600">Common for all branches</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-semibold">Mentor Assignment</h5>
                        <p className="text-sm text-gray-600">Each student assigned a faculty mentor</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Download Student Handbook</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="research">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-purple-600" />
                  Research Scholars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Current Ph.D. Scholars</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold">Rahul Verma</h5>
                        <p className="text-sm text-gray-600">Research Area: Machine Learning in Healthcare</p>
                        <p className="text-xs text-blue-600">Supervisor: Dr. Rajesh Kumar | Year: 3rd</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold">Priya Sharma</h5>
                        <p className="text-sm text-gray-600">Research Area: IoT Security Frameworks</p>
                        <p className="text-xs text-blue-600">Supervisor: Dr. Amit Singh | Year: 2nd</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h5 className="font-semibold">Amit Kumar</h5>
                        <p className="text-sm text-gray-600">Research Area: Renewable Energy Systems</p>
                        <p className="text-xs text-blue-600">Supervisor: Prof. Neha Gupta | Year: 4th</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Research Opportunities</h4>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Ph.D. Admission Guidelines
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Research Fellowship Information
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Publication Guidelines
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <FileText className="h-4 w-4 mr-2" />
                        Research Proposal Format
                      </Button>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-semibold mb-2">Research Support</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Monthly fellowship up to ₹31,000</li>
                        <li>• Access to state-of-the-art labs</li>
                        <li>• Conference funding support</li>
                        <li>• Industry collaboration opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notices">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-6 w-6 mr-2 text-orange-600" />
                  Student Notices & Announcements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${notice.urgent ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{notice.title}</h4>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-600">{notice.date}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${notice.urgent ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                              {notice.type}
                            </span>
                            {notice.urgent && (
                              <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs">Urgent</span>
                            )}
                          </div>
                        </div>
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button>View All Notices</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scholarships">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-green-600" />
                  Scholarship Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {scholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-2">{scholarship.name}</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount:</span>
                          <span className="font-semibold text-green-600">{scholarship.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Eligibility:</span>
                          <span className="text-sm">{scholarship.eligibility}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Deadline:</span>
                          <span className="text-sm text-red-600">{scholarship.deadline}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-3" size="sm">Apply Now</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="aicte">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-6 w-6 mr-2 text-purple-600" />
                  AICTE Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {aicteScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-3">{scholarship.name}</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount:</span>
                              <span className="font-semibold text-green-600">{scholarship.amount}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Eligibility:</span>
                              <span className="text-sm">{scholarship.eligibility}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{scholarship.details}</p>
                          <Button className="w-full mt-3" size="sm" variant="outline">Learn More</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">How to Apply</h4>
                  <ol className="text-sm text-gray-600 space-y-1">
                    <li>1. Visit the National Scholarship Portal (scholarships.gov.in)</li>
                    <li>2. Register/Login with your credentials</li>
                    <li>3. Fill the application form with required details</li>
                    <li>4. Upload necessary documents</li>
                    <li>5. Submit application before deadline</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-6 w-6 mr-2 text-yellow-600" />
                  Student Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border">
                      <div className="flex items-start space-x-3">
                        <Trophy className="h-6 w-6 text-yellow-600 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{achievement.achievement}</h4>
                          <p className="text-blue-600 font-medium">{achievement.student}</p>
                          <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button>View All Achievements</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="h-6 w-6 mr-2 text-indigo-600" />
                  Student Activities & Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Clubs</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium">Coding Club</h5>
                        <p className="text-sm text-gray-600">200+ members</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium">Robotics Society</h5>
                        <p className="text-sm text-gray-600">150+ members</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h5 className="font-medium">AI/ML Club</h5>
                        <p className="text-sm text-gray-600">180+ members</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cultural Activities</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-medium">Music Society</h5>
                        <p className="text-sm text-gray-600">100+ members</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-medium">Drama Club</h5>
                        <p className="text-sm text-gray-600">80+ members</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h5 className="font-medium">Literature Society</h5>
                        <p className="text-sm text-gray-600">70+ members</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Sports</h4>
                    <div className="space-y-2">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h5 className="font-medium">Cricket Team</h5>
                        <p className="text-sm text-gray-600">50+ members</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h5 className="font-medium">Basketball Team</h5>
                        <p className="text-sm text-gray-600">40+ members</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <h5 className="font-medium">Athletics Club</h5>
                        <p className="text-sm text-gray-600">70+ members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-6 w-6 mr-2 text-red-600" />
                  Medical Emergency Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-red-600">Emergency Contacts</h4>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h5 className="font-semibold text-red-800">Campus Medical Center</h5>
                        <p className="text-red-700">📞 +91-172-2534-911 (24/7)</p>
                        <p className="text-sm text-red-600">Location: Near Main Gate</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h5 className="font-semibold text-orange-800">Security Office</h5>
                        <p className="text-orange-700">📞 +91-172-2534-100</p>
                        <p className="text-sm text-orange-600">Available 24/7 for emergencies</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h5 className="font-semibold text-blue-800">Student Counselor</h5>
                        <p className="text-blue-700">📞 +91-172-2534-200</p>
                        <p className="text-sm text-blue-600">Dr. Priya Sharma | 9 AM - 5 PM</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Medical Facilities</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h5 className="font-semibold">On-Campus Medical Center</h5>
                        <p className="text-sm text-gray-600">First aid, basic treatment, and emergency care</p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h5 className="font-semibold">Tie-up with Hospitals</h5>
                        <p className="text-sm text-gray-600">PGI Chandigarh, Fortis Hospital</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-semibold">Ambulance Service</h5>
                        <p className="text-sm text-gray-600">24/7 availability for emergencies</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h5 className="font-semibold">Mental Health Support</h5>
                        <p className="text-sm text-gray-600">Counseling and psychological support</p>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-red-600 hover:bg-red-700">Emergency Procedures Guide</Button>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-3">Important Guidelines</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <p>• Keep emergency contacts saved in your phone</p>
                      <p>• Inform your family about campus medical facilities</p>
                      <p>• Register for student health insurance</p>
                    </div>
                    <div>
                      <p>• Report any health concerns immediately</p>
                      <p>• Maintain updated medical records with the center</p>
                      <p>• Follow safety protocols during emergencies</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Student Support Services</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We are committed to providing comprehensive support for your academic journey and personal development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                Student Portal
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
                Download Syllabus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
