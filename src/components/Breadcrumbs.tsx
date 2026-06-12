import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Do not show breadcrumbs on home page
  if (pathnames.length === 0) return null;

  return (
    <div className="bg-slate-50 border-b border-slate-200 py-3 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="hover:text-blue-600 flex items-center transition-colors">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              // Capitalize and clean up dashes
              const title = value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

              return (
                <li key={to} className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                  {last ? (
                    <span className="text-slate-800" aria-current="page">
                      {title}
                    </span>
                  ) : (
                    <Link to={to} className="hover:text-blue-600 transition-colors">
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
