
import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-salon text-white p-2 rounded-full">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-salon">Glow Salon ✨</span>
            </div>
            <p className="text-muted-foreground">
              Your beauty destination for all things glamorous! 💄✨
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-salon hover:text-salon-dark transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-salon hover:text-salon-dark transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-salon hover:text-salon-dark transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services 💅</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-salon transition-colors">Hair Styling 💁‍♀️</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Nail Art 🎨</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Facials 🌸</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Massage 💆‍♀️</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Makeup 💄</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links 🔗</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-salon transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-salon transition-colors">Gift Cards 🎁</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us 📞</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-salon" />
                <span>(555) 123-GLOW</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-salon" />
                <span>hello@glowsalon.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-salon" />
                <span>123 Beauty St, Glamour City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Glow Salon. Made with 💖 for beautiful people everywhere!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
