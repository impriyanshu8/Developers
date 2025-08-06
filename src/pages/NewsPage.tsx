import React, { useState, useEffect } from 'react';
import {
  Calendar,
  ExternalLink,
  GraduationCap,
  TrendingUp,
  Star,
  Bell,
  FileText,
  Download,
  Award,
  BookOpen,
  Briefcase,
  Search,
  Filter,
  ArrowRight,
  Share2,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface NewsItem {
  id: number;
  category: 'admission' | 'placement' | 'research' | 'event' | 'achievement' | 'notice' | 'academic';
  title: string;
  description: string;
  content: string;
  date: string;
  isNew: boolean;
  isPinned: boolean;
  priority: 'high' | 'medium' | 'low';
  link?: string;
  downloadLink?: string;
  image?: string;
  tags: string[];
  author?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'admission',
    title: 'JEE Main 2024-25 Counselling Started - Apply Now',
    description: 'Online counselling for B.E. admissions through JEE Main scores has commenced. Apply before the deadline.',
    content: `The counselling process for B.E. admissions at UIET has started based on JEE Main 2024-25 scores. Candidates can register online and participate in the seat allocation process.

    Important Details:
    • Registration Deadline: March 15, 2025
    • Document Verification: March 18-20, 2025
    • Seat Allocation: March 22, 2025
    • Fee Payment: March 25, 2025

    Required Documents:
    • JEE Main Scorecard
    • 10th & 12th Marksheets
    • Category Certificate (if applicable)
    • Domicile Certificate
    • Medical Certificate`,
    date: '2025-03-01',
    isNew: true,
    isPinned: true,
    priority: 'high',
    link: '/admissions',
    tags: ['JEE Main', 'B.E. Admission', 'Counselling', 'Registration'],
    author: 'Admission Cell'
  },
  {
    id: 2,
    category: 'placement',
    title: 'Record Breaking Placements 2024-25 - 314 Offers with ₹42 LPA Highest Package',
    description: 'UIET achieves unprecedented placement success with 97% placement rate and highest package of ₹42 LPA.',
    content: `UIET has achieved remarkable placement statistics for the 2024-25 academic year with 314 successful placements and a record-breaking highest package of ₹42 LPA.

    Key Highlights:
    • Total Offers: 314 (97% placement rate)
    • Highest Package: ₹42 LPA (Google)
    • Average Package: ₹8.5 LPA
    • Top Recruiters: Google, Microsoft, Amazon, Infosys, TCS
    • Multiple Offers: 85 students received 2+ offers

    Department-wise Performance:
    • CSE: 98% placement rate, Avg: ₹12.2 LPA
    • ECE: 96% placement rate, Avg: ₹8.8 LPA
    • IT: 97% placement rate, Avg: ₹10.5 LPA
    • EEE: 94% placement rate, Avg: ₹7.8 LPA`,
    date: '2025-02-28',
    isNew: false,
    isPinned: true,
    priority: 'high',
    link: '/placements#statistics',
    tags: ['Placements', 'Statistics', '2024-25', 'Recruiters'],
    author: 'Training & Placement Cell'
  },
  {
    id: 3,
    category: 'research',
    title: 'UIET Researchers Publish 50+ Papers in Top International Journals',
    description: 'Faculty and students at UIET have published over 50 research papers in prestigious international journals this academic year.',
    content: `UIET faculty and research scholars have made significant contributions to academic research with 52 publications in top-tier international journals during 2024-25.

    Research Highlights:
    • SCI Journals: 38 publications
    • Scopus Journals: 14 publications
    • Total Impact Factor: 285.6
    • Average Impact Factor: 5.49
    • Collaborative Papers: 23 (with international institutions)

    Top Research Areas:
    • Artificial Intelligence & Machine Learning (15 papers)
    • IoT & Embedded Systems (12 papers)
    • VLSI Design & Communication (10 papers)
    • Renewable Energy Systems (8 papers)
    • Biotechnology Applications (7 papers)

    Notable Achievements:
    • Dr. Rajesh Kumar (CSE) - Nature Communications (IF: 17.69)
    • Dr. Priya Sharma (ECE) - IEEE Transactions on Circuits (IF: 4.85)`,
    date: '2025-02-25',
    isNew: true,
    isPinned: false,
    priority: 'medium',
    link: '/research',
    tags: ['Research', 'Publications', 'International Journals', 'SCI'],
    author: 'Research & Development Cell'
  },
  {
    id: 4,
    category: 'event',
    title: 'Technical Fest UTechnos 2024-25 Registration Open',
    description: 'The biggest technical festival of UIET is back! Register now for UTechnos 2024-25 with exciting competitions and workshops.',
    content: `UTechnos 2024-25, the annual technical festival of UIET, is scheduled for March 25-27, 2025. Registration is now open for all events.

    Event Categories:
    • Coding Competitions (CodeCraft, AlgoMania)
    • Robotics (RoboWars, Line Follower)
    • Electronics (CircuitMaster, Innovation Lab)
    • Web Development (WebCraft Championship)
    • Gaming (PUBG, CS:GO, FIFA tournaments)
    • Paper Presentations (TechTalk sessions)

    Workshops & Seminars:
    • AI/ML Workshop by Google Developers
    • IoT Hands-on by Intel
    • Cybersecurity by Cisco
    • Startup Mentorship by industry experts

    Prizes & Rewards:
    • Total Prize Pool: ₹5 Lakhs
    • Winner Certificates & Trophies
    • Internship opportunities with partner companies
    • Goodies and merchandise`,
    date: '2025-02-20',
    isNew: false,
    isPinned: false,
    priority: 'medium',
    link: '/students#events',
    tags: ['UTechnos', 'Technical Fest', 'Competition', 'Workshop'],
    author: 'Student Activity Committee'
  },
  {
    id: 5,
    category: 'achievement',
    title: 'UIET Maintains NIRF Tier-1 Ranking in Engineering Category',
    description: 'UIET successfully maintains its position in NIRF Tier-1 ranking for Engineering category for the third consecutive year.',
    content: `UIET has successfully maintained its prestigious NIRF Tier-1 ranking in the Engineering category for the third consecutive year, reaffirming its commitment to academic excellence.

    NIRF 2025 Performance:
    • Engineering Category: Tier-1 (Rank 45-60 band)
    • Overall Ranking: Improved by 5 positions
    • Research Quality Score: 85.2/100
    • Teaching-Learning Resources: 78.6/100
    • Outreach & Inclusivity: 82.4/100

    Key Factors Contributing to Success:
    • High-quality faculty with 95% Ph.D. holders
    • Strong industry partnerships for placements
    • Robust research output and patents
    • Modern infrastructure and laboratories
    • Student diversity and inclusion initiatives

    Future Goals:
    • Target Top 40 ranking by NIRF 2026
    • Increase research collaborations
    • Enhance international student exchange programs`,
    date: '2025-02-15',
    isNew: false,
    isPinned: false,
    priority: 'high',
    link: '/about#achievements',
    tags: ['NIRF Ranking', 'Achievement', 'Engineering', 'Excellence'],
    author: 'Administration Office'
  },
  {
    id: 6,
    category: 'academic',
    title: 'Mid-Semester Examinations Schedule Released',
    description: 'The examination schedule for Mid-Semester examinations for all B.E. and M.E./M.Tech programs has been published.',
    content: `The examination schedule for Mid-Semester examinations for the Spring Semester 2024-25 has been released for all undergraduate and postgraduate programs.

    Examination Dates:
    • B.E. 2nd Year: March 20-25, 2025
    • B.E. 3rd Year: March 22-27, 2025
    • B.E. 4th Year: March 24-29, 2025
    • M.E./M.Tech 1st Year: March 21-26, 2025
    • M.E./M.Tech 2nd Year: March 23-28, 2025

    Important Instructions:
    • Report 30 minutes before exam time
    • Bring university ID card and hall ticket
    • Electronic devices strictly prohibited
    • Follow COVID-19 safety protocols

    Examination Centers:
    • Block A: B.E. 2nd & 4th Year
    • Block B: B.E. 3rd Year
    • Block C: M.E./M.Tech students`,
    date: '2025-02-12',
    isNew: false,
    isPinned: false,
    priority: 'high',
    downloadLink: '/downloads/mid-sem-schedule-2025.pdf',
    tags: ['Examination', 'Mid-Semester', 'Schedule', 'Academic'],
    author: 'Controller of Examinations'
  },
  {
    id: 7,
    category: 'notice',
    title: 'Fee Payment Deadline Extended - Last Date: March 18, 2025',
    description: 'The deadline for semester fee payment has been extended till March 18, 2025. Students are advised to clear dues immediately.',
    content: `The deadline for semester fee payment for Spring Semester 2024-25 has been extended till March 18, 2025, due to technical issues with the payment gateway.

    Fee Structure (Per Semester):
    • B.E. Students: ₹35,000
    • M.E./M.Tech Students: ₹42,000
    • Ph.D. Students: ₹18,000
    • NRI Students: $2,500

    Payment Modes:
    • Online Payment (Preferred): University Portal
    • Bank Challan: Punjab National Bank
    • Demand Draft: Favor of "Registrar, Panjab University"

    Late Fee Charges:
    • March 19-25: ₹500 per day
    • After March 25: ₹1000 per day + academic consequences

    Important: Students with pending dues will not be allowed to appear in examinations.`,
    date: '2025-02-10',
    isNew: true,
    isPinned: true,
    priority: 'high',
    link: '/students#fee-payment',
    tags: ['Fee Payment', 'Deadline Extended', 'Important Notice'],
    author: 'Finance Office'
  },
  {
    id: 8,
    category: 'admission',
    title: 'M.E./M.Tech Admission 2024-25 - GATE Score Based Selection',
    description: 'Applications invited for M.E./M.Tech programs based on GATE 2024 scores. Multiple specializations available.',
    content: `Applications are invited for M.E./M.Tech programs for the academic year 2024-25 based on valid GATE 2024 scores.

    Available Programs:
    • M.E. Computer Science & Engineering
    • M.Tech. Electronics & Communication
    • M.E. Electrical & Electronics Engineering
    • M.Tech. Information Technology
    • M.E. Mechanical Engineering
    • M.Tech. Biotechnology

    Eligibility Criteria:
    • Bachelor's degree in relevant field with 60% marks
    • Valid GATE 2024 score
    • For SC/ST: 55% marks in Bachelor's degree

    Application Process:
    • Online Application: March 1-31, 2025
    • Document Verification: April 5-7, 2025
    • Merit List: April 10, 2025
    • Admission & Fee Payment: April 15-20, 2025

    Seats Available:
    • Total Seats: 120 across all programs
    • Reserved Categories: As per government norms`,
    date: '2025-02-08',
    isNew: false,
    isPinned: false,
    priority: 'high',
    link: '/admissions#mtech',
    tags: ['M.E./M.Tech', 'GATE', 'Postgraduate Admission'],
    author: 'Admission Cell'
  }
];

const categoryConfig = {
  all: { label: 'All News', icon: Bell },
  admission: { label: 'Admissions', icon: GraduationCap },
  placement: { label: 'Placements', icon: Briefcase },
  research: { label: 'Research', icon: Star },
  event: { label: 'Events', icon: Calendar },
  achievement: { label: 'Achievements', icon: Award },
  notice: { label: 'Notices', icon: FileText },
  academic: { label: 'Academic', icon: BookOpen }
};

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    let filtered = newsData;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(news => 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });

    setFilteredNews(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-[#118DC4] text-white">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-[#118DC4]/60 text-white">Medium</Badge>;
      case 'low':
        return <Badge className="bg-gray-500 text-white">Low</Badge>;
      default:
        return null;
    }
  };

  const NewsCard = ({ news }: { news: NewsItem }) => {
    const categoryInfo = categoryConfig[news.category];
    const IconComponent = categoryInfo.icon;

    return (
      <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-[#118DC4] h-full flex flex-col bg-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 rounded-lg bg-[#118DC4]/10 text-[#118DC4]">
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <Badge variant="outline" className="text-xs border-[#118DC4] text-[#118DC4]">{categoryInfo.label}</Badge>
              {news.isNew && <Badge className="bg-[#118DC4] text-white text-xs">NEW</Badge>}
              {news.isPinned && <Badge className="bg-[#118DC4]/80 text-white text-xs">PINNED</Badge>}
            </div>
          </div>
          <div className="flex-shrink-0">
            {getPriorityBadge(news.priority)}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 flex-grow-0">
          {news.title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 flex-grow">
          {news.description}
        </p>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">{formatDate(news.date)}</span>
            <span className="sm:hidden">{new Date(news.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
          </span>
          {news.author && (
            <span className="text-[#118DC4] truncate ml-2">{news.author}</span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
          <Button 
            onClick={() => setSelectedNews(news)}
            className="bg-[#118DC4] hover:bg-[#0d6fa3] text-white flex-1 text-sm"
          >
            Read More <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </Button>
          
          <div className="flex gap-2">
            {news.link && (
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
                <a href={news.link} className="flex items-center gap-1 text-xs sm:text-sm">
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Visit</span>
                </a>
              </Button>
            )}
            
            {news.downloadLink && (
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-none">
                <a href={news.downloadLink} className="flex items-center gap-1 text-xs sm:text-sm">
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#118DC4] to-[#0d6fa3] text-white py-8 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              News & Updates
            </h1>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto">
              Stay informed with the latest announcements, achievements, and important updates from UIET
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold">{newsData.length}</div>
                <div className="text-xs sm:text-sm text-blue-100">Total Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold">{newsData.filter(n => n.isNew).length}</div>
                <div className="text-xs sm:text-sm text-blue-100">New Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 col-span-2 md:col-span-1 border border-white/20">
                <div className="text-xl sm:text-2xl font-bold">{newsData.filter(n => n.isPinned).length}</div>
                <div className="text-xs sm:text-sm text-blue-100">Important</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-4 sm:py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and updates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-colors"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-[#118DC4]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-[#118DC4] focus:border-[#118DC4] transition-colors"
              >
                <option value="date">Latest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-12">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            {/* Category Tabs */}
            <TabsList className="w-full justify-start mb-6 sm:mb-8 bg-gray-50 p-1 h-auto flex-wrap gap-1 border border-gray-200">
              {Object.entries(categoryConfig).map(([key, config]) => {
                const IconComponent = config.icon;
                return (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 data-[state=active]:bg-[#118DC4] data-[state=active]:text-white text-xs sm:text-sm hover:bg-[#118DC4]/10 transition-colors"
                  >
                    <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">{config.label}</span>
                    <span className="sm:hidden">{config.label.split(' ')[0]}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {/* News Content */}
            <div className="space-y-6">
              {filteredNews.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                  {filteredNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <Bell className="h-12 w-12 sm:h-16 sm:w-16 text-[#118DC4]/30 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No Updates Found</h3>
                  <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pr-4">{selectedNews.title}</h2>
                <Button
                  variant="ghost"
                  onClick={() => setSelectedNews(null)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-[#118DC4]/10 flex-shrink-0"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1 text-[#118DC4]">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  {formatDate(selectedNews.date)}
                </span>
                {selectedNews.author && (
                  <span className="text-gray-600">By: {selectedNews.author}</span>
                )}
              </div>

              <div className="prose max-w-none mb-4 sm:mb-6">
                <div className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedNews.content}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                {selectedNews.link && (
                  <Button asChild className="bg-[#118DC4] hover:bg-[#0d6fa3] text-white">
                    <a href={selectedNews.link} className="flex items-center justify-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Visit Page
                    </a>
                  </Button>
                )}
                
                {selectedNews.downloadLink && (
                  <Button variant="outline" asChild className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4] hover:text-white">
                    <a href={selectedNews.downloadLink} className="flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </Button>
                )}

                <Button variant="outline" className="border-[#118DC4] text-[#118DC4] hover:bg-[#118DC4] hover:text-white flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default NewsPage;
