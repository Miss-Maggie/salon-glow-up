
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: "Hair Styling",
      emoji: "💁‍♀️",
      description: "From cuts to colors, we create the perfect look for you",
      price: "Starting at $80",
      features: ["Consultation", "Wash & Style", "Professional Products"]
    },
    {
      title: "Nail Art",
      emoji: "💅",
      description: "Beautiful nail designs that make a statement",
      price: "Starting at $45",
      features: ["Manicure", "Custom Design", "Long-lasting Polish"]
    },
    {
      title: "Facial Treatments",
      emoji: "🌸",
      description: "Rejuvenate your skin with our luxury facial treatments",
      price: "Starting at $120",
      features: ["Deep Cleansing", "Anti-aging", "Hydrating Masks"]
    },
    {
      title: "Relaxing Massage",
      emoji: "💆‍♀️",
      description: "Unwind with our therapeutic massage services",
      price: "Starting at $90",
      features: ["Swedish Massage", "Hot Stone", "Aromatherapy"]
    },
    {
      title: "Makeup Application",
      emoji: "💄",
      description: "Professional makeup for any occasion",
      price: "Starting at $75",
      features: ["Special Events", "Bridal", "Photo Shoots"]
    },
    {
      title: "Eyebrow Shaping",
      emoji: "👁️",
      description: "Perfect your brows with our expert shaping",
      price: "Starting at $35",
      features: ["Threading", "Waxing", "Tinting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services <span className="text-salon">✨</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of beauty and wellness services designed to make you feel fabulous! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-salon/20"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{service.emoji}</div>
                <CardTitle className="text-xl text-salon">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-salon mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-salon hover:bg-salon-dark text-white transition-all duration-300"
                >
                  Book Now 📅
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
