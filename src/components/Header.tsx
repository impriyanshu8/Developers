import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Building, GraduationCap, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Navigation data structure
const navigationItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Institute',
    href: '/about',
    dropdown: [
      { name: 'About UIET', href: '/about' },
      { name: 'About Panjab University', href: '/about/pu' },
      { name: 'Vision & Mission', href: '/about#mission' },
      { name: "Director's Message", href: '/about#director' },
      { name: 'Campus & Location', href: '/about#location' },
      { name: 'Infrastructure', href: '/about#infrastructure' },
      { name: 'Chandigarh City', href: '/about#chandigarh' }
    ]
  },
  {
    name: 'Academics',
    href: '/academics',
    dropdown: [
      { name: 'Academic Programs', href: '/academics' },
      { name: 'Academic Calendar', href: '/academics#calendar' },
      { name: 'Curriculum & Syllabus', href: '/academics#syllabus' },
      { name: 'Timetable', href: '/academics#timetable' },
      { name: 'Examination System', href: '/academics#examination' },
      { name: 'Previous Year Papers', href: '/previous-papers' },
      { name: 'Important Downloads', href: '/downloads' }
    ]
  },
  {
    name: 'Departments',
    href: '/departments',
    dropdown: [
      { name: 'All Departments', href: '/departments' },
      { name: 'Computer Science & Engineering', href: '/departments/cse' },
      { name: 'Electronics & Communication', href: '/departments/ece' },
      { name: 'Electrical & Electronics', href: '/departments/eee' },
      { name: 'Information Technology', href: '/departments/it' },
      { name: 'Mechanical Engineering', href: '/departments/me' },
      { name: 'Biotechnology', href: '/departments/bt' },
      { name: 'Applied Sciences', href: '/departments/as' }
    ]
  },
  { name: 'Faculty', href: '/faculty' },
  { name: 'Research', href: '/research' },
  {
    name: 'Admissions',
    href: '/admissions',
    dropdown: [
      { name: 'B.E. Admissions 2024', href: '/admissions' },
      { name: 'M.E./M.Tech Admissions', href: '/admissions#mtech' },
      { name: 'Ph.D Admissions', href: '/admissions#phd' },
      { name: 'NRI/Foreign Admissions', href: '/admissions#nri' },
      { name: 'Sports Quota Admissions', href: '/admissions#sports' },
      { name: 'PUMEET Information', href: '/admissions#pumeet' },
      { name: 'PULEET Information', href: '/admissions#puleet' }
    ]
  },
  {
    name: 'Students',
    href: '/students',
    dropdown: [
      { name: 'Student Life Overview', href: '/students' },
      { name: 'B.E. 1st Year Batch', href: '/students#be-first-year' },
      { name: 'Research Scholars', href: '/students#research-scholars' },
      { name: 'Clubs & Societies', href: '/students#clubs' },
      { name: 'Student Activities', href: '/students#activities' },
      { name: 'Student Achievements', href: '/students#achievements' },
      { name: 'Notices & Updates', href: '/students#notices' },
      { name: 'Scholarships', href: '/students#scholarships' },
      { name: 'AICTE Scholarships', href: '/students#aicte-scholarships' },
      { name: 'Medical Emergency', href: '/students#medical-emergency' },
      { name: 'Alumni Network', href: '/students#alumni' },
      { name: 'Employment Opportunities', href: '/employment' }
    ]
  },
  {
    name: 'Committees',
    href: '/committees',
    dropdown: [
      { name: 'All Committees', href: '/committees' },
      { name: 'Departmental Committee', href: '/committees#departmental' },
      { name: 'Grievance Redressal Cell', href: '/committees#grievance' },
      { name: 'Anti-Sexual Harassment', href: '/committees#harassment' },
      { name: 'Board of Control', href: '/committees#board' },
      { name: 'SC/ST Cell', href: '/committees#scst' },
      { name: 'Anti-Ragging Committee', href: '/committees#ragging' },
      { name: 'R&D Cell', href: '/committees#rnd' },
      { name: 'UTechnos Committee', href: '/committees#utechnos' }
    ]
  },
  {
    name: 'Placements',
    href: '/placements',
    dropdown: [
      { name: 'Placement Overview', href: '/placements' },
      { name: "TPO's Message", href: '/placements#tpo-message' },
      { name: 'Placement Statistics', href: '/placements#statistics' },
      { name: 'Past Recruiters', href: '/placements#recruiters' },
      { name: 'Campus Placement Procedure', href: '/placements#procedure' },
      { name: 'Placement Web Portal', href: '/placements#portal' },
      { name: 'Training Programs', href: '/placements#training' },
      { name: 'TPC Team Contact', href: '/placements#tpc-contact' },
      { name: 'Placement Brochure', href: '/placements#brochure' },
      { name: 'Employment Opportunities', href: '/employment' }
    ]
  },
  { name: 'Contact', href: '/contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleItems, setVisibleItems] = useState(navigationItems.length);
  const navRef = useRef(null);
  
  // Mock location for demo
  const location = { pathname: '/' };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateVisibleItems = () => {
      if (!navRef.current) return;
      
      const containerWidth = navRef.current.offsetWidth;
      const itemWidth = 95; // Reduced for better fit
      const moreButtonWidth = 70;
      const safetyMargin = 20;
      const availableWidth = containerWidth - moreButtonWidth - safetyMargin;
      const maxItems = Math.floor(availableWidth / itemWidth);
      
      // Enhanced responsive breakpoint logic
      let itemsToShow;
      if (containerWidth < 800) {
        itemsToShow = Math.max(2, Math.min(maxItems, 3)); // 2-3 items on small screens
      } else if (containerWidth < 1000) {
        itemsToShow = Math.max(3, Math.min(maxItems, 4)); // 3-4 items on medium screens
      } else if (containerWidth < 1300) {
        itemsToShow = Math.max(4, Math.min(maxItems, 6)); // 4-6 items on medium-large screens
      } else if (containerWidth < 1500) {
        itemsToShow = Math.max(6, Math.min(maxItems, 8)); // 6-8 items on large screens
      } else {
        itemsToShow = navigationItems.length; // All items on extra large screens
      }
      
      setVisibleItems(Math.min(itemsToShow, navigationItems.length));
    };

    calculateVisibleItems();
    const debouncedCalculate = debounce(calculateVisibleItems, 100);
    window.addEventListener('resize', debouncedCalculate);
    return () => window.removeEventListener('resize', debouncedCalculate);
  }, []);

  // Debounce function for better performance
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const isActivePath = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const hasActiveDropdownItem = (dropdown) => {
    return dropdown.some(item => isActivePath(item.href.split('#')[0]));
  };

  const visibleNavItems = navigationItems.slice(0, visibleItems);
  const hiddenNavItems = navigationItems.slice(visibleItems);

  return (
    <header className={`bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Government Info Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-1 sm:space-x-4 min-w-0">
              <div className="flex items-center space-x-1 flex-shrink-0">
                <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium truncate">
                  <span className="hidden sm:inline">Government Institute</span>
                  <span className="sm:hidden">Govt. Institute</span>
                </span>
              </div>
              <div className="hidden md:flex items-center space-x-1 flex-shrink-0">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="truncate">Panjab University</span>
              </div>
            </div>
            <div className="bg-white/20 text-white border border-white/30 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex-shrink-0 font-medium">
              NAAC A+
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50/80 backdrop-blur-sm border-b py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0">
              <a href="tel:+91-172-2534816" className="flex items-center hover:text-blue-600 transition-colors flex-shrink-0">
                <Phone className="h-3 w-3 mr-1" />
                <span className="hidden sm:inline">+91-172-2534816</span>
                <span className="sm:hidden">Call</span>
              </a>
              <a href="mailto:info@uiet.puchd.ac.in" className="hidden sm:flex items-center hover:text-blue-600 transition-colors min-w-0">
                <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="hidden lg:inline truncate">info@uiet.puchd.ac.in</span>
                <span className="lg:hidden">Email</span>
              </a>
            </div>
            <div className="flex items-center space-x-1 text-xs flex-shrink-0">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Chandigarh, India</span>
              <span className="sm:hidden">CHD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
          {/* Logo and Institute Name */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0 max-w-[60%] sm:max-w-none">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-900 tracking-tight leading-tight truncate">
                <span className="hidden xl:inline">University Institute of Engineering & Technology</span>
                <span className="hidden sm:inline xl:hidden">UIET, Panjab University</span>
                <span className="sm:hidden">UIET</span>
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 font-medium truncate">
                <span className="hidden md:inline">Panjab University, Chandigarh</span>
                <span className="md:hidden">Panjab University</span>
              </p>
            </div>
          </div>

          {/* Responsive Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-0.5 flex-1 justify-center mx-1">
            {/* Visible Navigation Items */}
            {visibleNavItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center px-1.5 py-2 transition-all duration-200 font-medium hover:bg-blue-50 rounded-lg text-xs whitespace-nowrap ${
                    isActivePath(item.href) || (item.dropdown && hasActiveDropdownItem(item.dropdown))
                      ? 'text-blue-600 bg-blue-50 shadow-sm' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span className="truncate max-w-[80px]">{item.name}</span>
                  {item.dropdown && <ChevronDown className="ml-1 h-3 w-3 flex-shrink-0 transition-transform duration-200 group-hover:rotate-180" />}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-2 opacity-0 translate-y-2 animate-[fadeInUp_0.2s_ease-out_forwards]">
                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        className={`block w-full text-left px-4 py-3 text-sm transition-all duration-150 border-b border-gray-100 last:border-b-0 hover:pl-6 ${
                          isActivePath(subItem.href.split('#')[0])
                            ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-l-blue-600'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                        }`}
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* More Dropdown - Only show if there are hidden items */}
            {hiddenNavItems.length > 0 && (
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('more')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-1.5 py-2 text-xs text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all duration-200 whitespace-nowrap">
                  <MoreHorizontal className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="hidden xl:inline">More</span>
                </button>
                {activeDropdown === 'more' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-2 opacity-0 translate-y-2 animate-[fadeInUp_0.2s_ease-out_forwards] max-h-80 overflow-y-auto">
                    {hiddenNavItems.map((item) => (
                      <div key={item.name}>
                        <button
                          className={`block w-full text-left px-4 py-3 text-sm transition-all duration-150 border-b border-gray-100 hover:pl-6 ${
                            isActivePath(item.href)
                              ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-l-blue-600'
                              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                          }`}
                        >
                          {item.name}
                        </button>
                        {item.dropdown && (
                          <div className="pl-4 bg-gray-50/50">
                            {item.dropdown.map((subItem) => (
                              <button
                                key={subItem.name}
                                className={`block w-full text-left px-4 py-2 text-xs transition-all duration-150 border-b border-gray-100 last:border-b-0 hover:pl-6 ${
                                  isActivePath(subItem.href.split('#')[0])
                                    ? 'bg-blue-50 text-blue-600 font-medium'
                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3 flex-shrink-0">
            <Button className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-xs lg:text-sm px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="hidden lg:inline">Apply Online</span>
              <span className="lg:hidden">Apply</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-1.5 sm:p-2 hover:bg-blue-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl mb-2 max-h-[80vh] overflow-y-auto">
            <nav className="py-3 sm:py-4 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <button
                      className={`flex-1 text-left block px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 rounded-lg mx-2 font-medium text-sm ${
                        isActivePath(item.href) || (item.dropdown && hasActiveDropdownItem(item.dropdown))
                          ? 'text-blue-700 bg-blue-50 shadow-sm' 
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                      }`}
                    >
                      {item.name}
                    </button>
                    {item.dropdown && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mx-2 p-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </Button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-4 sm:pl-6 space-y-1 bg-gray-50/50 mx-2 rounded-lg py-2">
                      {item.dropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          className={`block w-full text-left px-3 sm:px-4 py-2 text-sm transition-all duration-150 rounded ${
                            isActivePath(subItem.href.split('#')[0])
                              ? 'text-blue-600 bg-blue-50 font-medium'
                              : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 sm:px-4 pt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-sm shadow-lg"
                >
                  Apply Online
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;