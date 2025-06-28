
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, Target, GraduationCap, FlaskConical, 
  Trophy, Microscope, Dna, Leaf
} from 'lucide-react';

const DepartmentBT = () => {
  const programs = [
    { name: 'B.E. Biotechnology', duration: '4 Years', intake: '30' },
    { name: 'M.E. Biotechnology', duration: '2 Years', intake: '18' }
  ];

  const faculty = [
    { name: 'Dr. Shailendra Arya', position: 'Professor & Co-ordinator', specialization: 'Bioprocess Engineering' },
    { name: 'Dr. Sanjeev Puri', position: 'Professor', specialization: 'Pathophysiology of Polycystic kidney diseases and renal tissue Regeneration' },
    { name: 'Ms. Hema Setia', position: 'Assistant Professor', specialization: 'Polymer Science, Environmental Engg.' },
    { name: 'Dr. Jaspreet Kaur', position: 'Assistant Professor', specialization: 'Microbial and Medical Biotechnology' },
    { name: 'Ms. Anupreet Kaur', position: 'Assistant Professor', specialization: 'Microbial Biotechnology & Medical Chemistry' },
    { name: 'Dr. Madhu Khatri', position: 'Assistant Professor', specialization: 'Nanotechnology and Environmental Biotechnology' }
  ];

  const labs = [
    'Microbiology Lab / Enzyme Technology Lab',
    'Cell and Molecular Biology Lab / Immunology Lab',
    'Chemical  Reaction Engineering / Transport Phenomena',
    'Biochemistry Lab / Industrial Biotechnology',
    'Bio-Tech Lab',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <Dna className="h-16 w-16 mr-4" />
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-2">Biotechnology</h1>
              <p className="text-xl text-emerald-100">Life Sciences for Tomorrow</p>
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
                    To nurture world-class bioengineers with a potential to innovate, invent and disseminate knowledge for the benefit of society and environment.
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
                    <li>• Regular updation of the course curriculum to cater to the needs of academia and industry.</li>
                    <li>• To provide a platform for engineering graduates to create and design products and processes that can help industry and society.</li>
                    <li>• Initiate multi-disciplinary programs through the academia-industry interface with special emphasis on implementation of bioprocess design and scale-up.</li>
                    <li>• Emphasis on recent trends in bioengineering through the organization of conferences, symposia, workshops..</li>
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
                    <p className="text-emerald-600 font-medium">{member.position}</p>
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
                    <li>• Nanomaterial Hazard Identification:<br></br>
                          High throughput toxicity assessment using Zebra fish model.</li>
                    <li>• Assessment of the effects of biosurfactants on the viability of human ovarian cancer</li>
                    <li>• Photocatalytic treatment of waste colani Suitca</li>
                    <li>• Characterization of nitrate reducing microorganisms and development of microbial consortia for bioremediation of polluted waters of Chandigarh.</li>
                    <li>• Synthesis and Application of Novel Fluorescent Molecular Probes for Food Toxins.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Research</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Studies on the signaling cross talk of ovarian steroids: Relevance to menstrual migraine(2013)</li>
                    <li>• Chemo enzymatic synthesis and antihypertensive activity of a new series of enantiopure dihydropyridines(2012)</li>
                    <li>• Study on thermophysical properties of Nanofluids (2012)</li>
                    <li>• Characterization and Hydrodynamic study of Nanofluids (2014)</li>
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
                      <FlaskConical className="h-5 w-5 mr-2 text-emerald-600" />
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
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <h4 className="font-semibold">Production of monoclonal antibodies for HIV for Indians</h4>
                    <p className="text-sm text-gray-600">29th September 2017</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Expert lecture for motivating Biotech students to take up research and GATE preparation</h4>
                    <p className="text-sm text-gray-600">25th January 2018</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Workshop on Innovation and Star-up</h4>
                    <p className="text-sm text-gray-600">21st March 2018</p>
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
                    <h4 className="font-semibold">Dr Parul Sharma </h4>
                    <p className="text-sm text-gray-600">Young Researcher Award, Assistant Professor at Chandigarh University, India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr Mayank Garg </h4>
                    <p className="text-sm text-gray-600">Postdoctoral Researcher at Texas A&M University, USA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ajeet Pal Singh </h4>
                    <p className="text-sm text-gray-600">Scientist Il at Thermo Fisher Scientific, USA</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sheena Raina </h4>
                    <p className="text-sm text-gray-600">Scientist- Immunoassay at Intertek, UK</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dr Mehak Passi</h4>
                    <p className="text-sm text-gray-600">Technical sale specialist at Thermo Fisher Scientific, Germany</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Samarth Sandhu</h4>
                    <p className="text-sm text-gray-600">Research assistance at Carnegie Mellon University, USA</p>
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
                    <span className="text-sm">Best Biotechnology Research Award 2024</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                    <span className="text-sm">Patent Filed for Cancer Treatment</span>
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

export default DepartmentBT;
