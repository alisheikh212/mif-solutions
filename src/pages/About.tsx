export function About() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">About MIF Solutions</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Pioneering hardware solutions for Pakistan's financial and retail sectors.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              MIF Solutions Pvt. Ltd. was established with a singular focus: to modernize the infrastructure of financial institutions in Pakistan by providing world-class banking equipment and cash handling technologies.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We aim to bridge the gap between global technological advancements and local operational needs, ensuring that our clients can operate with maximum security, absolute accuracy, and extreme efficiency.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" alt="Office HQ" className="w-full h-full object-cover aspect-[4/3]"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-slate-900 font-semibold mb-2">Years Experience</div>
            <p className="text-slate-500 text-sm">Deep industry knowledge and technical expertise.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-900 font-semibold mb-2">Corporate Clients</div>
            <p className="text-slate-500 text-sm">Trusted by major banks and retail chains nationwide.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-slate-900 font-semibold mb-2">Support Structure</div>
            <p className="text-slate-500 text-sm">Dedicated engineering teams always ready to assist.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center tracking-tight">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">Integrity in Precision</h3>
              <p className="text-slate-600">In the financial sector, there is no room for error. We source and support only equipment that guarantees exactness in counting, sorting, and authentication.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">Proactive Partnership</h3>
              <p className="text-slate-600">We don't view our clients as transactional customers. We act as strategic partners, preemptively addressing hardware needs to prevent operational bottlenecks.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">Technical Excellence</h3>
              <p className="text-slate-600">Our team undergoes continuous training to stay ahead of counterfeit trends and master the latest diagnostic software for complex machinery.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 border-l-4 border-blue-600 pl-4">Local Adaptation</h3>
              <p className="text-slate-600">We understand the unique challenges of the Pakistani market, from harsh environmental conditions (dust/heat) to varying counterfeit methods.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
