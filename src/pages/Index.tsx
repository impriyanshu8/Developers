import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomepageContent from '@/components/HomepageContent';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />     
      <Hero />
      <HomepageContent />
      <Footer />
    </div>
  );
};

export default Index;
