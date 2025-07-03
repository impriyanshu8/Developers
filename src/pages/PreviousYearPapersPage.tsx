import React, { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  Calendar,
  Book,
  Search,
  Filter,
  X,
} from "lucide-react";

interface Paper {
  year: string;
  semester: string;
  subject: string;
  department: string;
  file: string;
  credits: number;
}

interface PapersData {
  btech: Paper[];
  mtech: Paper[];
  phd: Paper[];
}

const PreviousYearPapersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");

  const papers: PapersData = {
    btech: [
      {
        year: "2023",
        semester: "8th",
        subject: "Software Engineering",
        department: "CSE",
        file: "se_2023_8th.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "7th",
        subject: "Machine Learning",
        department: "CSE",
        file: "ml_2023_7th.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "6th",
        subject: "Database Management Systems",
        department: "CSE",
        file: "dbms_2023_6th.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "5th",
        subject: "Computer Networks",
        department: "CSE",
        file: "cn_2023_5th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "8th",
        subject: "Digital Communication",
        department: "ECE",
        file: "dc_2022_8th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "7th",
        subject: "Microprocessors",
        department: "ECE",
        file: "mp_2022_7th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "6th",
        subject: "Signal Processing",
        department: "ECE",
        file: "sp_2022_6th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "7th",
        subject: "Power Electronics",
        department: "EEE",
        file: "pe_2022_7th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "6th",
        subject: "Control Systems",
        department: "EEE",
        file: "cs_2022_6th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "5th",
        subject: "Electrical Machines",
        department: "EEE",
        file: "em_2022_5th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "6th",
        subject: "Web Technologies",
        department: "IT",
        file: "wt_2022_6th.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "7th",
        subject: "Cloud Computing",
        department: "IT",
        file: "cc_2021_7th.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "6th",
        subject: "Mobile Computing",
        department: "IT",
        file: "mc_2021_6th.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "7th",
        subject: "CAD/CAM",
        department: "ME",
        file: "cadcam_2021_7th.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "6th",
        subject: "Heat Transfer",
        department: "ME",
        file: "ht_2021_6th.pdf",
        credits: 4,
      },
      {
        year: "2020",
        semester: "8th",
        subject: "Bioinformatics",
        department: "BT",
        file: "bio_2020_8th.pdf",
        credits: 4,
      },
      {
        year: "2020",
        semester: "7th",
        subject: "Genetic Engineering",
        department: "BT",
        file: "ge_2020_7th.pdf",
        credits: 4,
      },
      {
        year: "2019",
        semester: "2nd",
        subject: "Engineering Mathematics",
        department: "AS",
        file: "em_2019_2nd.pdf",
        credits: 4,
      },
      {
        year: "2019",
        semester: "1st",
        subject: "Engineering Physics",
        department: "AS",
        file: "ep_2019_1st.pdf",
        credits: 4,
      },
      {
        year: "2018",
        semester: "2nd",
        subject: "Engineering Chemistry",
        department: "AS",
        file: "ec_2018_2nd.pdf",
        credits: 4,
      },
      {
        year: "2017",
        semester: "1st",
        subject: "Communication Skills",
        department: "AS",
        file: "cs_2017_1st.pdf",
        credits: 2,
      },
    ],
    mtech: [
      {
        year: "2023",
        semester: "4th",
        subject: "Advanced Algorithms",
        department: "CSE",
        file: "aa_2023_4th.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "3rd",
        subject: "Machine Learning",
        department: "CSE",
        file: "ml_2023_3rd.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "4th",
        subject: "VLSI Design",
        department: "ECE",
        file: "vlsi_2023_4th.pdf",
        credits: 4,
      },
      {
        year: "2023",
        semester: "3rd",
        subject: "Advanced Digital Signal Processing",
        department: "ECE",
        file: "adsp_2023_3rd.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "4th",
        subject: "Distributed Systems",
        department: "IT",
        file: "ds_2022_4th.pdf",
        credits: 4,
      },
      {
        year: "2022",
        semester: "3rd",
        subject: "Big Data Analytics",
        department: "IT",
        file: "bda_2022_3rd.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "4th",
        subject: "Advanced Power Systems",
        department: "EEE",
        file: "aps_2021_4th.pdf",
        credits: 4,
      },
      {
        year: "2021",
        semester: "3rd",
        subject: "Renewable Energy",
        department: "EEE",
        file: "re_2021_3rd.pdf",
        credits: 4,
      },
    ],
    phd: [
      {
        year: "2023",
        semester: "Entrance",
        subject: "Research Methodology",
        department: "All",
        file: "rm_2023_ent.pdf",
        credits: 0,
      },
      {
        year: "2022",
        semester: "Entrance",
        subject: "Computer Science",
        department: "CSE",
        file: "cs_2022_ent.pdf",
        credits: 0,
      },
      {
        year: "2022",
        semester: "Entrance",
        subject: "Electronics Engineering",
        department: "ECE",
        file: "ee_2022_ent.pdf",
        credits: 0,
      },
      {
        year: "2021",
        semester: "Entrance",
        subject: "Electrical Engineering",
        department: "EEE",
        file: "eee_2021_ent.pdf",
        credits: 0,
      },
      {
        year: "2020",
        semester: "Entrance",
        subject: "Information Technology",
        department: "IT",
        file: "it_2020_ent.pdf",
        credits: 0,
      },
    ],
  };

  const departments = ["All", "CSE", "ECE", "EEE", "IT", "ME", "BT", "AS"];
  const years = ["All", "2023", "2022", "2021", "2020", "2019", "2018", "2017"];
  const semesters = [
    "All",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "Entrance",
  ];

  const filteredPapers: PapersData = useMemo(() => {
    const result: PapersData = {
      btech: [],
      mtech: [],
      phd: [],
    };

    Object.entries(papers).forEach(([program, paperList]) => {
      const key = program as keyof PapersData;
      result[key] = paperList.filter((paper) => {
        const matchesSearch =
          paper.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          paper.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment =
          selectedDepartment === "All" ||
          paper.department === selectedDepartment;
        const matchesYear =
          selectedYear === "All" || paper.year === selectedYear;
        const matchesSemester =
          selectedSemester === "All" || paper.semester === selectedSemester;

        return (
          matchesSearch && matchesDepartment && matchesYear && matchesSemester
        );
      });
    });

    return result;
  }, [searchTerm, selectedDepartment, selectedYear, selectedSemester]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedDepartment("All");
    setSelectedYear("All");
    setSelectedSemester("All");
  };

  const getTotalPapers = (): number => {
    return Object.values(filteredPapers).reduce(
      (total, papers) => total + papers.length,
      0
    );
  };

  const handleDownload = (fileName: string) => {
    console.log(`Downloading: ${fileName}`);
    // In a real application, this would trigger the actual file download
  };

 return (
    <div className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-r from-[#118DC4] to-[#0A6B9C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Previous Year Papers</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Access comprehensive collection of previous year question papers
              for all programs and departments (2017-2023)
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter Papers
              </span>
              <Badge variant="secondary">{getTotalPapers()} papers found</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search by subject or department..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#118DC4]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#118DC4]"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#118DC4]"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Semester
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#118DC4]"
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                >
                  {semesters.map((semester) => (
                    <option key={semester} value={semester}>
                      {semester}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters and Clear Button */}
            {(searchTerm ||
              selectedDepartment !== "All" ||
              selectedYear !== "All" ||
              selectedSemester !== "All") && (
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Search: "{searchTerm}"
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSearchTerm("")}
                      />
                    </Badge>
                  )}
                  {selectedDepartment !== "All" && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Dept: {selectedDepartment}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedDepartment("All")}
                      />
                    </Badge>
                  )}
                  {selectedYear !== "All" && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Year: {selectedYear}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedYear("All")}
                      />
                    </Badge>
                  )}
                  {selectedSemester !== "All" && (
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      Sem: {selectedSemester}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedSemester("All")}
                      />
                    </Badge>
                  )}
                </div>
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Tabs defaultValue="btech" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="btech">
              B.Tech Papers ({filteredPapers.btech.length})
            </TabsTrigger>
            <TabsTrigger value="mtech">
              M.Tech Papers ({filteredPapers.mtech.length})
            </TabsTrigger>
            <TabsTrigger value="phd">
              Ph.D Papers ({filteredPapers.phd.length})
            </TabsTrigger>
          </TabsList>

          {Object.entries(filteredPapers).map(([program, paperList]) => (
            <TabsContent key={program} value={program}>
              {paperList.length > 0 ? (
                <div className="grid gap-4">
                  {paperList.map((paper, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-[#118DC4]/10 rounded-lg flex items-center justify-center">
                              <FileText className="h-6 w-6 text-[#118DC4]" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {paper.subject}
                              </h3>
                              <div className="flex items-center flex-wrap gap-4 text-sm text-gray-600 mt-1">
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {paper.year}
                                </span>
                                <span className="flex items-center">
                                  <Book className="h-4 w-4 mr-1" />
                                  {paper.semester} Semester
                                </span>
                                <Badge variant="secondary" className="text-xs">
                                  {paper.department}
                                </Badge>
                                {paper.credits > 0 && (
                                  <span className="text-xs bg-[#118DC4]/10 text-[#118DC4] px-2 py-1 rounded">
                                    {paper.credits} Credits
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <Button
                            className="bg-[#118DC4] hover:bg-[#0A6B9C] text-white"
                            onClick={() => handleDownload(paper.file)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <FileText className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No papers found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search or filter criteria
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Guidelines */}
        <Card className="mt-12 bg-[#118DC4]/5">
          <CardHeader>
            <CardTitle className="text-[#118DC4]">
              Important Guidelines & Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-[#118DC4]">
                  Usage Guidelines
                </h4>
                <ul className="space-y-2 text-[#0A6B9C] text-sm">
                  <li>• Papers are for reference and study purposes only</li>
                  <li>
                    • Syllabus may have changed since these papers were set
                  </li>
                  <li>
                    • Contact respective departments for latest syllabus
                    information
                  </li>
                  <li>
                    • Report any issues with downloads to admin@uiet.puchd.ac.in
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-[#118DC4]">
                  Paper Coverage
                </h4>
                <ul className="space-y-2 text-[#0A6B9C] text-sm">
                  <li>• B.Tech: All semesters and departments (2017-2023)</li>
                  <li>• M.Tech: Final semester papers and core subjects</li>
                  <li>• Ph.D: Entrance examination papers</li>
                  <li>
                    • Applied Sciences: Foundation courses for all branches
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PreviousYearPapersPage;
