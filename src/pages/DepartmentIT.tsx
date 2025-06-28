
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, GraduationCap, FlaskConical, 
  Trophy, Monitor, Database, Cloud
} from 'lucide-react';

const DepartmentIT = () => {
  const programs = [
    { name: 'B.E. Information Technology', duration: '4 Years', intake: '120', details: '' },
    { name: 'M.E. Information Technology', duration: '2 Years', intake: '30', details: 'B.E. or B.Tech. or equivalent degree in Information Technology / Computer Science & Engineering / Computer Engineering/ Electronics & Communication Engineering / Electrical & Electronics Engineering / Computer Science & Electronics Engineering /Computer Science & Business Systems/ Data Science/ Artificial Intelligence/ Artificial Intelligence and Machine Learning/Cyber Security/ Software Engineering/ Electronics and Computer Engineering/ Robotics and Automation, with at least 60% marks in aggregate from Panjab University or any other University recognized by Panjab University as equivalent thereto. GATE qualified candidates are awarded AICTE scholarship of Rs. 12400/- per month. Department provides financial support for attending workshops, conferences and other technical events.' },
    { name: 'Ph.D. Faculty of Engineering', duration: '5 Years', intake: '15', details: 'Admission on the basis of GATE/UGC-NET/PU Entrance test. Please visit Panjab University Website for information regarding Ph.D. Entrance Test. http://www.puchd.ac.in/' }
  ];

  const faculty = [
    { name: 'Dr. Amandeep Verma', position: 'Co-ordinator and Associate Professor', specialization: 'Cloud Computing', email: 'amandeepverma@pu.ac.in', contact_no: '9781777730' },
    { name: 'Prof. Krishan Kumar', position: 'Professor', specialization: 'Network Security and Computer Networks', email: 'k.saluja@pu.ac.in', contact_no: '8288012014' },
    { name: 'Prof. Roopali Garg', position: 'Professor', specialization: 'Wireless Communication', email: 'roopali.garg@pu.ac.in', contact_no: '9417724824' },
    { name: 'Prof. Inderdeep Kaur Aulakh', position: 'Professor', specialization: 'Wireless Communication Network', email: 'ikaulakh@pu.ac.in', contact_no: '9814788999' },
    { name: 'Dr. Veenu Mangat', position: 'Professor', specialization: 'Data Mining', email: 'vmangat@pu.ac.in', contact_no: '9814475450' },
    { name: 'Dr. Pamela Kumar', position: 'Visiting Professor', specialization: '', email: 'pamelakumar@ieee.org', contact_no: '' },
    { name: 'Dr. Mandeep Kaur', position: 'Associate Professor', specialization: 'Digital Image Processing', email: 'mandeep@pu.ac.in', contact_no: '7973690839' },
    { name: 'Dr. Puneet Jai Kaur', position: 'Associate Professor', specialization: 'Software Quality Assurance, Aspect Oriented Software Development, Data Mining, Security in Cloud Computing and IoT', email: 'puneet@pu.ac.in', contact_no: '9914257047' },
    { name: 'Dr. Monika Sharma', position: 'Associate Professor', specialization: ' Software Engineering.', email: 'monikahsp@gmail.com', contact_no: '8968175076' },
    { name: 'Dr. Sukesha Sharma', position: 'Assistant Professor', specialization: 'Machine learning, Artificial Intelligence, IOT, Embedded Systems, Mechatronics', email: 'sukesha@pu.ac.in', contact_no: '9815472778' },
    { name: 'Ms. Raj Kumari', position: 'Assistant Professor', specialization: ' Parallel & Distributed Computing', email: 'rajkumari_bhatia5@yahoo.com', contact_no: '9417917607' },
    { name: 'Dr. Neelam Goel', position: 'Assistant Professor', specialization: ' Bioinformatics, Soft Computing', email: 'neelam.goyal85@gmail.com', contact_no: '9468427952' },
    { name: 'Dr. Yogita', position: 'Assistant Professor', specialization: ' Data Mining, Soft Computing', email: 'thakranyogita@gmail.com', contact_no: '9646837469' },
    { name: 'Ms. Rajni Sobti', position: 'Assistant Professor', specialization: 'Speech Recognition', email: 'sobtirajni@yahoo.co.in', contact_no: '9417433175' },
    { name: 'Dr. Sukhvir Singh', position: 'Assistant Professor', specialization: ' Wireless Networks', email: 'sukhvirpu@gmail.com', contact_no: '9855804567' },
    { name: 'Mr. Rajneesh Singla', position: 'Assistant Professor', specialization: 'Image Processing', email: '', contact_no: '' },
    { name: 'Mr. Arun Dhawan', position: 'Programming Assistant', specialization: '', email: '', contact_no: '' },
    { name: 'Mr. Vikas Bali', position: 'Programming Assistant', specialization: '', email: '', contact_no: '' },
  ];

  const labs = [
    'Embedded System Lab',
    'Wireless Communication Lab',
    'C/C++ Programming Lab Unix / Networking Lab',
    'Multimedia Lab',
    'Operating System Lab',
    'Software Engineering / Databases Lab',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Information Technology</h1>
              <p className="text-xl text-green-100">Transforming Ideas into Digital Solutions</p>
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
                    The Department of Information Technology aims to develop information technology engineers who work professionally and creatively for the advancement of technology and betterment of society.
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
                    <li>• To impart quality education by developing information technology facilities, faculty and resources that generates professionals who are leaders for a dynamic information society.
                    </li>
                    <li>• To develop a collaborative culture, so as to nurture an environment of increased research amongst the students and faculty.
                    </li>
                    <li>• To encourage hands-on learning by fostering industrial partnerships to create real world solutions through innovation, product development, entrepreneurship and consultancy services.
                    </li>
                    <li>• To enhance human potential by encouraging transparency and accountability amongst all stakeholders, in order to nurture ethical values in students.
                    </li>
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
                    <p>{program.details}</p>
                    <br />
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
                    <p className="text-green-600 font-medium">{member.position}</p>
                    <p>Specialization: {member.specialization}</p>
                    <p className="text-gray-600">Email: {member.email}</p>
                    <p className="text-gray-600">Contact No.: {member.contact_no}</p>
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
                    <li>• Artificial Intelligence and Machine Learning</li>
                    <li>• Cloud Computing and Edge Computing</li>
                    <li>• Cybersecurity and Privacy</li>
                    <li>• Big Data Analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Smart City Solutions (2023)</li>
                    <li>• Healthcare Management System (2023)</li>
                    <li>• E-commerce Security (2022)</li>
                    <li>• Mobile App Development (2022)</li>
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
                      <FlaskConical className="h-5 w-5 mr-2 text-green-600" />
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
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Tech Symposium 2024</h4>
                    <p className="text-sm text-gray-600">Annual technical symposium with industry experts</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold">Hackathon Competition</h4>
                    <p className="text-sm text-gray-600">24-hour coding competition for students</p>
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
                    <h4 className="font-semibold">Arjun Patel (2020)</h4>
                    <p className="text-sm text-gray-600">Software Engineer at Google</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sneha Verma (2019)</h4>
                    <p className="text-sm text-gray-600">Data Scientist at Microsoft</p>
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
                    <span className="text-sm">Best IT Department Award 2024</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Students Won National Hackathon</span>
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

export default DepartmentIT;
