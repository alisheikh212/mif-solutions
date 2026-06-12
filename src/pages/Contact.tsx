import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Request a quote, schedule a consultation, or get technical support.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Corporate Headquarters</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Address</h4>
                    <p className="text-slate-600 mt-1">123 Tech Boulevard, Business District,<br/>Karachi, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-slate-600 mt-1">+92 123 456 7890<br/>+92 987 654 3210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-slate-600 mt-1">info@mifsolutions.com<br/>sales@mifsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-xl shadow-sm text-white">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 mr-3 text-blue-200" />
                <h3 className="text-xl font-bold">Business Hours</h3>
              </div>
              <ul className="space-y-2 text-blue-50">
                <li className="flex justify-between border-b border-blue-500/50 pb-2">
                  <span>Monday - Friday</span>
                  <span>09:00 AM - 06:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-blue-500/50 py-2">
                  <span>Saturday</span>
                  <span>10:00 AM - 02:00 PM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-500/50">
                <p className="text-sm text-blue-100">
                  <strong className="text-white">Note:</strong> SLA contract clients receive 24/7 technical support via their dedicated hotlines.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Send a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for reaching out to MIF Solutions. A representative will contact you within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                      <input type="text" id="first-name" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                      <input type="text" id="last-name" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input type="email" id="email" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input type="tel" id="phone" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="+92 XXX XXXXXXX" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company / Institution</label>
                    <input type="text" id="company" required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Bank Name or Biz Ltd." />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-1">I am interested in</label>
                    <select id="interest" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                      <option>Requesting a Quote for Equipment</option>
                      <option>Technical Support or Repairs</option>
                      <option>SLA / Maintenance Contracts</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message Details</label>
                    <textarea id="message" rows={5} required className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow resize-none" placeholder="Please describe your requirements..."></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 flex justify-center items-center"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
