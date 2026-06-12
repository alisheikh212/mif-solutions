import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '../Breadcrumbs';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 overflow-x-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-blue-600 focus:font-bold">
        Skip to main content
      </a>
      <Header />
      <Breadcrumbs />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Quick Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-end gap-3">
        <div className="flex flex-col gap-3 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
          <a href="tel:+921234567890" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg border border-slate-200 px-4 py-3 rounded-full text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all min-h-[48px]">
            <Phone className="w-4 h-4" /> Call
          </a>
          <a href="#" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg border border-slate-200 px-4 py-3 rounded-full text-sm font-semibold text-slate-700 hover:text-green-600 transition-all min-h-[48px]">
            <MessageSquare className="w-4 h-4 text-green-600" /> WhatsApp Number Placeholder
          </a>
          <a href="mailto:info@mifsolutions.com" className="flex items-center gap-2 bg-white shadow-md hover:shadow-lg border border-slate-200 px-4 py-3 rounded-full text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all min-h-[48px]">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
        <Link to="/contact" className="bg-blue-600 shadow-lg hover:shadow-xl text-white p-4 rounded-full flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all text-sm font-bold min-h-[48px] min-w-[48px]">
          <span className="hidden md:inline mr-2">Request Quote</span>
          <MessageSquare className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
