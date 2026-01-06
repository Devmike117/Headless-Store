import { OfficeCategory } from '../components/categories/OfficeCategory';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { PageTransition } from '@/components/PageTransition';

export const Office = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <Link 
          to="/store" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <HiArrowLeft />
          Volver a la tienda
        </Link>
        <OfficeCategory />
      </div>
    </div>
    </PageTransition>
  );
};
