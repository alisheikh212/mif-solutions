import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronDown, Check, Download, AlertCircle, X, CheckSquare, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

// Product type and mock data
type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  benefits: string[];
  suitedFor: string[];
  isNew?: boolean;
};

const products: Product[] = [
  {
    id: 'bs-8000',
    name: 'BS-8000 Platinum Banknote Sorter',
    category: 'cash-handling',
    image: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy-duty 4+1 pocket fitness sorter with dual CIS technology for ultimate accuracy.',
    benefits: ['Dual CIS Sensors', 'Multi-currency support'],
    suitedFor: ['banking', 'exchange', 'retail'],
    isNew: true
  },
  {
    id: 'vc-300',
    name: 'VC-300 Value Counter',
    category: 'cash-handling',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop',
    description: 'Compact mixed value counter suitable for high-volume retail and banking tellers.',
    benefits: ['Fast counting', 'Fake note detection'],
    suitedFor: ['retail', 'exchange', 'logistics']
  },
  {
    id: 'fnd-uvmg',
    name: 'Pro-Detect UV/MG Scanner',
    category: 'cash-handling',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    description: 'Professional counterfeit detector using UV, Magnetic, and Infrared sensors.',
    benefits: ['Infrared scanning', 'UV & Magnetic check'],
    suitedFor: ['retail', 'exchange']
  },
  {
    id: 'ups-10kva',
    name: 'Industrial UPS 10kVA',
    category: 'infrastructure',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop',
    description: 'Online double conversion UPS ensuring zero transfer time for critical banking systems.',
    benefits: ['Zero transfer time', 'High load capacity'],
    suitedFor: ['banking', 'corporate', 'power']
  },
  {
    id: 'pl-modular',
    name: 'SNBC Modular Parcel Locker',
    category: 'lockers',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a74?q=80&w=800&auto=format&fit=crop',
    description: 'Secure, modular parcel lockers for 24/7 delivery and pickup automation.',
    benefits: ['API Integration', 'Weatherproof options'],
    suitedFor: ['logistics', 'corporate']
  },
  {
    id: 'tp-80',
    name: 'TP-80 Thermal Receipt Printer',
    category: 'printers',
    image: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?q=80&w=800&auto=format&fit=crop',
    description: 'High-speed 80mm thermal printer for ATM receipts and teller transactions.',
    benefits: ['High speed printing', 'Auto-cutter included'],
    suitedFor: ['retail', 'banking']
  }
];

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'cash-handling', name: 'Cash Handling Equipment' },
  { id: 'infrastructure', name: 'UPS & Batteries' },
  { id: 'lockers', name: 'Parcel Lockers' },
  { id: 'printers', name: 'Thermal & Label Printers' },
];

const useCases = [
  { id: 'banking', name: 'Banking' },
  { id: 'exchange', name: 'Exchange Companies' },
  { id: 'retail', name: 'Retail Cash Handling' },
  { id: 'logistics', name: 'Logistics' },
  { id: 'corporate', name: 'Corporate Offices' },
  { id: 'power', name: 'Power Backup' },
];

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeUseCases, setActiveUseCases] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [compareList, setCompareList] = useState<Product[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesUseCase = activeUseCases.length === 0 || activeUseCases.some(uc => product.suitedFor.includes(uc));
    return matchesCategory && matchesSearch && matchesUseCase;
  });

  const toggleUseCase = (id: string) => {
    setActiveUseCases(prev => 
      prev.includes(id) ? prev.filter(uc => uc !== id) : [...prev, id]
    );
  };

  const toggleCompare = (product: Product, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    e.stopPropagation();
    setCompareList(prev => 
      prev.find(p => p.id === product.id) 
        ? prev.filter(p => p.id !== product.id) 
        : [...prev, product].slice(0, 4) // max 4 for comparison
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-slate-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">Product Catalog</h1>
          <p className="text-slate-300 max-w-2xl text-lg">
            Browse our comprehensive range of high-performance banking and infrastructure equipment designed for continuous corporate operations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-800 font-bold text-lg border-b border-slate-100 pb-4">
                <Filter className="h-5 w-5" />
                Equipment Categories
              </div>
              
              <ul className="space-y-1 mb-8">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors text-sm font-semibold ${
                        activeCategory === category.id
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                Filter by Sector / Use Case
              </div>
              <div className="flex flex-wrap gap-2">
                {useCases.map((uc) => {
                  const isActive = activeUseCases.includes(uc.id);
                  return (
                    <button
                      key={uc.id}
                      onClick={() => toggleUseCase(uc.id)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
                        isActive 
                          ? "bg-slate-800 border-slate-800 text-white" 
                          : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >
                      {uc.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Bar */}
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 mb-8 flex items-center group relative overflow-hidden transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <div className="pl-4 pr-3 text-slate-400">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                placeholder="Search products, equipment, or models..."
                className="w-full border-none focus:ring-0 text-slate-700 bg-transparent py-3 placeholder:text-slate-400 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Results Counter */}
            <div className="mb-6 flex justify-between items-center bg-white px-4 py-3 rounded-lg border border-slate-200 shadow-sm">
              <p className="text-slate-700 font-medium">
                Showing <span className="font-bold">{filteredProducts.length}</span> results
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500">Sort:</span>
                <select className="border-none bg-transparent text-sm font-semibold text-slate-800 focus:ring-0 p-0 pr-4 cursor-pointer">
                  <option>Recommended</option>
                  <option>Newest Arrivals</option>
                  <option>Name (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const isCompared = compareList.some(p => p.id === product.id);
                  return (
                    <div key={product.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      {product.isNew && (
                        <div className="absolute top-4 left-4 z-20 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          New Model
                        </div>
                      )}
                      
                      {/* Compare Checkbox */}
                      <button 
                        onClick={(e) => toggleCompare(product, e)}
                        className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        {isCompared ? <CheckSquare className="w-4 h-4 text-blue-600" /> : <Square className="w-4 h-4 text-slate-400" />}
                        Compare
                      </button>

                      <Link to={`/products/${product.id}`} className="block relative aspect-[4/3] bg-slate-50 overflow-hidden isolate p-4">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          loading="lazy"
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      <div className="p-6 flex flex-col flex-1 border-t border-slate-100">
                        <div className="text-[11px] text-blue-600 mb-2 uppercase font-bold tracking-widest">
                          {categories.find(c => c.id === product.category)?.name}
                        </div>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="mt-3 space-y-1.5 mb-6">
                          {product.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start text-sm text-slate-600">
                              <Check className="h-4 w-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                              <span className="font-medium">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto space-y-3">
                          <div className="flex gap-2">
                            <Link to={`/products/${product.id}`} className="flex-1 bg-slate-900 hover:bg-black text-white py-2.5 text-center rounded-lg font-bold text-sm transition-colors shadow-sm">
                              View Specs
                            </Link>
                            <Link to="/contact" className="flex-1 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 py-2.5 text-center rounded-lg font-bold text-sm transition-colors">
                              Request Quote
                            </Link>
                          </div>
                          <button className="w-full text-center py-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center justify-center">
                            <Download className="w-4 h-4 mr-1.5" /> Download Brochure
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white p-16 text-center rounded-2xl border border-slate-200 shadow-sm">
                <AlertCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">No matching products</h3>
                <p className="text-slate-500 mb-6">We couldn't find anything matching your current filters.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('all'); setActiveUseCases([]);}}
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-black transition-colors shadow-sm"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comparison Preview Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[100] transform transition-transform duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                <span className="font-bold text-slate-900 whitespace-nowrap">Compare ({compareList.length}/4)</span>
                <div className="flex gap-2">
                  {compareList.map(p => (
                    <div key={p.id} className="relative bg-slate-50 border border-slate-200 rounded-lg p-1.5 pr-8 min-w-[150px] flex items-center gap-2">
                      <img src={p.image} className="w-8 h-8 object-cover rounded bg-white mix-blend-multiply" alt="" />
                      <span className="text-xs font-semibold text-slate-700 truncate w-24">{p.name}</span>
                      <button 
                        onClick={() => setCompareList(prev => prev.filter(item => item.id !== p.id))}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 p-0.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {Array.from({ length: 4 - compareList.length }).map((_, i) => (
                    <div key={`empty-${i}`} className="bg-slate-50 border border-dashed border-slate-300 rounded-lg w-[150px] h-[46px] hidden md:flex items-center justify-center text-xs text-slate-400 font-medium">
                      Add Product
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <button 
                  onClick={() => setCompareList([])}
                  className="px-4 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700 w-full md:w-auto text-center"
                >
                  Clear All
                </button>
                <Link 
                  to="/products/compare" // Placeholder route for UI
                  className={cn(
                    "px-6 py-2 rounded-lg font-bold text-sm text-center w-full md:w-auto transition-colors",
                    compareList.length > 1 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md" : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  )}
                  onClick={(e) => compareList.length < 2 && e.preventDefault()}
                >
                  Compare Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
