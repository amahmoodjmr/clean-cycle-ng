import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Trash2, Clock, User, Phone, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ChatBot from '@/components/ChatBot';
import { useToast } from '@/hooks/use-toast';
const Schedule = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    email: '',
    phone: '',
    // Pickup Details
    wasteType: '',
    pickupDate: '',
    pickupTime: '',
    frequency: '',
    address: '',
    specialInstructions: ''
  });
  const wasteTypes = [{
    value: 'plastic',
    label: 'Plastic Waste',
    icon: '♻️'
  }, {
    value: 'organic',
    label: 'Organic Waste',
    icon: '🍃'
  }, {
    value: 'ewaste',
    label: 'E-Waste',
    icon: '💻'
  }, {
    value: 'paper',
    label: 'Paper & Cardboard',
    icon: '📄'
  }, {
    value: 'glass',
    label: 'Glass',
    icon: '🍾'
  }, {
    value: 'metal',
    label: 'Metal',
    icon: '🔩'
  }, {
    value: 'mixed',
    label: 'Mixed Waste',
    icon: '🗑️'
  }];
  const timeSlots = ['8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM'];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pickup scheduled:', formData);

    // Show success message
    toast({
      title: "Pickup Scheduled Successfully!",
      description: "We'll contact you within 24 hours to confirm your pickup details."
    });

    // TODO: Save to database when Supabase is connected
    // For now, we'll just show the success message
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSelectChange = (field: string) => (value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Waste Pickup</h1>
            <p className="text-gray-600">Book a convenient time for your waste collection - no account required!</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Pickup Request</span>
              </CardTitle>
              <CardDescription>
                Fill in your details below to schedule your waste pickup. We'll contact you to confirm.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <User className="w-5 h-5 text-primary" />
                    <span>Contact Information</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required className="h-11" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <Input id="phone" name="phone" type="tel" placeholder="+234 XXX XXX XXXX" value={formData.phone} onChange={handleChange} required className="h-11 pl-10" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required className="h-11 pl-10" />
                    </div>
                  </div>
                </div>

                {/* Pickup Details Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Trash2 className="w-5 h-5 text-primary" />
                    <span>Pickup Details</span>
                  </h3>

                  {/* Waste Type Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="wasteType">Waste Type</Label>
                    <Select onValueChange={handleSelectChange('wasteType')} required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select waste type" />
                      </SelectTrigger>
                      <SelectContent>
                        {wasteTypes.map(type => <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center space-x-2">
                              <span>{type.icon}</span>
                              <span>{type.label}</span>
                            </div>
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <Input id="pickupDate" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} required className="h-11" min={new Date().toISOString().split('T')[0]} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickupTime">Preferred Time</Label>
                      <Select onValueChange={handleSelectChange('pickupTime')} required>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(slot => <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="space-y-2">
                    <Label htmlFor="frequency">Pickup Frequency</Label>
                    <Select onValueChange={handleSelectChange('frequency')} required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="once">One-time pickup</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Address */}
                  <div className="space-y-2">
                    <Label htmlFor="address">Pickup Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <Input id="address" name="address" type="text" placeholder="Enter your full address" value={formData.address} onChange={handleChange} required className="h-11 pl-10" />
                    </div>
                    <p className="text-sm text-gray-500">
                      Include landmarks or specific directions to help our collectors find you
                    </p>
                  </div>

                  {/* Special Instructions */}
                  <div className="space-y-2">
                    <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                    <Textarea id="specialInstructions" name="specialInstructions" placeholder="Any special instructions for the collector..." value={formData.specialInstructions} onChange={handleChange} rows={3} />
                  </div>
                </div>

                {/* Estimated Cost */}
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Estimated Cost</h3>
                      <p className="text-sm text-gray-600">Based on waste type and location</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₦800</div>
                      <div className="text-sm text-gray-600">per pickup</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full h-12 gradient-green hover:shadow-lg transition-all duration-200 text-lg">
                  Schedule Pickup
                </Button>

                {/* Registration Prompt */}
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    Want to track your pickups and manage your schedule easily?
                  </p>
                  <Link to="/register" className="text-primary hover:text-primary-700 font-medium text-sm transition-colors duration-200">
                    Create a free account →
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Response</h3>
                    <p className="text-sm text-gray-600">Pickup within 24-48 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Trash2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Proper Disposal</h3>
                    <p className="text-sm text-gray-600">Eco-friendly recycling guaranteed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot />
    </div>;
};
export default Schedule;