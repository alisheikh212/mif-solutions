import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Minus, ShoppingCart, HelpCircle } from 'lucide-react';

export function ProductCompare() {
  // Static mock comparison data
  const products = [
    {
      id: 'bs-8000',
      name: 'BS-8000 Platinum',
      image: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?q=80&w=400&auto=format&fit=crop',
      category: 'Banknote Sorter',
      speed: '1,200 notes/min',
      capacity: '1000 notes',
      pockets: '4+1',
      fitness: true,
      serial: true,
      dimensions: '450x430x480 mm',
    },
    {
      id: 'vc-300',
      name: 'VC-300 Value Counter',
      image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=400&auto=format&fit=crop',
      category: 'Value Counter',
      speed: '1,500 notes/min',
      capacity: '500 notes',
      pockets: '1',
      fitness: false,
      serial: false,
      dimensions: '280x260x270 mm',
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link to="/products" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Catalog
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Compare Equipment</h1>
            <p className="text-slate-600 mt-2">Evaluate specifications to find the right model for your operational needs.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr>
                <th className="p-6 border-b border-r border-slate-200 bg-slate-50 w-1/4">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Features & Specs</div>
                </th>
                {products.map((product) => (
                  <th key={product.id} className="p-6 border-b border-slate-200 w-1/3 align-top min-w-[300px]">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 bg-slate-50 rounded-lg mb-4 p-4 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                      </div>
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{product.category}</div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4">{product.name}</h3>
                      <Link to={`/products/${product.id}`} className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-black transition-colors">
                        View Details
                      </Link>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50">Processing Speed</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center text-slate-600 font-medium">{product.speed}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50">Hopper Capacity</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center text-slate-600 font-medium">{product.capacity}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50 flex items-center gap-2">
                  Pockets <HelpCircle className="w-4 h-4 text-slate-400" />
                </td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center text-slate-600 font-medium">{product.pockets}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50">Fitness Sorting</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    {product.fitness ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50">Serial Number Extraction</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center">
                    {product.serial ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 pl-6 font-semibold text-slate-900 border-r border-slate-200 bg-slate-50">Dimensions</td>
                {products.map((product) => (
                  <td key={product.id} className="p-4 text-center text-slate-600 text-sm">{product.dimensions}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Still not sure which equipment fits your needs?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Our technical experts can analyze your operational requirements and recommend the perfect setup for your infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-sm">
              Contact an Expert
            </Link>
            <a href="tel:+922134556789" className="bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 px-8 py-3.5 rounded-lg font-bold transition-colors">
              Call Us Directly
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
