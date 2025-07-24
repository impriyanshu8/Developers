import React, { useState } from "react";
import {
  Facebook,
  X,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Send,
  ArrowUp,
  BookOpen,
  Users,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About UIET", href: "/about" },
    { name: "Academic Programs", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Research", href: "/research" },
    { name: "Faculty", href: "/faculty" },
    { name: "Student Life", href: "/students" },
    { name: "Alumni Network", href: "/students#alumni" },
    { name: "Employment", href: "/employment" },
  ];

  const departments = [
    { name: "Computer Science & Engineering", href: "/departments/cse" },
    { name: "Electronics & Communication", href: "/departments/ece" },
    { name: "Electrical & Electronics", href: "/departments/eee" },
    { name: "Information Technology", href: "/departments/it" },
    { name: "Mechanical Engineering", href: "/departments/me" },
    { name: "Biotechnology", href: "/departments/bt" },
    { name: "Applied Sciences", href: "/departments/as" },
  ];

  const importantLinks = [
    { name: "Latest News and Notices", href: "/news" },
    { name: "Employment and Jobs", href: "/employment" },
    { name: "Shraman Foundation Scholarship", href: "/scholarships/shraman" },
    { name: "Panjab University(Official Website)", href: "https://puchd.ac.in/"},
    { name: "UIET Web Portal", href: "https://eakadamik.in/uietchd/" },
    { name: "TEQIP", href: "/teqip" },
    { name: "Design Innovation Centre (DIC)", href: "https://dicpu.in/" },
    { name: "Telelabs", href: "https://uiet.puchd.ac.in/telelabs/" },
    { name: "Maivrik Labs", href: "https://uiet.puchd.ac.in/maivriklabs/index.html" },
    { name: "TBIU", href: "/tbiu" },
    { name: "Government Scholarships", href: "https://scholarships.gov.in/" },
    { name: "National Apprenticeship Training Scheme (NATS)", href: "/nats" },
  ];

  const importantInformation = [
    { name: "AICTE Approval Letters", href: "/aicte-approval" },
    { name: "Student Notices", href: "/student-notices" },
    { name: "Previous Year Papers", href: "/previous-papers" },
    { name: "NBA Accreditation Letters", href: "/nba-accreditation" },
    { name: "N.I.R.F.", href: "/nirf" },
    { name: "Handbook of Information", href: "/handbook" },
    {
      name: "Library",
      href: "https://library.puchd.ac.in/digital-library.php",
    },
    { name: "Research Scholars", href: "/research-scholars" },
    { name: "RTI-UIET", href: "/rti" },
    { name: "UIET @ FB", href: "https://www.facebook.com/uietpuofficial" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/uietpuofficial",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: X,
      href: "https://x.com/uietchd",
      label: "X",
      color: "hover:bg-sky-500",
    },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/school/uietpu/",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/uietpu/#",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@UIET_PUCHD",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#118DC4] to-[#1aa3e0] hover:from-[#0e7db0] hover:to-[#118DC4] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:animate-bounce" />
      </button>

      {/* Main Footer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section - University Info */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl p-3 shadow-xl">
                      <img
                        src="https://imgs.search.brave.com/XfoNIRCzVe6i5gayiQSdwTrU26C4tp7OHzJQJ0AmVTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OS85NC9VSUVUX2xv/Z28ucG5nLzUxMnB4/LVVJRVRfbG9nby5w/bmc"
                        alt="UIET Logo"
                        className="w-full h-full object-contain filter"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      UIET
                    </h2>
                    <p className="text-[#118DC4] font-semibold text-lg">
                      Panjab University
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                  University Institute of Engineering & Technology, committed to
                  excellence in engineering education, research, and innovation
                  since 2002. Building tomorrow's engineers today.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center lg:items-end">
                <p className="text-gray-400 mb-4 text-sm font-medium">
                  Follow Us
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-r hover:from-[#118DC4] hover:to-[#1aa3e0] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group text-sm"
                    >
                      <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#118DC4]" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departments */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6">Departments</h3>
              <ul className="space-y-4">
                {departments.map((dept) => (
                  <li key={dept.name}>
                    <a
                      href={dept.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {dept.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-[#118DC4]" />
                Important Links
              </h3>
              <ul className="space-y-4">
                {importantLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Information */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Users className="h-5 w-5 mr-2 text-[#118DC4]" />
                Important Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {importantInformation.map((info) => (
                  <div key={info.name}>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 group text-sm"
                    >
                      <span className="group-hover:translate-x-1 transition-transform inline-block">
                        {info.name}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="mb-16 pt-12 border-t border-slate-700">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#118DC4] transition-colors">
                  <MapPin className="h-5 w-5 text-[#118DC4] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-white font-medium">
                    Sector 25, Chandigarh - 160014
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#118DC4] transition-colors">
                  <Phone className="h-5 w-5 text-[#118DC4] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+91-172-2534818"
                    className="text-white font-medium hover:text-[#118DC4] transition-colors"
                  >
                    +91-172-2534818
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-[#118DC4] transition-colors">
                  <Mail className="h-5 w-5 text-[#118DC4] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:info@uiet.puchd.ac.in"
                    className="text-white font-medium hover:text-[#118DC4] transition-colors"
                  >
                    info@uiet.puchd.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © 2025 University Institute of Engineering & Technology, Panjab
              University. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <a
                href="/about#privacy"
                className="text-gray-400 hover:text-[#118DC4] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/about#terms"
                className="text-gray-400 hover:text-[#118DC4] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/about#cookies"
                className="text-gray-400 hover:text-[#118DC4] transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="/about#accessibility"
                className="text-gray-400 hover:text-[#118DC4] transition-colors"
              >
                Accessibility
              </a>
              <a
                href="/contact"
                className="text-gray-400 hover:text-[#118DC4] transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
