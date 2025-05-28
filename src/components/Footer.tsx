
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-xl font-semibold">CCEA</span>
                <p className="text-sm text-gray-300">Civic and Citizenship Education Alliance</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Join a global network of K-12 schools, universities, and organizations committed to 
              transforming civic and citizenship education across diverse local and national contexts.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <span>Global Network</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@ccea.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/membership" className="text-gray-300 hover:text-white transition-colors">Membership</Link></li>
              <li><Link to="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/members" className="text-gray-300 hover:text-white transition-colors">Members</Link></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Organization</h3>
            <ul className="space-y-2">
              <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/governance" className="text-gray-300 hover:text-white transition-colors">Governance</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/impressum" className="text-gray-300 hover:text-white transition-colors">Impressum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Civic and Citizenship Education Alliance. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built on a Foundation of Global Expertise
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
