
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FacultyProfile from '@/components/FacultyProfile';

const FacultyProfilePage = () => {
  // Sample faculty data
  const facultyData = {
    name: 'Dr. Sarbjeet Singh',
    designation: 'Professor & Coordinator',
    department: 'Computer Science & Engineering',
    email: 'sarbjeet@pu.ac.in',
    phone: '09815951674',
    office: 'Room 301, CSE Block',
    image: 'photo-1507003211169-0a1dd7228f2d',
    qualifications: [
      'Ph.D in Computer Science (Thapar University, Patiala, Punjab, 2005-2009)',
      'M.Tech in Computer Science (Thapar University, Patiala, Punjab, 2001-2003)',
      'B.Tech in Computer Science and Engineering (Punjab Technical University, Jalandhar, Punjab., 1997-2001)'
    ],
    specializations: ['Social Network Analysis', 'Machine Learning', 'Cloud Computing'],
    experience: '18 years',
    teachingExperience: '15 years',
    researchInterests: [
      'Artificial Intelligence and Machine Learning',
      'Deep Learning and Neural Networks',
      'Computer Vision and Image Processing',
      'Natural Language Processing',
      'Data Mining and Analytics',
      'Intelligent Systems'
    ],
    publications: [
      {
        title: 'Deep Learning Approaches for Medical Image Analysis',
        journal: 'IEEE Transactions on Medical Imaging',
        year: '2023',
        type: 'Journal' as const
      },
      {
        title: 'Machine Learning in Healthcare: A Comprehensive Survey',
        journal: 'ACM Computing Surveys',
        year: '2023',
        type: 'Journal' as const
      },
      {
        title: 'Federated Learning for Privacy-Preserving Healthcare',
        journal: 'International Conference on Machine Learning (ICML)',
        year: '2022',
        type: 'Conference' as const
      },
      {
        title: 'Computer Vision Techniques for Autonomous Vehicles',
        journal: 'IEEE Computer Vision and Pattern Recognition',
        year: '2022',
        type: 'Conference' as const
      },
      {
        title: 'Artificial Intelligence in Education',
        journal: 'Handbook of Educational Technology',
        year: '2021',
        type: 'Book Chapter' as const
      }
    ],
    projects: [
      {
        title: 'AI-Powered Medical Diagnosis System',
        funding: 'DST-SERB (₹25 Lakhs)',
        duration: '2022-2025',
        role: 'Principal Investigator'
      },
      {
        title: 'Smart Traffic Management using Computer Vision',
        funding: 'MHRD (₹18 Lakhs)',
        duration: '2021-2024',
        role: 'Co-Principal Investigator'
      },
      {
        title: 'Federated Learning Framework for IoT',
        funding: 'CSIR (₹12 Lakhs)',
        duration: '2020-2023',
        role: 'Principal Investigator'
      }
    ],
    awards: [
      'Best Teacher Award - UIET (2022)',
      'Excellence in Research Award - Panjab University (2021)',
      'Young Scientist Award - Indian Science Congress (2019)',
      'Best Paper Award - ICML 2022'
    ],
    memberships: [
      'IEEE Computer Society',
      'ACM (Association for Computing Machinery)',
      'Computer Society of India (CSI)',
      'Indian Association for Artificial Intelligence'
    ],
    courses: [
      'CS401 - Artificial Intelligence',
      'CS501 - Machine Learning',
      'CS601 - Deep Learning',
      'CS301 - Data Structures and Algorithms',
      'CS701 - Research Methodology'
    ],
    biography: `Dr. Sarbjeet Singh is a distinguished Professor and Head of the Computer Science & Engineering Department at UIET, Panjab University. With over 18 years of academic and research experience, he has established himself as a leading expert in Artificial Intelligence and Machine Learning. His research focuses on developing innovative AI solutions for healthcare, autonomous systems, and educational technology. He has published over 45 research papers in top-tier international journals and conferences, and has been awarded several prestigious grants for his groundbreaking research. Dr. Kumar is passionate about mentoring students and has supervised numerous M.Tech and Ph.D students who have gone on to successful careers in academia and industry.`,
    googleScholar: 'https://scholar.google.com/citations?user=xyz',
    researchGate: 'https://www.researchgate.net/profile/rajesh-kumar',
    linkedin: 'https://www.linkedin.com/in/rajesh-kumar-cse'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-8">
        <FacultyProfile faculty={facultyData} />
      </div>
      <Footer />
    </div>
  );
};

export default FacultyProfilePage;
