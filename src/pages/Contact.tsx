
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BackToHomeButton from '@/components/BackToHomeButton';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <BackToHomeButton />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
