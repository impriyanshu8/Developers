
import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, ExternalLink, Send, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About UIET', href: '/about' },
    { name: 'Academic Programs', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Research', href: '/research' },
    { name: 'Faculty', href: '/faculty' },
    { name: 'Student Life', href: '/students' },
    { name: 'Alumni Network', href: '/students#alumni' },
    { name: 'Employment', href: '/employment' }
  ];

  const departments = [
    { name: 'Computer Science & Engineering', href: '/departments/cse' },
    { name: 'Electronics & Communication', href: '/departments/ece' },
    { name: 'Electrical & Electronics', href: '/departments/eee' },
    { name: 'Information Technology', href: '/departments/it' },
    { name: 'Mechanical Engineering', href: '/departments/me' },
    { name: 'Biotechnology', href: '/departments/bt' },
    { name: 'Applied Sciences', href: '/departments/as' }
  ];

  const resources = [
    { name: 'Academic Calendar', href: '/academics#calendar' },
    { name: 'Previous Papers', href: '/previous-papers' },
    { name: 'Important Downloads', href: '/downloads' },
    { name: 'UIET Web Portal', href: 'https://eakadamik.in/uietchd/' },
    { name: 'Library Resources', href: 'https://library.puchd.ac.in/digital-library.php' },
    { name: 'Campus Map', href: 'https://www.google.com/maps/place/University+Institute+Of+Engineering+and+Technology,+Panjab+University/@30.748099,76.757149,15z/data=!4m6!3m5!1s0x390feda45e945a31:0xdc967b3a7e0f1e95!8m2!3d30.748099!4d76.7571494!16zL20vMGM5cjNk?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/uietpuofficial', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: 'https://x.com/uietchd', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: 'https://in.linkedin.com/school/uietpu/', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: 'https://www.instagram.com/uietpu/#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Youtube, href: 'https://www.youtube.com/@UIET_PUCHD', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
   <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-[#118DC4] hover:bg-[#0e7db0] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
    <img
      src="https://imgs.search.brave.com/XfoNIRCzVe6i5gayiQSdwTrU26C4tp7OHzJQJ0AmVTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85NC9VSUVUX2xv/Z28ucG5nLzUxMnB4/LVVJRVRfbG9nby5w/bmc"
      alt="UIET Logo"
      className="w-10 h-10 object-contain"
    />
  </div>
  <div>
    <h3 className="text-xl font-bold">UIET</h3>
    <p className="text-sm text-gray-400">Panjab University</p>
  </div>
</div>

            
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              University Institute of Engineering & Technology, committed to excellence in 
              engineering education, research, and innovation since 2002. Building tomorrow's engineers today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm group">
                <MapPin className="h-4 w-4 mr-3 text-[#118DC4] flex-shrink-0 group-hover:text-[#1aa3e0] transition-colors" />
                <span className="group-hover:text-white transition-colors">Sector 25, Chandigarh - 160014, India</span>
              </div>
              <div className="flex items-center text-sm group">
                <Phone className="h-4 w-4 mr-3 text-[#118DC4] flex-shrink-0 group-hover:text-[#1aa3e0] transition-colors" />
                <a href="tel:+91-172-2534818" className="hover:text-[#118DC4] transition-colors">
                  +91-172-2534818
                </a>
              </div>
              <div className="flex items-center text-sm group">
                <Mail className="h-4 w-4 mr-3 text-[#118DC4] flex-shrink-0 group-hover:text-[#1aa3e0] transition-colors" />
                <a href="mailto:info@uiet.puchd.ac.in" className="hover:text-[#118DC4] transition-colors">
                  info@uiet.puchd.ac.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 flex items-center justify-center text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-[#118DC4] transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#118DC4] transition-colors text-sm flex items-center group"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Departments</h3>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept.name}>
                  <Link
                    to={dept.href}
                    className="text-gray-300 hover:text-[#118DC4] transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{dept.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-[#118DC4] transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

{/*         
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Stay Connected</h3>
              <p className="text-gray-300">Subscribe to our newsletter for latest updates, announcements, and opportunities.</p>
            </div>
            <div>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#118DC4] focus:ring-[#118DC4]"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-[#118DC4] hover:bg-[#0e7db0] px-6 flex items-center"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <span className="text-sm">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      <span className="hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </Button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2">Thank you for subscribing!</p>
              )}
            </div>
          </div>
        </div>*/}
      </div> 


      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 University Institute of Engineering & Technology, Panjab University. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/about#privacy" className="text-gray-400 hover:text-[#118DC4] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about#terms" className="text-gray-400 hover:text-[#118DC4] transition-colors">
                Terms of Service
              </Link>
              <Link to="/about#cookies" className="text-gray-400 hover:text-[#118DC4] transition-colors">
                Cookie Policy
              </Link>
              <Link to="/about#accessibility" className="text-gray-400 hover:text-[#118DC4] transition-colors">
                Accessibility
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#118DC4] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
