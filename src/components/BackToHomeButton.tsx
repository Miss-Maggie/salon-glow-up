
import React from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackToHomeButton = () => {
  return (
    <div className="fixed top-20 left-4 z-40">
      <Link to="/">
        <Button 
          className="bg-salon hover:bg-salon-dark text-white shadow-lg"
          size="sm"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home 🏠
        </Button>
      </Link>
    </div>
  );
};

export default BackToHomeButton;
