
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingSection from '@/components/BookingSection';
import BackToHomeButton from '@/components/BackToHomeButton';

const Booking = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <BackToHomeButton />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
