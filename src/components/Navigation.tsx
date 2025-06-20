
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, User, Calendar, Trash2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: MapPin },
    { name: 'Schedule Pickup', href: '/schedule', icon: Calendar },
    { name: 'Track Pickup', href: '/track', icon: Trash2 },
    { name: 'Login', href: '/login', icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <Trash2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">CleanCycle</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="gradient-green hover:shadow-lg transition-all duration-200">
              <Link to="/login">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <Link to="/" className="flex items-center space-x-2 mb-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <Trash2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-primary">CleanCycle</span>
                  </Link>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-primary transition-colors duration-200 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  
                  <Button asChild className="gradient-green hover:shadow-lg transition-all duration-200 mt-4">
                    <Link to="/login" onClick={() => setIsOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
