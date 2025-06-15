
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Hair & Makeup",
      rating: 5,
      text: "Absolutely amazing experience! The staff made me feel like a princess. My hair has never looked better! 💇‍♀️✨",
      emoji: "🌟"
    },
    {
      name: "Emma Davis",
      service: "Spa Treatment",
      rating: 5,
      text: "The most relaxing spa day ever! I felt completely rejuvenated. The ambiance is perfect and the treatments are divine! 🧘‍♀️",
      emoji: "💆‍♀️"
    },
    {
      name: "Jessica Wilson",
      service: "Nail Art",
      rating: 5,
      text: "Their nail art is incredible! So creative and detailed. I always get compliments on my nails after visiting here! 💅",
      emoji: "🎨"
    },
    {
      name: "Maria Garcia",
      service: "Facial Treatment",
      rating: 5,
      text: "My skin is glowing! The facial was so relaxing and the results are amazing. Highly recommend their skincare services! ✨",
      emoji: "🌸"
    },
    {
      name: "Ashley Brown",
      service: "Bridal Package",
      rating: 5,
      text: "They made my wedding day perfect! From hair to makeup to nails, everything was flawless. Thank you for making me feel beautiful! 👰‍♀️",
      emoji: "💐"
    },
    {
      name: "Lisa Chen",
      service: "Color & Cut",
      rating: 5,
      text: "Love my new color! The stylists really listen and know exactly what works best. I've found my forever salon! 💫",
      emoji: "🎀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-salon/10 text-salon text-sm font-medium">
              💕 What Our Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-salon to-salon-light bg-clip-text text-transparent">
              Beautiful Reviews
            </span>
            <span className="text-foreground"> ✨</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our amazing clients who've experienced the magic! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-salon/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-2xl">{testimonial.emoji}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-salon">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-salon/10 text-salon">
            <span className="text-lg font-medium">Join our 1000+ happy clients! 🎉</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
