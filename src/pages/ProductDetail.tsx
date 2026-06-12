import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Shield, Truck, PenTool, CheckCircle, ChevronRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function ProductDetail() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', qty: '1', message: '' });

  // In a real app we would fetch the product based on ID
  // Using static mockup data for demonstration
  const product = {
    id: id,
    name: 'BS-8000 Platinum Banknote Sorter',
    category: 'Cash Handling Machines',
    image: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=1200&auto=format&fit=crop',
    description: 'The BS-8000 Platinum is a remarkably advanced, heavy-duty 4+1 pocket fitness sorter. It utilizes state-of-the-art dual CIS (Contact Image Sensor) technology for ultimate accuracy in counting, sorting, and authentication. Engineered strictly for environments where both speed and uncompromising precision are required, such as central banks and cash-in-transit (CIT) companies.',
    benefits: [
      'Reduces manual cash processing time by up to 60%',
      'Eliminates counterfeit acceptance risk',
      'Minimizes machine jams with straight-path design',
      'Provides digital audit trails for compliance'
    ],
    features: [
      'Dual CIS Sensors for full image scanning front and back',
      'Advanced fitness sorting (soil, tape, holes, tears, corner folds)',
      'Multi-currency processing capability (up to 40 currencies)',
      'Serial number extraction and comparison',
      'High capacity hopper (1000 notes) and stacker pockets (500 notes)',
      'Large 7-inch touch-screen interface for intuitive operation'
    ],
    specs: [
      { label: 'Processing Speed', value: 'Up to 1,200 notes/min' },
      { label: 'Hopper Capacity', value: '1000 notes' },
      { label: 'Interfaces', value: 'LAN, USB, RS232C' },
      { label: 'Power Supply', value: '100-240V, 50/60Hz' },
      { label: 'Dimensions', value: '450(W) x 430(D) x 480(H) mm' },
      { label: 'Weight', value: '35 kg' }
    ],
    suitedFor: [
      'Central & Commercial Banks',
      'Large Exchange Companies',
      'Cash-in-Transit (CIT) Firms',
      'Mega Retail Chains'
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation is handled by global breadcrumbs, but keeping a simple back link is good for mobile UX */}
        <div className="mb-6 lg:mb-8 flex items-center">
          <Link to="/products" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Catalog
          </Link>
        </div>

        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Column: Product Details */}
          <div className="flex-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Product Image Gallery */}
                <div className="p-8 lg:p-12 lg:border-r border-slate-100 bg-slate-50/50 flex flex-col justify-center items-center">
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 mb-6 relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="absolute inset-0 w-full h-full object-contain p-4 mix-blend-multiply"
                    />
                  </div>
                  <div className="flex gap-4 w-full">
                    <div className="h-20 w-20 rounded-lg bg-white border-2 border-blue-600 overflow-hidden cursor-pointer shadow-sm p-1">
                       <img src={product.image} alt="Thumb 1" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="h-20 w-20 rounded-lg bg-white border border-slate-200 overflow-hidden cursor-pointer opacity-60 hover:opacity-100 transition-opacity p-1">
                       <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=200&auto=format&fit=crop" alt="Thumb 2" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="text-xs text-blue-600 font-bold tracking-widest uppercase mb-3 px-3 py-1 bg-blue-50 inline-block rounded-md self-start">
                    {product.category}
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{product.name}</h1>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-1">
                    {product.description}
                  </p>

                  <div className="border-t border-slate-100 pt-8 mt-auto">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Best Suited For</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.suitedFor.map((sector, i) => (
                        <span key={i} className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-8 lg:p-12">
               <h2 className="text-2xl font-bold text-slate-900 mb-8">Operational Benefits</h2>
               <div className="grid sm:grid-cols-2 gap-6">
                 {product.benefits.map((benefit, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                       <CheckCircle className="w-5 h-5 text-green-600" />
                     </div>
                     <div>
                       <p className="font-semibold text-slate-800 leading-snug pt-2">{benefit}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Technical Specifications Matrix */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex items-center justify-between p-8 lg:p-10 border-b border-slate-100 bg-slate-50/50">
                 <h2 className="text-2xl font-bold text-slate-900">Technical Specifications</h2>
                 <button className="hidden sm:flex text-blue-600 font-bold items-center hover:underline">
                   <Download className="w-4 h-4 mr-2" />
                   Download PDF spec sheet
                 </button>
              </div>
              
              <div className="p-8 lg:p-10">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Hardware Capabilities</h3>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 rounded-sm bg-blue-100 p-0.5">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="ml-3 text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-bold text-slate-900 mb-4 border-t border-slate-100 pt-8">Physical Metrics</h3>
                <div className="border rounded-xl border-slate-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-slate-200">
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {product.specs.map((spec, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="py-4 pl-6 pr-4 text-sm font-bold text-slate-900 w-1/3 border-r border-slate-100">
                            {spec.label}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-slate-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Value Proposition Banners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Authentic Supply</h4>
                <p className="text-slate-500 text-sm">Directly sourced equipment with verified manufacturer warranty.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Full Installation</h4>
                <p className="text-slate-500 text-sm">Complete engineering setup, configuration, and operator training.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Safe Delivery</h4>
                <p className="text-slate-500 text-sm">Secure nationwide logistics handling delicate electronic equipment.</p>
              </div>
            </div>

            {/* Related Products */}
            <div className="pt-8">
               <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Equipment</h2>
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Mock Related blocks */}
                  <Link to="/products/vc-300" className="group bg-white border border-slate-200 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-slate-50 rounded-lg flex-shrink-0 p-2">
                       <img src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" alt="VC-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Cash Handling</span>
                       <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">VC-300 Value Counter</span>
                       <span className="text-sm text-slate-500 mt-1 flex items-center">View Details <ChevronRight className="w-4 h-4" /></span>
                    </div>
                  </Link>
                  <Link to="/products/cb-auto" className="group bg-white border border-slate-200 rounded-xl p-4 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-24 h-24 bg-slate-50 rounded-lg flex-shrink-0 p-2">
                       <img src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-contain mix-blend-multiply" alt="AutoBind" />
                    </div>
                    <div className="flex flex-col justify-center">
                       <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Banking Equipment</span>
                       <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">AutoBind 500 Currency Binder</span>
                       <span className="text-sm text-slate-500 mt-1 flex items-center">View Details <ChevronRight className="w-4 h-4" /></span>
                    </div>
                  </Link>
               </div>
            </div>
          </div>

          {/* Right Column: Sticky Inquiry Box */}
          <div className="xl:w-96 flex-shrink-0">
            <div className="bg-slate-900 text-white rounded-2xl shadow-xl sticky top-24 p-8">
              <h3 className="text-2xl font-bold mb-2">Request quotation</h3>
              <p className="text-slate-400 text-sm mb-8">Our commercial team typically provides detailed pricing and specs within 1 business day.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">Company / Institution Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Bank Alfa Ltd."
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="qty" className="block text-sm font-medium text-slate-300 mb-1.5">Est. Quantity</label>
                    <input type="number" id="qty" min="1" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white focus:ring-blue-500 focus:border-blue-500" defaultValue="1" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">Additional Requirements</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-3 text-white placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 resize-none" 
                    placeholder="Mention any specific integration requirements..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-lg transition-colors flex justify-center items-center">
                    Submit Request <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </form>

              <div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-800 pt-6">
                 <a href="#" className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                   <Download className="w-4 h-4 mr-2" /> Brochure
                 </a>
                 <div className="w-1 h-1 rounded-full bg-slate-700"></div>
                 <a href="/contact" className="flex items-center text-sm font-semibold text-slate-400 hover:text-white transition-colors">
                   <MessageSquare className="w-4 h-4 mr-2" /> Contact Sales
                 </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
