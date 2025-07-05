
import React from 'react';
import Header from '@/components/Header';
import Students from '@/components/Students';
import Footer from '@/components/Footer';

const StudentsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Students />
      <Footer />
    </div>
  );
};

export default StudentsPage;
