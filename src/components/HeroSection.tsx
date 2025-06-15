
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl animate-float">✨</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>💅</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>💄</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute top-60 left-1/3 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>💆‍♀️</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-salon/10 text-salon text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Welcome to Your Beauty Sanctuary ✨
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-salon to-salon-light bg-clip-text text-transparent">
              Glow Up
            </span>
            <br />
            <span className="text-foreground">Your Beauty Journey 💫</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform yourself at our luxury salon. From stunning hair makeovers to relaxing spa treatments, 
            we make every visit a magical experience! 🌟
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-salon hover:bg-salon-dark text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => scrollToSection('booking')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Appointment 💅
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-salon text-salon hover:bg-salon hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={() => scrollToSection('services')}
            >
              View Our Services ✨
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-salon mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Clients 😊</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-salon mr-2">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="text-muted-foreground">Rating ⭐</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-salon mb-2">15+</div>
              <div className="text-muted-foreground">Services 💄</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
