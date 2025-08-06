
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Trophy, BookOpen, Calendar, Star, Award, Activity, GraduationCap, Bell, DollarSign, FileText, Heart, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Students = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("batches");

  // Map hash fragments to tab values
  const hashToTab = {
    "#be-first-year": "batches",
    "#research-scholars": "research", 
    "#notices": "notices",
    "#scholarships": "scholarships",
    "#aicte-scholarships": "aicte",
    "#achievements": "achievements",
    "#activities": "activities",
    "#medical-emergency": "emergency"
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash && hashToTab[hash]) {
      setActiveTab(hashToTab[hash]);
      // Also scroll to tabs section when navigating via navbar
      const tabsElement = document.getElementById('students-tabs');
      if (tabsElement) {
        setTimeout(() => {
          tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      setActiveTab("batches");
    }
  }, [location.hash]);

  // Handle tab change and scroll to tabs section
  const handleTabChange = (value) => {
    setActiveTab(value);
    // Scroll to the tabs section for better visibility
    const tabsElement = document.getElementById('students-tabs');
    if (tabsElement) {
      setTimeout(() => {
        tabsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };
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
      <div className="inline-block px-4 py-2 bg-[#118DC4]/10 text-[#118DC4] rounded-full text-sm font-medium mb-4">
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
            <stat.icon className="h-8 w-8 text-[#118DC4] mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-slate-600 text-sm">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Student Services Tabs */}
    <Tabs id="students-tabs" value={activeTab} onValueChange={handleTabChange} className="mb-16">
      <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-4 lg:grid-cols-8 mb-8 h-auto p-1">
        <TabsTrigger 
          value="batches" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          BE Batches
        </TabsTrigger>
        <TabsTrigger 
          value="research" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Research
        </TabsTrigger>
        <TabsTrigger 
          value="notices" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Notices
        </TabsTrigger>
        <TabsTrigger 
          value="scholarships" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Scholarships
        </TabsTrigger>
        <TabsTrigger 
          value="aicte" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          AICTE
        </TabsTrigger>
        <TabsTrigger 
          value="achievements" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Achievements
        </TabsTrigger>
        <TabsTrigger 
          value="activities" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Activities
        </TabsTrigger>
        <TabsTrigger 
          value="emergency" 
          className="px-2 py-3 text-xs data-[state=active]:bg-[#118DC4] data-[state=active]:text-white"
        >
          Emergency
        </TabsTrigger>
      </TabsList>

      {/* Batches Tab Content */}
      <TabsContent value="batches">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="h-6 w-6 mr-2 text-[#118DC4]" />
              B.E. 1st Year Batch Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Batch 2024-28</h4>
                <div className="space-y-4">
                  <div className="bg-[#118DC4]/10 p-4 rounded-lg">
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
                  <div className="border-l-4 border-[#118DC4] pl-4">
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
                <Button className="w-full mt-4 bg-[#118DC4] hover:bg-[#0a6ba2]">Download Student Handbook</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Research Tab Content */}
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
                    <p className="text-xs text-[#118DC4]">Supervisor: Dr. Rajesh Kumar | Year: 3rd</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold">Priya Sharma</h5>
                    <p className="text-sm text-gray-600">Research Area: IoT Security Frameworks</p>
                    <p className="text-xs text-[#118DC4]">Supervisor: Dr. Amit Singh | Year: 2nd</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold">Amit Kumar</h5>
                    <p className="text-sm text-gray-600">Research Area: Renewable Energy Systems</p>
                    <p className="text-xs text-[#118DC4]">Supervisor: Prof. Neha Gupta | Year: 4th</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Research Opportunities</h4>
                <div className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2 text-[#118DC4]" />
                    Ph.D. Admission Guidelines
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2 text-[#118DC4]" />
                    Research Fellowship Information
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2 text-[#118DC4]" />
                    Publication Guidelines
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <FileText className="h-4 w-4 mr-2 text-[#118DC4]" />
                    Research Proposal Format
                  </Button>
                </div>
                <div className="mt-6 p-4 bg-[#118DC4]/10 rounded-lg">
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

      {/* Notices Tab Content */}
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
                        <span className={`px-2 py-1 rounded-full text-xs ${notice.urgent ? 'bg-red-100 text-red-800' : 'bg-[#118DC4]/10 text-[#118DC4]'}`}>
                          {notice.type}
                        </span>
                        {notice.urgent && (
                          <span className="px-2 py-1 bg-red-500 text-white rounded-full text-xs">Urgent</span>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4]/10">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-[#118DC4] hover:bg-[#0a6ba2]">View All Notices</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* CTA Section */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#118DC4] to-[#0a6ba2] text-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Student Support Services</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            We are committed to providing comprehensive support for your academic journey and personal development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3">
              Student Portal
            </Button>
            <Button className="bg-white text-[#118DC4] hover:bg-blue-50 font-semibold px-8 py-3">
              Download Syllabus
            </Button>
          </div>
        </div>
      </div>
    </Tabs>
  </div>
</section>
  );
};

export default Students;
