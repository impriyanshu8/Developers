import React from 'react';
import Header from '@/components/Header';
import Placements from '@/components/Placements';
import Footer from '@/components/Footer';

const PlacementsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Placements />
      <Footer />
    </div>
  );
};

export default PlacementsPage;