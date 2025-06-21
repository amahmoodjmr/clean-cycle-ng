import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Calendar, Trash2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-40"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-accent-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-25 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Clean Nigeria,{' '}
                <span className="gradient-green bg-clip-text text-transparent">
                  One Pickup
                </span>{' '}
                at a Time
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Revolutionary waste management platform connecting households, businesses, and verified collectors across Nigeria. Schedule pickups, track progress, and contribute to a cleaner environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-green hover:shadow-xl transition-all duration-300 text-lg px-8 py-6">
                <Link to="/register">Start Cleaning Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg px-8 py-6">
                <Link to="/schedule">Schedule Pickup</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Households Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Verified Collectors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.5T</div>
                <div className="text-sm text-gray-600">Waste Recycled</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 animate-fade-in delay-300">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Scheduling</h3>
                    <p className="text-gray-600 text-sm">Choose your preferred pickup time and frequency</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 transform translate-x-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Tracking</h3>
                    <p className="text-gray-600 text-sm">Monitor your pickup status from start to finish</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Trash2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Collectors</h3>
                    <p className="text-gray-600 text-sm">Trusted professionals in your neighborhood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>;
};
export default Hero;