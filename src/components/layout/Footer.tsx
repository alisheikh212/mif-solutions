import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                MIF
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Solutions</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              MIF Solutions Pvt. Ltd. is a leading B2B technology distributor and service provider in Pakistan, specializing in banking equipment and cash handling machines.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-tight">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Banking Equipment</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Cash Handling Machines</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Fake Note Detectors</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">UPS Systems & Dry Batteries</Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors text-sm">Thermal & Label Printers</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-tight">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Suite 14/1-2-3, W.B.C., DHA-Phase 1, Karachi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span className="text-slate-400 text-sm">+92-21-35894466-7 & 70-2</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                <span className="text-slate-400 text-sm">info@mifsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MIF Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
