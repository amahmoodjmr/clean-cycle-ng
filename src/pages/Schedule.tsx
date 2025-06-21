import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Trash2, Clock, ArrowUp, User, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';

const Schedule = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    wasteType: '',
    pickupDate: '',
    pickupTime: '',
    frequency: '',
    address: '',
    specialInstructions: ''
  });

  // Check authentication status - TODO: Replace with actual authentication check
  useEffect(() => {
    const checkAuth = () => {
      // For now, we'll simulate checking authentication
      // This will be replaced with actual Supabase authentication
      const user = localStorage.getItem('user'); // Temporary check
      setIsAuthenticated(!!user);
    };
    
    checkAuth();
  }, []);

  // If not authenticated, show sign up/login prompt with benefits
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <Navigation />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Waste Pickup</h1>
              <p className="text-gray-600">Join CleanCycle to book convenient waste collection services</p>
            </div>

            <Card className="shadow-xl border-0 mb-8">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Get Started Today</CardTitle>
                <CardDescription className="text-gray-600">
                  Create your account to access our waste pickup scheduling service
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">What you'll get:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Schedule pickups at your convenience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Track your pickup status in real-time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Choose from verified waste collectors</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Set recurring pickups for convenience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700">Contribute to a cleaner Nigeria</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full h-12 gradient-green hover:shadow-lg transition-all duration-200 text-lg">
                    <Link to="/register">Create Your Account</Link>
                  </Button>
                  
                  <Button asChild variant="outline" className="w-full h-12 text-lg">
                    <Link to="/login">Already Have an Account? Sign In</Link>
                  </Button>
                </div>
                
                <div className="text-center text-sm text-gray-500 pt-4">
                  <p>Quick signup • No credit card required • Start scheduling immediately</p>
                </div>
              </CardContent>
            </Card>

            {/* Preview of scheduling form */}
            <Card className="shadow-lg border-0 opacity-75">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-500">
                  <User className="w-5 h-5" />
                  <span>Preview: Scheduling Form</span>
                </CardTitle>
                <CardDescription>
                  This is what you'll see after signing up
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-400">Waste Type</Label>
                    <div className="h-11 bg-gray-100 rounded-md flex items-center px-3 text-gray-400">
                      Select waste type...
                    </div>
                  </div>
                  <div>
                    <Label className="text-gray-400">Pickup Date</Label>
                    <div className="h-11 bg-gray-100 rounded-md flex items-center px-3 text-gray-400">
                      Choose date...
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="text-gray-400">Address</Label>
                  <div className="h-11 bg-gray-100 rounded-md flex items-center px-3 text-gray-400">
                    Enter your address...
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <Link 
                to="/" 
                className="text-primary hover:text-primary-700 transition-colors duration-200 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const wasteTypes = [
    { value: 'plastic', label: 'Plastic Waste', icon: '♻️' },
    { value: 'organic', label: 'Organic Waste', icon: '🍃' },
    { value: 'ewaste', label: 'E-Waste', icon: '💻' },
    { value: 'paper', label: 'Paper & Cardboard', icon: '📄' },
    { value: 'glass', label: 'Glass', icon: '🍾' },
    { value: 'metal', label: 'Metal', icon: '🔩' },
    { value: 'mixed', label: 'Mixed Waste', icon: '🗑️' }
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pickup scheduled:', formData);
    // TODO: Implement scheduling logic with Supabase
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <Navigation />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Schedule Waste Pickup</h1>
            <p className="text-gray-600">Book a convenient time for your waste collection</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Pickup Details</span>
              </CardTitle>
              <CardDescription>
                Fill in the details below to schedule your waste pickup
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Waste Type Selection */}
                <div className="space-y-2">
                  <Label htmlFor="wasteType">Waste Type</Label>
                  <Select onValueChange={handleSelectChange('wasteType')} required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select waste type" />
                    </SelectTrigger>
                    <SelectContent>
                      {wasteTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center space-x-2">
                            <span>{type.icon}</span>
                            <span>{type.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickupDate">Pickup Date</Label>
                    <Input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      required
                      className="h-11"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pickupTime">Preferred Time</Label>
                    <Select onValueChange={handleSelectChange('pickupTime')} required>
                      <SelectTrigger className="h-11">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
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
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter your full address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="h-11 pl-10"
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Include landmarks or specific directions to help our collectors find you
                  </p>
                </div>

                {/* Special Instructions */}
                <div className="space-y-2">
                  <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                  <Textarea
                    id="specialInstructions"
                    name="specialInstructions"
                    placeholder="Any special instructions for the collector..."
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                {/* Estimated Cost */}
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Estimated Cost</h3>
                      <p className="text-sm text-gray-600">Based on waste type and location</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">₦2,500</div>
                      <div className="text-sm text-gray-600">per pickup</div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full h-12 gradient-green hover:shadow-lg transition-all duration-200 text-lg"
                >
                  Schedule Pickup
                </Button>
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
    </div>
  );
};

export default Schedule;
