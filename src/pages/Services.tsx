
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import BackToHomeButton from '@/components/BackToHomeButton';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <BackToHomeButton />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
