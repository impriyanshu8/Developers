
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, FileText, File, Image, BookOpen, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImportantDownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const downloads = {
    academic: [
      { name: 'Academic Calendar 2024-25', type: 'PDF', size: '2.5 MB', date: '2024-01-15', category: 'Calendar' },
      { name: 'Course Registration Form', type: 'PDF', size: '1.2 MB', date: '2024-01-10', category: 'Forms' },
      { name: 'Examination Guidelines', type: 'PDF', size: '3.1 MB', date: '2024-01-08', category: 'Guidelines' },
      { name: 'Fee Structure 2024-25', type: 'PDF', size: '1.8 MB', date: '2024-01-05', category: 'Fees' },
      { name: 'Semester Timetable', type: 'PDF', size: '2.2 MB', date: '2024-01-03', category: 'Timetable' }
    ],
    admission: [
      { name: 'B.E. Admission Brochure 2024', type: 'PDF', size: '5.2 MB', date: '2024-01-20', category: 'Brochure' },
      { name: 'M.Tech Admission Form', type: 'PDF', size: '1.5 MB', date: '2024-01-18', category: 'Forms' },
      { name: 'Ph.D Application Form', type: 'PDF', size: '1.8 MB', date: '2024-01-15', category: 'Forms' },
      { name: 'PUMEET Syllabus', type: 'PDF', size: '2.8 MB', date: '2024-01-12', category: 'Syllabus' },
      { name: 'Eligibility Criteria', type: 'PDF', size: '1.1 MB', date: '2024-01-10', category: 'Guidelines' }
    ],
    placement: [
      { name: 'Placement Brochure 2025', type: 'PDF', size: '8.5 MB', date: '2024-01-25', category: 'Brochure' },
      { name: 'Company Registration Form', type: 'PDF', size: '1.3 MB', date: '2024-01-22', category: 'Forms' },
      { name: 'Student Resume Format', type: 'DOC', size: '0.8 MB', date: '2024-01-20', category: 'Templates' },
      { name: 'Placement Statistics 2024', type: 'PDF', size: '3.2 MB', date: '2024-01-18', category: 'Reports' },
      { name: 'Training Manual', type: 'PDF', size: '4.1 MB', date: '2024-01-15', category: 'Manual' }
    ],
    forms: [
      { name: 'Fee Concession Application', type: 'PDF', size: '1.0 MB', date: '2024-01-15', category: 'Application' },
      { name: 'TC Application Form', type: 'PDF', size: '0.8 MB', date: '2024-01-12', category: 'Application' },
      { name: 'Scholarship Application', type: 'PDF', size: '1.5 MB', date: '2024-01-10', category: 'Application' },
      { name: 'Character Certificate Form', type: 'PDF', size: '0.9 MB', date: '2024-01-08', category: 'Certificate' },
      { name: 'Migration Certificate Form', type: 'PDF', size: '1.1 MB', date: '2024-01-05', category: 'Certificate' }
    ]
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'PDF': return <FileText className="h-6 w-6 text-red-600" />;
      case 'DOC': return <File className="h-6 w-6 text-blue-600" />;
      case 'JPG': case 'PNG': return <Image className="h-6 w-6 text-green-600" />;
      default: return <FileText className="h-6 w-6 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container-modern">
          <div className="text-center">
            <Download className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Important Downloads</h1>
            <p className="text-xl text-indigo-100">
              Access all important documents, forms, and resources in one place
            </p>
          </div>
        </div>
      </section>

      <div className="container-modern py-12">
        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search for documents, forms, or resources..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="academic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="admission">Admissions</TabsTrigger>
            <TabsTrigger value="placement">Placements</TabsTrigger>
            <TabsTrigger value="forms">Forms & Applications</TabsTrigger>
          </TabsList>

          {Object.entries(downloads).map(([category, files]) => (
            <TabsContent key={category} value={category}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold capitalize">{category} Downloads</h2>
                
                <div className="grid gap-4">
                  {files.map((file, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              {getIcon(file.type)}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{file.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{file.type}</span>
                                <span>{file.size}</span>
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                  {file.category}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">
                                Updated: {new Date(file.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                            <Button className="bg-green-600 hover:bg-green-700">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Quick Links */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Calendar className="h-8 w-8 text-blue-600" />
                <span>Academic Calendar</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <BookOpen className="h-8 w-8 text-green-600" />
                <span>Syllabus</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <FileText className="h-8 w-8 text-purple-600" />
                <span>Application Forms</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Download className="h-8 w-8 text-orange-600" />
                <span>Placement Brochure</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="mt-8 bg-yellow-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? Contact our support team for assistance.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Button variant="outline">
                Email Support
              </Button>
              <Button variant="outline">
                Call Helpdesk
              </Button>
              <Button variant="outline">
                Submit Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ImportantDownloadsPage;
