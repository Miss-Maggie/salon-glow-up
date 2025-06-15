
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    'Hair Styling 💁‍♀️',
    'Nail Art 💅',
    'Facial Treatment 🌸',
    'Massage 💆‍♀️',
    'Makeup Application 💄',
    'Eyebrow Shaping 👁️'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted! ✨",
      description: "We'll contact you shortly to confirm your appointment 💅",
    });
    console.log('Booking submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Appointment <span className="text-salon">💅</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to glow? Schedule your beauty session with us today! ✨
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-2 hover:border-salon/20 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-salon flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-2" />
                Schedule Your Glow-Up ✨
              </CardTitle>
              <CardDescription>
                Fill in your details and we'll make you look absolutely stunning! 🌟
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-salon" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your gorgeous name ✨"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-salon" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@beautiful.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-salon" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-GLOW"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center">
                    Service 💅
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="focus:ring-salon focus:border-salon">
                      <SelectValue placeholder="Choose your beauty treatment ✨" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-salon" />
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-salon" />
                      Preferred Time
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="focus:ring-salon focus:border-salon">
                        <SelectValue placeholder="Select time ⏰" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests 💭</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any special requests or allergies? We want to make this perfect for you! 🌟"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-salon hover:bg-salon-dark text-white py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Book My Glow-Up Session ✨
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
