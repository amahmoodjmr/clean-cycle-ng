
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Check, Trash2, User, Calendar } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Track = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  // Sample tracking data
  const sampleTrackingData = {
    id: 'CP-2024-001',
    status: 'en-route',
    wasteType: 'Plastic Waste',
    scheduledDate: '2024-01-15',
    scheduledTime: '10:00 AM - 12:00 PM',
    address: '123 Victoria Island, Lagos',
    collector: {
      name: 'Adamu Ibrahim',
      phone: '+234-801-234-5678',
      rating: 4.8
    },
    timeline: [
      {
        status: 'scheduled',
        title: 'Pickup Scheduled',
        description: 'Your pickup has been scheduled',
        timestamp: '2024-01-14 2:30 PM',
        completed: true
      },
      {
        status: 'assigned',
        title: 'Collector Assigned',
        description: 'Adamu Ibrahim has been assigned to your pickup',
        timestamp: '2024-01-14 6:45 PM',
        completed: true
      },
      {
        status: 'en-route',
        title: 'Collector En Route',
        description: 'Your collector is on the way to your location',
        timestamp: '2024-01-15 9:30 AM',
        completed: true,
        active: true
      },
      {
        status: 'picked-up',
        title: 'Waste Picked Up',
        description: 'Your waste has been successfully collected',
        timestamp: null,
        completed: false
      },
      {
        status: 'recycled',
        title: 'Recycled',
        description: 'Your waste has been processed and recycled',
        timestamp: null,
        completed: false
      }
    ]
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    if (trackingId.toLowerCase().includes('cp-2024') || trackingId === 'demo') {
      setTrackingData(sampleTrackingData);
    } else {
      setTrackingData(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'assigned':
        return 'bg-yellow-100 text-yellow-800';
      case 'en-route':
        return 'bg-orange-100 text-orange-800';
      case 'picked-up':
        return 'bg-purple-100 text-purple-800';
      case 'recycled':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Pickup</h1>
            <p className="text-gray-600">Enter your tracking ID to see real-time status updates</p>
          </div>

          {/* Tracking Form */}
          <Card className="shadow-xl border-0 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Track Pickup</span>
              </CardTitle>
              <CardDescription>
                Enter your pickup ID or reference number
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="trackingId" className="sr-only">Tracking ID</Label>
                  <Input
                    id="trackingId"
                    type="text"
                    placeholder="Enter tracking ID (e.g., CP-2024-001 or 'demo')"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="h-12 px-8 gradient-green hover:shadow-lg transition-all duration-200"
                >
                  Track Pickup
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-6">
              {/* Pickup Info */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">Pickup #{trackingData.id}</CardTitle>
                      <CardDescription className="flex items-center space-x-2 mt-1">
                        <Trash2 className="w-4 h-4" />
                        <span>{trackingData.wasteType}</span>
                      </CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(trackingData.status)} text-sm px-4 py-2`}>
                      {trackingData.status.replace('-', ' ').toUpperCase()}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Scheduled Date</p>
                          <p className="text-gray-600">{trackingData.scheduledDate}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Time Slot</p>
                          <p className="text-gray-600">{trackingData.scheduledTime}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Pickup Address</p>
                          <p className="text-gray-600">{trackingData.address}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-900 mb-2">Assigned Collector</h3>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{trackingData.collector.name}</p>
                            <p className="text-sm text-gray-600">{trackingData.collector.phone}</p>
                            <p className="text-sm text-primary">⭐ {trackingData.collector.rating}/5.0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle>Pickup Timeline</CardTitle>
                  <CardDescription>
                    Track the progress of your waste pickup
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {trackingData.timeline.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.completed 
                              ? item.active 
                                ? 'bg-primary text-white animate-pulse' 
                                : 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            {item.completed ? (
                              <Check className="w-5 h-5" />
                            ) : (
                              <div className="w-3 h-3 bg-current rounded-full"></div>
                            )}
                          </div>
                          {index < trackingData.timeline.length - 1 && (
                            <div className={`w-px h-12 ${
                              item.completed ? 'bg-primary' : 'bg-gray-200'
                            }`}></div>
                          )}
                        </div>
                        
                        <div className="flex-1 pb-6">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-semibold ${
                              item.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {item.title}
                            </h3>
                            {item.timestamp && (
                              <span className="text-sm text-gray-500">{item.timestamp}</span>
                            )}
                          </div>
                          <p className={`mt-1 ${
                            item.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-green hover:shadow-lg transition-all duration-200">
                  Contact Collector
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Report Issue
                </Button>
                <Button variant="outline">
                  Schedule Another Pickup
                </Button>
              </div>
            </div>
          )}

          {trackingData === null && trackingId && (
            <Card className="shadow-lg border-0">
              <CardContent className="text-center py-12">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pickup Not Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find a pickup with the ID "{trackingId}". Please check your tracking ID and try again.
                </p>
                <Button variant="outline" onClick={() => setTrackingId('')}>
                  Try Again
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Track;
