import { BsMicrosoft } from 'react-icons/bs';
import { ProductCard } from '../ProductCard';

export const OfficeCategory = () => {
  const products = [
    {
      name: 'Microsoft 365 Personal',
      description: '1 usuario + 1TB OneDrive',
      price: '$69.99/año',
      color: 'from-orange-500 to-red-600',
      icon: BsMicrosoft,
      popular: true,
    },
    {
      name: 'Microsoft 365 Familia',
      description: 'Hasta 6 usuarios + 6TB OneDrive',
      price: '$99.99/año',
      color: 'from-red-500 to-pink-600',
      icon: BsMicrosoft,
      popular: true,
    },
    {
      name: 'Office 2021 Professional Plus',
      description: 'Licencia perpetua completa',
      price: '$299',
      color: 'from-red-600 to-orange-700',
      icon: BsMicrosoft,
      popular: false,
    },
    {
      name: 'Office 2021 Home & Student',
      description: 'Word, Excel, PowerPoint',
      price: '$149',
      color: 'from-orange-400 to-orange-600',
      icon: BsMicrosoft,
      popular: false,
    },
    {
      name: 'Office 2021 Home & Business',
      description: 'Incluye Outlook para negocios',
      price: '$249',
      color: 'from-orange-600 to-red-700',
      icon: BsMicrosoft,
      popular: false,
    },
    {
      name: 'Office 2019 Professional Plus',
      description: 'Licencia perpetua anterior',
      price: '$199',
      color: 'from-red-700 to-red-900',
      icon: BsMicrosoft,
      popular: false,
    },
    {
      name: 'Visio 2021 Professional',
      description: 'Software de diagramas',
      price: '$349',
      color: 'from-blue-600 to-indigo-700',
      icon: BsMicrosoft,
      popular: false,
    },
    {
      name: 'Project 2021 Professional',
      description: 'Gestión de proyectos',
      price: '$349',
      color: 'from-green-600 to-teal-700',
      icon: BsMicrosoft,
      popular: false,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-black mb-2">Microsoft Office</h2>
        <p className="text-gray-600">Suite completa de productividad y herramientas profesionales</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
