
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, GraduationCap, FlaskConical, 
  Trophy, Calculator, Atom, BookOpen
} from 'lucide-react';

const DepartmentAS = () => {
  const programs = [
    { name: 'Applied Mathematics', duration: 'Foundation', intake: 'All Students' },
    { name: 'Applied Physics', duration: 'Foundation', intake: 'All Students' },
    { name: 'Applied Chemistry', duration: 'Foundation', intake: 'All Students' },
    { name: 'English & Communication', duration: 'Foundation', intake: 'All Students' }
  ];

  const faculty = [
    { name: 'Dr. S.K. Sharma', position: 'Professor & HOD', specialization: 'Applied Mathematics' },
    { name: 'Dr. Rekha Gupta', position: 'Associate Professor', specialization: 'Applied Physics' },
    { name: 'Dr. Mohan Singh', position: 'Assistant Professor', specialization: 'Applied Chemistry' },
    { name: 'Dr. Sunita Rani', position: 'Assistant Professor', specialization: 'English Literature' }
  ];

  const labs = [
    'Physics Laboratory',
    'Chemistry Laboratory',
    'Mathematics Computer Lab',
    'Language Laboratory',
    'Engineering Graphics Lab',
    'Workshop Practice Lab'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Atom className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Applied Sciences</h1>
              <p className="text-xl text-indigo-100">Foundation for Engineering Excellence</p>
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
                    To provide strong foundation in basic sciences and humanities, fostering critical thinking 
                    and analytical skills essential for engineering education and research.
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
                    <li>• Provide quality education in basic sciences</li>
                    <li>• Develop analytical and problem-solving skills</li>
                    <li>• Foster communication and soft skills</li>
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
                        <BookOpen className="h-5 w-5 mr-2" />
                        {program.name}
                      </span>
                      <Badge variant="secondary">{program.duration}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Coverage: {program.intake}</p>
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
                    <p className="text-indigo-600 font-medium">{member.position}</p>
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
                    <li>• Mathematical Modeling and Simulation</li>
                    <li>• Materials Science and Nanotechnology</li>
                    <li>• Environmental Chemistry</li>
                    <li>• Communication Studies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Numerical Analysis Methods (2023)</li>
                    <li>• Quantum Physics Applications (2023)</li>
                    <li>• Green Chemistry Processes (2022)</li>
                    <li>• Technical Communication (2022)</li>
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
                      <FlaskConical className="h-5 w-5 mr-2 text-indigo-600" />
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
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold">National Science Day Celebration</h4>
                    <p className="text-sm text-gray-600">February 2024 - Science exhibition and competitions</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Mathematics Olympiad</h4>
                    <p className="text-sm text-gray-600">January 2024 - Inter-college mathematics competition</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold">Dr. Ravi Kumar (Former Faculty)</h4>
                    <p className="text-sm text-gray-600">Now Professor at IIT Delhi</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr. Meera Singh (Former Faculty)</h4>
                    <p className="text-sm text-gray-600">Senior Scientist at CSIR</p>
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
                    <span className="text-sm">Best Foundation Department Award 2024</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Excellence in Science Education</span>
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

export default DepartmentAS;
