
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 💌",
      description: "Thanks for reaching out! We'll get back to you soon ✨",
    });
    console.log('Contact form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch <span className="text-salon">💬</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to learn more? We'd love to chat with you! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-salon mb-6">Let's Connect! ✨</h3>
              <p className="text-muted-foreground mb-8">
                Ready to transform your look? Drop us a line and let's make magic happen together! 💫
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-salon/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-salon" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visit Our Salon 🏢</h4>
                  <p className="text-muted-foreground">123 Beauty Street<br />Glamour City, GC 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-salon/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-salon" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call Us 📞</h4>
                  <p className="text-muted-foreground">(555) 123-GLOW<br />Available 24/7 for bookings</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-salon/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-salon" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email Us 💌</h4>
                  <p className="text-muted-foreground">hello@glowsalon.com<br />We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-salon/10 p-3 rounded-full">
                  <Clock className="w-5 h-5 text-salon" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Opening Hours ⏰</h4>
                  <div className="text-muted-foreground">
                    <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-salon/20 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-salon flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                Send Us a Message 💭
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible! ✨
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Your Name 👋</Label>
                  <Input
                    id="contact-name"
                    placeholder="What should we call you?"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address 📧</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject">Subject 📝</Label>
                  <Input
                    id="contact-subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message 💌</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help make you look amazing! ✨"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-salon hover:bg-salon-dark text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message 🚀
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
