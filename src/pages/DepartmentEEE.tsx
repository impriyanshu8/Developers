
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, GraduationCap, FlaskConical, 
  Trophy, Zap, Battery, Power
} from 'lucide-react';

const DepartmentEEE = () => {
  const programs = [
    { name: 'B.E. Electrical & Electronics Engineering', duration: '4 Years', intake: '60' }
  ];

  const faculty = [
    { name: 'Dr. Suresh Kumar', position: 'Professor & HOD', specialization: 'Power Systems' },
    { name: 'Dr. Kavita Sharma', position: 'Associate Professor', specialization: 'Control Systems' },
    { name: 'Dr. Ravi Singh', position: 'Assistant Professor', specialization: 'Power Electronics' },
    { name: 'Dr. Anita Gupta', position: 'Assistant Professor', specialization: 'Renewable Energy' }
  ];

  const labs = [
    'Electrical Machines Lab',
    'Power Electronics Lab',
    'Control Systems Lab',
    'High Voltage Lab',
    'Renewable Energy Lab',
    'Power Systems Lab',
    'Electrical Measurements Lab',
    'Project Lab'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Power className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Electrical & Electronics Engineering</h1>
              <p className="text-xl text-yellow-100">Powering the Future</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="labs">Labs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
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
                    To be a premier department in Electrical & Electronics Engineering, contributing to sustainable 
                    energy solutions and technological advancement for societal welfare.
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
                    <li>• Provide excellent education in electrical engineering</li>
                    <li>• Promote research in renewable energy and smart grids</li>
                    <li>• Develop ethical and competent engineers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid gap-6">
              {programs.map((program, index) => (
                <Card key={index}>
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
                    <p className="text-gray-600">Intake: {program.intake} students</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faculty" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-yellow-600 font-medium">{member.position}</p>
                    <p className="text-gray-600">Specialization: {member.specialization}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ongoing Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Smart Grid Technologies</li>
                    <li>• Renewable Energy Integration</li>
                    <li>• Electric Vehicle Charging Systems</li>
                    <li>• Power Quality Improvement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Solar Power Optimization (2023)</li>
                    <li>• Motor Control Systems (2023)</li>
                    <li>• Power Factor Correction (2022)</li>
                    <li>• Energy Efficiency Analysis (2022)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="labs" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {labs.map((lab, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-yellow-600" />
                      <span className="font-medium">{lab}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold">International Conference on Power Systems</h4>
                    <p className="text-sm text-gray-600">April 2024 - Focus on renewable energy integration</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">Workshop on Smart Grids</h4>
                    <p className="text-sm text-gray-600">March 2024 - Industry collaboration workshop</p>
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
                  <div>
                    <h4 className="font-semibold">Vikram Singh (2019)</h4>
                    <p className="text-sm text-gray-600">Power Systems Engineer at NTPC</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Neha Kumari (2018)</h4>
                    <p className="text-sm text-gray-600">Senior Engineer at Siemens</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Best Department Award for Research Excellence 2024</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Patent Filed for Smart Grid Technology</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DepartmentEEE;
