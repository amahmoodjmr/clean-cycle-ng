
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Trash2, User, Clock, Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Book waste pickups at your convenience with flexible timing options and recurring schedules.',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'Pin your exact location or use our smart address autocomplete for accurate pickups.',
      color: 'bg-accent-100 text-accent'
    },
    {
      icon: Trash2,
      title: 'Waste Sorting',
      description: 'Specify waste types - plastic, organic, e-waste - for proper recycling and processing.',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: User,
      title: 'Verified Collectors',
      description: 'Connect with trusted, background-checked collectors in your area for reliable service.',
      color: 'bg-accent-100 text-accent'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get live status updates from scheduled to picked up to recycled with notifications.',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: Check,
      title: 'Impact Tracking',
      description: 'Monitor your environmental contribution with detailed recycling statistics and CO2 savings.',
      color: 'bg-accent-100 text-accent'
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-primary">CleanCycle</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make waste management simple, efficient, and impactful for everyone in Nigeria
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to make a difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of Nigerians who are already contributing to a cleaner environment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Schedule Your First Pickup
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
