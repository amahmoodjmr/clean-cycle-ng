
import React from 'react';
import { Trash2, MapPin, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <Trash2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CleanCycle</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing waste management across Nigeria. Connecting communities with verified collectors for a cleaner, more sustainable future.
            </p>
            <div className="text-sm text-gray-400">
              <p>Made with 💚 for Nigeria</p>
              <p className="mt-1">Supporting English & Hausa languages</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/schedule" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Pickup</span>
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Track Pickup</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">Report Issue</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors duration-200">Feedback</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CleanCycle Nigeria. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
