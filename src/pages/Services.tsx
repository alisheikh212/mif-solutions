import { Link } from 'react-router-dom';
import { PenTool, Target, RefreshCw, BarChart, ShieldCheck, Clock } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-blue-600" />,
      title: 'Installation & Commissioning',
      description: 'Professional setup of complex banking equipment. Our certified technicians ensure hardware is fully integrated with your existing infrastructure and properly calibrated according to manufacturer specifications.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Preventive Maintenance',
      description: 'Scheduled servicing programs designed to minimize downtime. We clean optical sensors, check mechanical wear, and update firmware to ensure continuous operational accuracy.'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
      title: 'Repairs & Spare Parts',
      description: 'Rapid response repair services supported by an extensive local inventory of genuine OEM spare parts to get your critical systems back online quickly.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
      title: 'Security Audits & Calibration',
      description: 'Periodic testing of counterfeit detection systems using standard test matrices to ensure compliance with central bank regulations for suspect note identification.'
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-600" />,
      title: 'Training & Certification',
      description: 'Comprehensive operator and supervisor training programs to maximize machine efficiency, reduce jam rates, and ensure proper daily maintenance procedures.'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: '24/7 SLA Support',
      description: 'Customizable Service Level Agreements offering guaranteed response times for critical financial operations that cannot afford hardware failure.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop" alt="Engineering" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">Expert Services & Support</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Beyond supplying premium hardware, MIF Solutions provides the technical backbone to ensure your operations run flawlessly, day in and day out.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SLA CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Protect Your Investment with an SLA</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Minimize operational risk with our comprehensive Service Level Agreements. Get priority response times, discounted parts, and scheduled preventive maintenance.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-sm">
              Discuss Support Options
            </Link>
          </div>
          {/* Decorative background elements can go here */}
        </div>
      </div>
    </div>
  );
}
