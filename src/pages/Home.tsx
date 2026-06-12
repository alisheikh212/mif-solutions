import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Zap, Settings, Building2,
  Briefcase, Truck, Landmark, Store, FileText, Battery,
  Package, Printer, Download, ChevronDown, Wrench,
  CheckCircle2, ChevronRight, Activity, Cpu, Headset,
  Search, Shield, Check, Minus, TrendingUp, CheckCircle, FileSearch
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SplineScene } from '@/components/ui/splite';
import { Spotlight } from '@/components/ui/spotlight';

const trustStrip = [
  { icon: <ShieldCheck className="h-5 w-5" />, label: "Authorized Distributor Network" },
  { icon: <Landmark className="h-5 w-5" />, label: "Banking Equipment Specialists" },
  { icon: <Battery className="h-5 w-5" />, label: "UPS & Battery Solutions" },
  { icon: <Wrench className="h-5 w-5" />, label: "Installation & Commissioning" },
  { icon: <Headset className="h-5 w-5" />, label: "After-Sales Support" },
];

const audiences = [
  { icon: <Landmark className="h-8 w-8 text-blue-600" />, title: "Banks & Financial Institutions", desc: "Enterprise-grade sorters and counterfeit detection." },
  { icon: <Activity className="h-8 w-8 text-blue-600" />, title: "Exchange Companies", desc: "Fast and reliable multi-currency value counters." },
  { icon: <Store className="h-8 w-8 text-blue-600" />, title: "Retail & Cash-Heavy Businesses", desc: "Automated cash handling and point-of-sale peripherals." },
  { icon: <Truck className="h-8 w-8 text-blue-600" />, title: "Logistics & Parcel Operations", desc: "Smart parcel lockers and thermal label printers." },
  { icon: <Building2 className="h-8 w-8 text-blue-600" />, title: "Corporate Offices", desc: "Industrial UPS and reliable backup power solutions." },
  { icon: <Briefcase className="h-8 w-8 text-blue-600" />, title: "Government & Institutional Buyers", desc: "Compliant cash and infrastructure equipment." },
];

const coreSolutions = [
  {
    title: "Banking & Cash Handling Equipment",
    image: "https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=800&auto=format&fit=crop",
    features: ["Banknote Sorters (1+1, 2+1)", "Currency Binders", "Fake Note Detectors"],
    link: "/products?category=cash-handling"
  },
  {
    title: "UPS & Backup Power Solutions",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop",
    features: ["Industrial UPS Systems", "VRLA Dry Batteries", "Power Audits"],
    link: "/products?category=infrastructure"
  },
  {
    title: "Parcel Locker Solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a74?q=80&w=800&auto=format&fit=crop",
    features: ["Modular Smart Lockers", "Secure Access Systems", "Logistics Integration"],
    link: "/products?category=lockers"
  },
  {
    title: "Thermal & Label Printing",
    image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=800&auto=format&fit=crop",
    features: ["POS Receipt Printers", "Barcode Label Printers", "High-Volume Printing"],
    link: "/products?category=printers"
  }
];

const productCategories = [
  { id: 'cash', name: 'Cash Handling Equipment', desc: 'Precision enterprise machines for high-speed sorting, counting, and authenticating cash with zero error tolerance.', count: 24, products: ['Banknote Sorters', 'Money Counters', 'Fake Note Detectors'], useCases: ['Banking Operations', 'Exchange Companies', 'Retail Cash Handling'], icon: <Landmark className="w-5 h-5" /> },
  { id: 'power', name: 'UPS & Batteries', desc: 'Continuous power protection safeguarding critical business data centers and structural infrastructure.', count: 18, products: ['Online UPS', 'Line Interactive UPS', 'Dry Batteries'], useCases: ['Power Backup', 'Server Rooms', 'Corporate HQs'], icon: <Battery className="w-5 h-5" /> },
  { id: 'parcel', name: 'Parcel Lockers', desc: 'Smart logistics storage solutions offering automated 24/7 staging and secure API-driven retrieval.', count: 5, products: ['Indoor Lockers', 'Outdoor Lockers', 'Custom Solutions'], useCases: ['Logistics', 'Ecommerce', 'Corporate Mailrooms'], icon: <Package className="w-5 h-5" /> },
  { id: 'printers', name: 'Thermal & Label Printers', desc: 'High-yield durable hardware engineered for continuous receipt and barcode label deployment.', count: 12, products: ['Receipt Printers', 'Label Printers', 'Kiosk Printers'], useCases: ['Business Printing', 'Retail POS', 'Warehouse Management'], icon: <Printer className="w-5 h-5" /> },
];

const featuredProducts = [
  { name: 'BNE-S110 1+1 Pocket Banknote Sorter', cat: 'Cash Handling', specs: ['Dual CIS', 'Advanced Fitness Sorting'], img: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=600&auto=format&fit=crop' },
  { name: 'BNE-S210 2+1 Pocket Banknote Sorter', cat: 'Cash Handling', specs: ['High Capacity', 'Multi-Currency'], img: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=600&auto=format&fit=crop' },
  { name: 'GB 306 Currency Binder', cat: 'Banking Equipment', specs: ['Fully Automatic', 'Adjustable Temp'], img: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=600&auto=format&fit=crop' },
  { name: 'GB 208 Currency Binder', cat: 'Banking Equipment', specs: ['Compact Design', 'Fast Binding'], img: 'https://images.unsplash.com/photo-1611091565576-9d10e8d0229a?q=80&w=600&auto=format&fit=crop' },
  { name: 'GFC 170 Money Counter', cat: 'Cash Handling', specs: ['Heavy Duty', 'UV/MG Detection'], img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop' },
  { name: 'KZ 5100 Money Counter', cat: 'Cash Handling', specs: ['Value Counting', 'Touch Screen Interface'], img: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=600&auto=format&fit=crop' },
  { name: 'GUV 106L Fake Note Detector', cat: 'Banking Equipment', specs: ['Large Magnifier', 'UV/Watermark verification'], img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop' },
  { name: 'IR 210 Fake Note Detector', cat: 'Banking Equipment', specs: ['Infrared Camera', 'Crisp LCD display'], img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop' },
  { name: 'SNBC Parcel Locker', cat: 'Parcel Lockers', specs: ['Modular design', 'Secure API Access'], img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a74?q=80&w=600&auto=format&fit=crop' },
];

const serviceSteps = [
  { title: "Consultation", desc: "Understanding your operational volume and requirements." },
  { title: "Site / Power Survey", desc: "Assessing physical space and electrical infrastructure." },
  { title: "Product Recommendation", desc: "Providing tailored hardware and quotation options." },
  { title: "Installation & Commissioning", desc: "Deployment by certified on-site engineers." },
  { title: "Maintenance & Support", desc: "Ongoing SLA coverage, repairs, and preventive care." },
];

const differentiators = [
  { title: "Authorized Distributor Network", desc: "Direct partnerships with global manufacturers ensure genuine equipment and optimal pricing.", icon: <Shield className="h-6 w-6 text-blue-600" /> },
  { title: "Dedicated After-Sales Service", desc: "A robust technical team providing nationwide support, troubleshooting, and repairs.", icon: <Wrench className="h-6 w-6 text-blue-600" /> },
  { title: "Banking & Institutional Experience", desc: "Deep understanding of State Bank regulations and enterprise security requirements.", icon: <Landmark className="h-6 w-6 text-blue-600" /> },
  { title: "Installation & Commissioning", desc: "End-to-end setup handled completely by our engineers, ensuring smooth go-live.", icon: <Zap className="h-6 w-6 text-blue-600" /> },
  { title: "Maintenance Contracts", desc: "Customized SLAs to provide preventive care and rapid response times for mission-critical hardware.", icon: <Headset className="h-6 w-6 text-blue-600" /> },
];

const partners = ["SNBC", "EPC", "Techfine", "Vision", "GRACE", "IMMACULE", "KAIXUN / HONGRUN", "TRANSWORLD"];

const faqs = [
  { q: "Do you provide installation support?", a: "Yes, our certified technical team provides complete installation, configuration, and operator training for all supplied equipment across Pakistan." },
  { q: "Can MIF recommend the right machine for our business?", a: "Absolutely. We conduct thorough site surveys and assess your operational volume to recommend the exact machines that meet your technical and budget requirements." },
  { q: "Do you offer maintenance contracts?", a: "Yes, we offer comprehensive Service Level Agreements (SLAs) including preventive maintenance, rapid-response repairs, and genuine spare parts coverage to ensure minimal downtime." },
  { q: "Can we request product brochures?", a: "Detailed product brochures, specifications, and certifications are available upon request for our complete range of equipment." },
  { q: "Do you support banks and institutional buyers?", a: "We are a trusted supplier for major commercial banks, exchange companies, and government institutions, fully compliant with industry security guidelines." },
  { q: "Do you provide UPS and battery solutions?", a: "Yes, we specialize in industrial-grade UPS systems and dry batteries designed specifically to protect sensitive infrastructure." }
];

export function Home() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);
  const [activeFeaturedCategory, setActiveFeaturedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFeatured = activeFeaturedCategory === 'All' 
    ? featuredProducts 
    : featuredProducts.filter(p => p.cat === activeFeaturedCategory);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#060d1f] text-white overflow-hidden flex items-center pt-16">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(37,99,235,0.18),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_80%,rgba(30,58,138,0.15),transparent)]"></div>
        </div>

        {/* Spotlight sweep */}
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(96,165,250,0.25)" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left – text content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4" /> Trusted B2B Technology Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Banking, Cash Handling & Power Solutions for Pakistani Businesses
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                Empowering financial institutions and corporate enterprises with specialized equipment, ensuring accuracy, security, and continuous operational uptime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/products"
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors inline-flex items-center justify-center"
                >
                  View Product Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right – interactive 3D robot */}
            <div className="hidden lg:flex relative h-full w-full items-end justify-center min-h-[600px]">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-[600px] translate-y-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-6 md:py-8">
            {trustStrip.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 justify-center lg:justify-start">
                <div className="text-blue-600 flex-shrink-0">{item.icon}</div>
                <span className="text-xs sm:text-sm font-medium leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Built for Cash-Critical Operations */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Enterprise Reliability</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Built for businesses where accuracy, uptime, and reliability matter.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From high-speed cash sorting to uninterrupted backup power, MIF Solutions helps organizations reduce manual workload, tighten operational control, and keep critical hardware running 24/7.
              </p>
              <Link to="/about" className="inline-flex flex-col font-semibold text-blue-600 hover:text-blue-700 group">
                <span className="flex items-center text-lg">
                  Learn about our company <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="h-0.5 w-12 bg-blue-600 mt-1 transition-all group-hover:w-full"></span>
              </Link>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Faster Cash Handling", desc: "High-volume sorting and counting with zero margin for error.", icon: <Activity className="text-emerald-500 h-6 w-6" />, bg: "bg-emerald-50" },
                { title: "Better Note Verification", desc: "Advanced multi-sensor authentication defeating sophisticated counterfeits.", icon: <Search className="text-blue-500 h-6 w-6" />, bg: "bg-blue-50" },
                { title: "Reliable Backup Power", desc: "Industrial UPS infrastructure preventing data loss and hardware damage.", icon: <Zap className="text-amber-500 h-6 w-6" />, bg: "bg-amber-50" }
              ].map((card, i) => (
                <div key={i} className="flex bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 mr-6", card.bg)}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                    <p className="text-slate-600">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Who We Serve */}
      <section 
        className="py-24 bg-slate-50/50 border-t border-slate-200 relative overflow-hidden group/section"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }}
      >
        {/* Base Blueprint/Tech grid background - more visible */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)] opacity-40 pointer-events-none"></div>
        
        {/* Interactive Hover Grid Glow that follows mouse */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-0 group-hover/section:opacity-60 transition-opacity duration-700 pointer-events-none hidden sm:block"
          style={{ 
            maskImage: `radial-gradient(circle 350px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`,
            WebkitMaskImage: `radial-gradient(circle 350px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)`
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-lg text-slate-600">Delivering specialized infrastructure to sectors where precision and security are non-negotiable.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((aud, i) => (
              <div key={i} className="group bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {aud.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{aud.title}</h3>
                <p className="text-slate-600 leading-relaxed">{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Solutions */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Mastering Core Operations</h2>
              <p className="text-xl text-slate-400">Discover our primary technology verticals designed for corporate endurance.</p>
            </div>
            <Link to="/products" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-colors flex-shrink-0 inline-flex items-center self-start md:self-auto">
              View All Equipment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreSolutions.map((sol, i) => (
              <div key={i} className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex flex-col sm:flex-row group hover:border-blue-500/50 transition-colors">
                <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800 sm:hidden"></div>
                </div>
                <div className="sm:w-3/5 p-8 sm:p-10 flex flex-col justify-center relative z-10 -mt-10 sm:mt-0 bg-gradient-to-t from-slate-800 to-transparent sm:bg-none">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{sol.title}</h3>
                  <ul className="mb-8 space-y-3">
                    {sol.features.map((f, j) => (
                      <li key={j} className="flex items-center text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={sol.link} className="inline-flex items-center font-bold text-white group/btn mt-auto self-start">
                    Explore Solution <ChevronRight className="ml-1 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Product Categories (Interactive Tabs) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Soft abstract background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Navigate our comprehensive corporate inventory engineered for specific operational environments.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left Rail / Tabs */}
            <div className="lg:w-1/3 flex flex-col gap-3 relative">
              {/* Animated progress track background line */}
              <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-slate-200 -z-10"></div>
              
              {productCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "text-left p-5 rounded-2xl transition-all duration-500 relative overflow-hidden group flex items-center gap-5",
                      isActive 
                        ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-100 ring-1 ring-blue-500/20 translate-x-2 lg:translate-x-4" 
                        : "bg-transparent border border-transparent hover:bg-slate-100/50 hover:translate-x-1 lg:hover:translate-x-2"
                    )}
                  >
                    {/* Active side indicator */}
                    <div className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 rounded-r",
                      isActive ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" : "bg-transparent group-hover:bg-slate-300"
                    )}></div>

                    {/* Left Rail Icon Box */}
                    <div className={cn(
                      "w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 z-10 shrink-0",
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-110"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-800"
                    )}>
                      {cat.icon}
                    </div>

                    <div className="flex-1 z-10">
                      <h3 className={cn(
                        "text-lg font-bold transition-colors duration-300 mb-0.5", 
                        isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                      )}>
                        {cat.name}
                      </h3>
                      <p className={cn(
                        "text-xs font-medium uppercase tracking-wider transition-colors duration-300 flex items-center gap-1", 
                        isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-500"
                      )}>
                        {cat.count} Models <ChevronRight className={cn("w-3 h-3 transition-all", isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2")} />
                      </p>
                    </div>

                    {/* Subtle active background glow */}
                    {isActive && (
                      <div className="absolute top-0 right-0 p-8 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent opacity-50 mix-blend-multiply"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Dashboard Card */}
            <div className="lg:w-2/3 h-full min-h-[500px]">
              <AnimatePresence mode="wait">
                {productCategories.map((cat) => {
                  if (activeCategory !== cat.id) return null;
                  
                  return (
                    <motion.div 
                      key={cat.id} 
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-200 h-full flex flex-col justify-center overflow-hidden group/card"
                    >
                      {/* Tech Grid Background Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-50 transition-opacity duration-1000 group-hover/card:opacity-100"></div>
                      {/* Soft gradient spot */}
                      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-50 rounded-full blur-[80px] pointer-events-none mix-blend-multiply transition-transform duration-1000 group-hover/card:scale-110"></div>
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                          <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 border border-slate-700 rounded-full shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span className="text-white text-xs font-bold uppercase tracking-widest">{cat.count} Models Available</span>
                          </div>
                          <div className="hidden sm:flex items-center text-slate-400 text-sm font-medium">
                            <Cpu className="w-4 h-4 mr-1.5" /> Enterprise Grade
                          </div>
                        </div>

                        <motion.h3 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight"
                        >
                          {cat.name}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                          className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl"
                        >
                          {cat.desc}
                        </motion.p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-10 w-full flex-1">
                          {/* Included Products List */}
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm"
                          >
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                              <Package className="w-4 h-4 mr-2" /> Product Lines
                            </div>
                            <div className="space-y-3">
                              {cat.products.map((prod, idx) => (
                                 <div key={idx} className="flex items-start text-slate-700 font-semibold group/item">
                                   <div className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 mt-0.5 shrink-0 transition-colors group-hover/item:bg-blue-600 group-hover/item:text-white">
                                     <Check className="w-3 h-3" />
                                   </div>
                                   {prod}
                                 </div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Use Cases */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.25 }}
                          >
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
                              <Activity className="w-4 h-4 mr-2" /> Best Suited For
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {cat.useCases?.map((uc, idx) => (
                                <div key={idx} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-lg shadow-sm hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default">
                                  {uc}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between"
                        >
                          <Link 
                            to={`/products?category=${cat.id}`} 
                            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 group/btn"
                          >
                            View {cat.name} <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                          
                          {/* Abstract silhouette preview */}
                          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-slate-50 text-slate-300 opacity-50 group-hover/card:opacity-100 group-hover/card:text-blue-500 group-hover/card:border-blue-100 transition-all duration-700">
                             {cat.icon}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Featured Products */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Tech-inspired background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                 Featured Solutions
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">Explore High-Performance Equipment for Critical Operations</h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl">Carefully selected machines and systems for banking, cash handling, security, logistics, and power continuity.</p>
            </div>
            
            <div className="flex-shrink-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
               {['All', 'Cash Handling', 'Banking Equipment', 'Parcel Lockers'].map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveFeaturedCategory(cat)}
                   className={cn(
                     "px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-all",
                     activeFeaturedCategory === cat 
                      ? "bg-slate-900 text-white shadow-md" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 shadow-sm"
                   )}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Spotlight Hero Product */}
            {filteredFeatured.length > 0 && (
              <div className="lg:col-span-7 xl:col-span-8 group">
                <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 h-full flex flex-col">
                  
                  <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[400px] bg-slate-50 overflow-hidden isolate p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-200/50 via-transparent to-transparent opacity-50 mix-blend-multiply"></div>
                    <img 
                      src={filteredFeatured[0].img} 
                      alt={filteredFeatured[0].name} 
                      className="relative z-10 w-full h-full object-contain mix-blend-multiply drop-shadow-2xl group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-white/90 backdrop-blur-md text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-md border border-slate-200 shadow-sm uppercase tracking-widest flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                        {filteredFeatured[0].cat}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col flex-1 border-t border-slate-100 bg-white relative">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{filteredFeatured[0].name}</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-10 w-full">
                      {filteredFeatured[0].specs.map((spec, j) => (
                        <div key={j} className="flex items-start bg-slate-50 border border-slate-100 rounded-xl p-4">
                          <Check className="h-5 w-5 text-blue-500 mr-3 shrink-0" />
                          <span className="font-semibold text-slate-700">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      <Link to="/products/detail" className="bg-slate-900 hover:bg-black text-white py-3.5 px-8 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                        View Full Specs <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                      <Link to="/contact" className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 py-3.5 px-8 rounded-xl font-bold transition-all flex items-center justify-center">
                        Request Quote
                      </Link>
                      <button className="sm:ml-auto text-slate-500 hover:text-blue-600 font-bold transition-colors flex items-center justify-center text-sm uppercase tracking-wide">
                        <Download className="w-4 h-4 mr-2" /> Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Supporting Products Panel */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
              {filteredFeatured.slice(1, 4).map((product, i) => (
                <Link key={i} to="/products/detail" className="group bg-white rounded-2xl border border-slate-200 p-4 flex gap-5 hover:shadow-xl hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-300">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 bg-slate-50 rounded-xl flex-shrink-0 p-3 flex items-center justify-center relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="relative z-10 w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center flex-1 py-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{product.cat}</span>
                    <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">{product.name}</h4>
                    <div className="space-y-1 mt-auto">
                       {product.specs.slice(0,1).map((spec, j) => (
                         <div key={j} className="text-xs font-semibold text-slate-500 flex items-center">
                           <Check className="w-3 h-3 text-emerald-500 mr-1.5" /> {spec}
                         </div>
                       ))}
                    </div>
                  </div>
                </Link>
              ))}

              {filteredFeatured.length > 4 && (
                <Link to="/products" className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-100 hover:border-slate-400 transition-all mt-auto h-full min-h-[140px] group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-200 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 mb-1">View All {filteredFeatured.length} Models</span>
                  <span className="text-xs text-slate-500 font-medium">Explore the complete catalog</span>
                </Link>
              )}
            </div>
          </div>

          <div className="mt-20 border-t border-slate-200 pt-16 flex flex-col items-center text-center">
             <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
             </div>
             <h3 className="text-2xl font-bold text-slate-900 mb-6">Need a custom equipment configuration?</h3>
             <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/products" className="bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] flex items-center justify-center">
                 View Full Product Catalog
               </Link>
               <Link to="/contact" className="bg-white border text-blue-600 border-blue-100 hover:border-blue-200 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                 Talk to Technical Sales
               </Link>
             </div>
          </div>
          
        </div>
      </section>

      {/* 8. Service Beyond Supply */}
      <section className="py-32 bg-[#0B1528] text-white relative overflow-hidden">
        <style>
          {`
            @keyframes signal-flow {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
            .animate-signal {
              animation: signal-flow 4s ease-in-out infinite;
            }
          `}
        </style>

        {/* Background Overlay Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-10"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-4 h-4" /> Digital Service Lifecycle
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">More than equipment supply. Complete support from selection to service.</h2>
            <p className="text-lg md:text-xl text-slate-400">Our SLA lifecycle ensures your investment is protected and your daily operations never halt.</p>
          </div>

          <div className="relative mt-24">
            {/* Animated Digital Journey Rail */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-slate-800 rounded-full overflow-hidden z-0">
              <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-signal opacity-80"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {serviceSteps.map((step, i) => {
                 const icons = [
                   <Headset className="w-7 h-7" />,
                   <Search className="w-7 h-7" />,
                   <FileSearch className="w-7 h-7" />,
                   <Wrench className="w-7 h-7" />,
                   <ShieldCheck className="w-7 h-7" />
                 ];
                 return (
                   <div key={i} className="flex flex-col items-center text-center group h-full">
                     {/* Digital Node */}
                     <div className="relative mb-8">
                       {/* Glow effect on hover */}
                       <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       <div className="w-24 h-24 rounded-full bg-[#0F1C36] border border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.6)] flex items-center justify-center group-hover:border-blue-500/60 group-hover:bg-[#14264A] group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(37,99,235,0.2)] transition-all duration-500 relative z-10 overflow-hidden">
                          {/* Inner dynamic background */}
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Step Number Badge */}
                          <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[#0B1528] border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white shadow-sm transition-all duration-300 z-20">
                            {i + 1}
                          </div>

                          {/* Icon */}
                          <div className="text-slate-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 z-10 relative">
                            {icons[i]}
                          </div>
                       </div>
                       
                       {/* Connection Indicator Rings */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/0 rounded-full group-hover:border-blue-500/20 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>
                     </div>

                     {/* Content Card */}
                     <div className="flex-1 bg-[#111C35]/60 backdrop-blur-md border border-slate-800/80 p-6 lg:p-5 rounded-2xl w-full group-hover:bg-[#142340] shadow-xl group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] group-hover:border-blue-900/50 transition-all duration-500 relative overflow-hidden flex flex-col items-center">
                       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-blue-500/60 transition-colors duration-500 opacity-50"></div>
                       <div className="text-[10px] font-black text-blue-500/70 uppercase tracking-widest mb-3">Phase 0{i + 1}</div>
                       <h4 className="text-base lg:text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">{step.title}</h4>
                       <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{step.desc}</p>
                     </div>
                   </div>
                 );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Choose MIF Solutions */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=2062&auto=format&fit=crop" alt="Engineers" className="absolute inset-0 w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-white">
                 <p className="text-5xl font-bold mb-2">15+</p>
                 <p className="text-lg font-medium text-slate-200">Years of delivering mission-critical stability to Pakistan's top financial channels.</p>
               </div>
             </div>

             <div className="order-1 lg:order-2">
               <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Why Financial Institutions Trust Us</h2>
               <p className="text-lg text-slate-600 mb-12">We don't just shift boxes. We consult, install, calibrate, and protect your enterprise hardware investments.</p>
               
               <div className="space-y-8">
                 {differentiators.map((diff, i) => (
                   <div key={i} className="flex items-start">
                     <div className="bg-blue-100 p-3 rounded-lg mr-5 shrink-0">
                       {diff.icon}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">{diff.title}</h3>
                       <p className="text-slate-600 leading-relaxed">{diff.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 10. Technology Partners */}
      <section className="py-20 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <p className="text-lg font-medium text-slate-600">
            Working with recognized equipment and technology brands to serve business-critical operations.
          </p>
        </div>
        <div className="relative w-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8">
            {partners.map((partner, i) => (
              <div key={i} className="h-12 w-auto font-black text-3xl tracking-tighter flex items-center text-slate-300 uppercase cursor-default hover:text-slate-500 transition-colors">
                {partner}
              </div>
            ))}
          </div>
          <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-16 px-8" aria-hidden="true">
            {partners.map((partner, i) => (
              <div key={i} className="h-12 w-auto font-black text-3xl tracking-tighter flex items-center text-slate-300 uppercase cursor-default hover:text-slate-500 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Use Case / Case Study */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-4 text-center">Impact in Action</div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16 text-center max-w-4xl mx-auto">
            Example Solution: High-Volume Cash Sorting for Financial Operations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl">
               <div className="w-12 h-12 bg-red-500/10 text-red-400 rounded-xl flex items-center justify-center mb-6">
                 <Minus className="h-6 w-6" />
               </div>
               <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
               <p className="text-slate-400 leading-relaxed">
                 A major branch hub processing millions daily faced severe bottlenecks due to manual sorting, frequent machine jams, and rising counterfeit threats escaping basic detectors.
               </p>
             </div>

             <div className="bg-slate-800 border border-blue-500/30 p-10 rounded-3xl relative overflow-hidden shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
               <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                 <Wrench className="h-6 w-6" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
               <p className="text-slate-400 leading-relaxed">
                 Deployment of the BNE-S210 2+1 Pocket Sorters combined with comprehensive operator training and a 4-hour SLA maintenance contract for uninterrupted processing.
               </p>
             </div>

             <div className="bg-slate-800 border border-slate-700 p-10 rounded-3xl">
               <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6">
                 <TrendingUp className="h-6 w-6" />
               </div>
               <h3 className="text-2xl font-bold mb-4">The Impact</h3>
               <ul className="space-y-4 text-slate-400">
                 <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" /> Faster cash processing workflows</li>
                 <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" /> Zero counterfeit acceptance</li>
                 <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" /> Reduced manual teller workload</li>
                 <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-400 mr-3 shrink-0" /> Improved central operational control</li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 12. Brochure / Company Profile CTA */}
      <section className="py-24 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <FileSearch className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Need product details for internal review?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Download the company profile or request specific product brochures for your procurement department and technical committees.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-sm">
              <Download className="mr-2 h-5 w-5" /> Download Company Profile
            </button>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center shadow-sm">
              <Package className="mr-2 h-5 w-5" /> Request Product Brochure
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
           </div>
           <div className="space-y-4">
             {faqs.map((faq, i) => (
               <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                 <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center bg-white hover:bg-slate-50 focus:outline-none"
                 >
                   <span className="font-bold text-lg text-slate-900">{faq.q}</span>
                   <ChevronDown className={cn("h-5 w-5 text-slate-400 transition-transform duration-300", openFaq === i ? "rotate-180" : "")} />
                 </button>
                 <div className={cn("px-8 overflow-hidden transition-all duration-300 ease-in-out", openFaq === i ? "max-h-96 py-6 border-t border-slate-100 bg-slate-50 text-slate-600" : "max-h-0 py-0 text-transparent")}>
                   {faq.a}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 14. Final Strong CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/20"></div>
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-blue-600/10 blur-3xl mix-blend-screen"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Need the right equipment for your operation?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Speak with MIF Solutions for technical product recommendations, quotation support, deployment planning, and nationwide after-sales service contracts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all border border-transparent shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Request a Quote
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-slate-700 hover:bg-slate-800 hover:border-slate-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
