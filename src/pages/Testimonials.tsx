
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import BackToHomeButton from '@/components/BackToHomeButton';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <BackToHomeButton />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
