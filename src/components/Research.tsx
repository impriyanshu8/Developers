
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Microscope, BookOpen, Users, Award, TrendingUp, Globe, Lightbulb, FileText } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      icon: Lightbulb,
      projects: 12,
      publications: 45,
      funding: '₹2.5 Cr',
      description: 'Advanced research in AI, ML, deep learning, and neural networks.',
      highlights: ['Computer Vision', 'Natural Language Processing', 'Robotics', 'Data Analytics']
    },
    {
      title: 'VLSI Design & Embedded Systems',
      icon: Microscope,
      projects: 8,
      publications: 32,
      funding: '₹1.8 Cr',
      description: 'Cutting-edge research in chip design and embedded system development.',
      highlights: ['Chip Architecture', 'IoT Systems', 'Signal Processing', 'Hardware Security']
    },
    {
      title: 'Sustainable Engineering',
      icon: Globe,
      projects: 15,
      publications: 38,
      funding: '₹3.2 Cr',
      description: 'Research focused on sustainable and environmentally friendly engineering solutions.',
      highlights: ['Green Technology', 'Renewable Energy', 'Waste Management', 'Smart Cities']
    },
    {
      title: 'Biotechnology & Bioinformatics',
      icon: TrendingUp,
      projects: 10,
      publications: 28,
      funding: '₹2.1 Cr',
      description: 'Interdisciplinary research combining biology with advanced computational methods.',
      highlights: ['Genetic Engineering', 'Drug Discovery', 'Computational Biology', 'Biomedical Devices']
    }
  ];

  const publications = [
    {
      title: 'Advanced Deep Learning Architectures for Medical Image Analysis',
      authors: 'Dr. Rajesh Kumar, Dr. Priya Sharma',
      journal: 'IEEE Transactions on Medical Imaging',
      year: '2024',
      citations: 45
    },
    {
      title: 'Sustainable Smart Grid Technologies for Urban Infrastructure',
      authors: 'Dr. Amit Singh, Dr. Neha Gupta',
      journal: 'Nature Energy',
      year: '2024',
      citations: 32
    },
    {
      title: 'Novel VLSI Architectures for Low-Power IoT Applications',
      authors: 'Dr. Suresh Patel, Dr. Ravi Kumar',
      journal: 'IEEE Journal of Solid-State Circuits',
      year: '2023',
      citations: 28
    }
  ];

  const facilities = [
    {
      name: 'AI & ML Research Lab',
      equipment: 'High-performance Computing Clusters, GPU Servers',
      area: '500 sq ft',
      capacity: '25 researchers'
    },
    {
      name: 'VLSI Design Center',
      equipment: 'EDA Tools, FPGA Development Boards, Testing Equipment',
      area: '400 sq ft',
      capacity: '20 researchers'
    },
    {
      name: 'Biotechnology Research Lab',
      equipment: 'PCR Machines, Spectrophotometers, Cell Culture Facilities',
      area: '600 sq ft',
      capacity: '30 researchers'
    },
    {
      name: 'Sustainable Technology Lab',
      equipment: 'Solar Panels, Wind Turbines, Energy Storage Systems',
      area: '800 sq ft',
      capacity: '35 researchers'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Research & Innovation
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Advancing Knowledge Through Research</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our research initiatives drive innovation and contribute to solving real-world challenges through cutting-edge technology and interdisciplinary collaboration.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">200+</div>
              <div className="text-slate-600 text-sm">Research Papers</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">45</div>
              <div className="text-slate-600 text-sm">Active Projects</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">150+</div>
              <div className="text-slate-600 text-sm">Researchers</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">₹15 Cr</div>
              <div className="text-slate-600 text-sm">Research Funding</div>
            </CardContent>
          </Card>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Key Research Areas</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <area.icon className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-xl text-slate-900">{area.title}</CardTitle>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{area.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{area.projects}</div>
                      <div className="text-sm text-slate-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{area.publications}</div>
                      <div className="text-sm text-slate-600">Publications</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-slate-900">{area.funding}</div>
                      <div className="text-sm text-slate-600">Funding</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-slate-900 mb-2">Key Focus Areas:</div>
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Tabs */}
        <Tabs defaultValue="publications" className="mb-16">
          <TabsList className="grid w-full lg:w-fit mx-auto grid-cols-2 mb-8 h-12">
            <TabsTrigger value="publications" className="px-8 text-base">Recent Publications</TabsTrigger>
            <TabsTrigger value="facilities" className="px-8 text-base">Research Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="publications">
            <div className="space-y-6">
              {publications.map((publication, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-slate-900 leading-tight pr-4">{publication.title}</h4>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        {publication.year}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-2">{publication.authors}</p>
                    <div className="flex justify-between items-center text-sm text-slate-500">
                      <span className="italic">{publication.journal}</span>
                      <span>{publication.citations} citations</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="facilities">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="bg-white shadow-md border-0">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">{facility.name}</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div><strong>Equipment:</strong> {facility.equipment}</div>
                      <div><strong>Area:</strong> {facility.area}</div>
                      <div><strong>Capacity:</strong> {facility.capacity}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Join Our Research Community</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Collaborate with leading researchers and contribute to groundbreaking discoveries that shape the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                Research Opportunities
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
                Collaboration Proposals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
