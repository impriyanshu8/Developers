
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, Award, BookOpen, GraduationCap, Users, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const facultyData = {
    'Computer Science': [
      {
        name: 'Dr. Rajesh Kumar',
        designation: 'Professor & Head',
        specialization: 'Artificial Intelligence, Machine Learning',
        email: 'rajesh.kumar@uiet.puchd.ac.in',
        phone: '+91-172-2534820',
        experience: '18 years',
        qualification: 'Ph.D in Computer Science',
        publications: 45,
        image: 'photo-1507003211169-0a1dd7228f2d'
      },
      {
        name: 'Dr. Priya Sharma',
        designation: 'Associate Professor',
        specialization: 'Data Science, Big Data Analytics',
        email: 'priya.sharma@uiet.puchd.ac.in',
        phone: '+91-172-2534821',
        experience: '12 years',
        qualification: 'Ph.D in Computer Science',
        publications: 32,
        image: 'photo-1494790108755-2616c34b009c'
      },
      {
        name: 'Dr. Amit Singh',
        designation: 'Assistant Professor',
        specialization: 'Cybersecurity, Network Security',
        email: 'amit.singh@uiet.puchd.ac.in',
        phone: '+91-172-2534822',
        experience: '8 years',
        qualification: 'Ph.D in Computer Science',
        publications: 28,
        image: 'photo-1472099645785-5658abf4ff4e'
      }
    ],
    'Electronics': [
      {
        name: 'Dr. Neha Gupta',
        designation: 'Professor & Head',
        specialization: 'VLSI Design, Embedded Systems',
        email: 'neha.gupta@uiet.puchd.ac.in',
        phone: '+91-172-2534825',
        experience: '16 years',
        qualification: 'Ph.D in Electronics Engineering',
        publications: 38,
        image: 'photo-1438761681033-6461ffad8d80'
      },
      {
        name: 'Dr. Suresh Patel',
        designation: 'Associate Professor',
        specialization: 'Signal Processing, Communication Systems',
        email: 'suresh.patel@uiet.puchd.ac.in',
        phone: '+91-172-2534826',
        experience: '14 years',
        qualification: 'Ph.D in Electronics & Communication',
        publications: 35,
        image: 'photo-1560250097-0b93528c311a'
      }
    ],
    'Mechanical': [
      {
        name: 'Dr. Ravi Kumar',
        designation: 'Professor & Head',
        specialization: 'Manufacturing, CAD/CAM',
        email: 'ravi.kumar@uiet.puchd.ac.in',
        phone: '+91-172-2534830',
        experience: '20 years',
        qualification: 'Ph.D in Mechanical Engineering',
        publications: 42,
        image: 'photo-1519085360753-af0119f7cbe7'
      }
    ],
    'Civil': [
      {
        name: 'Dr. Sunita Verma',
        designation: 'Professor & Head',
        specialization: 'Structural Engineering, Earthquake Engineering',
        email: 'sunita.verma@uiet.puchd.ac.in',
        phone: '+91-172-2534835',
        experience: '17 years',
        qualification: 'Ph.D in Civil Engineering',
        publications: 40,
        image: 'photo-1573496359142-b8d87734a5a2'
      }
    ],
    'Biotechnology': [
      {
        name: 'Dr. Ankit Sharma',
        designation: 'Professor & Head',
        specialization: 'Genetic Engineering, Bioinformatics',
        email: 'ankit.sharma@uiet.puchd.ac.in',
        phone: '+91-172-2534840',
        experience: '15 years',
        qualification: 'Ph.D in Biotechnology',
        publications: 36,
        image: 'photo-1582750433449-648ed127bb54'
      }
    ]
  };

  const allFaculty = Object.values(facultyData).flat();
  const filteredFaculty = allFaculty.filter(faculty =>
    faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faculty.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { icon: Users, label: 'Total Faculty', value: '63' },
    { icon: GraduationCap, label: 'Ph.D Holders', value: '58' },
    { icon: BookOpen, label: 'Publications', value: '450+' },
    { icon: Award, label: 'Research Projects', value: '85' }
  ];

  const FacultyCard = ({ faculty }: { faculty: any }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <img
              src={`https://images.unsplash.com/${faculty.image}?w=120&h=120&fit=crop&crop=face`}
              alt={faculty.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 h-6 w-6 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">{faculty.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">{faculty.designation}</p>
            <p className="text-slate-600 mb-3 text-sm leading-relaxed">{faculty.specialization}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 mb-4">
              <div className="flex items-center justify-center sm:justify-start">
                <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
                {faculty.qualification}
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Award className="h-4 w-4 mr-2 text-green-500" />
                {faculty.experience} Experience
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                {faculty.publications} Publications
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-blue-50 hover:border-blue-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center justify-center hover:bg-green-50 hover:border-green-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="faculty" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Faculty
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Meet Our Expert Faculty</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished faculty members bring decades of academic excellence, research expertise, and industry experience to provide world-class education.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <Input
              placeholder="Search faculty by name, specialization..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-slate-300 focus:border-blue-500 rounded-xl shadow-sm"
            />
          </div>
        </div>

        {/* Faculty Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full lg:w-fit mx-auto mb-12 h-auto p-1 bg-white shadow-lg rounded-xl">
            <TabsTrigger value="all" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">All Faculty</TabsTrigger>
            <TabsTrigger value="Computer Science" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">CSE</TabsTrigger>
            <TabsTrigger value="Electronics" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">ECE</TabsTrigger>
            <TabsTrigger value="Mechanical" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">ME</TabsTrigger>
            <TabsTrigger value="Civil" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">CE</TabsTrigger>
            <TabsTrigger value="Biotechnology" className="px-4 py-3 rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">BT</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {(searchTerm ? filteredFaculty : allFaculty).map((faculty, index) => (
                <FacultyCard key={index} faculty={faculty} />
              ))}
            </div>
          </TabsContent>

          {Object.entries(facultyData).map(([department, faculty]) => (
            <TabsContent key={department} value={department}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {faculty.map((member, index) => (
                  <FacultyCard key={index} faculty={member} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Faculty Team</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We are always looking for passionate educators and researchers to join our growing faculty community.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
