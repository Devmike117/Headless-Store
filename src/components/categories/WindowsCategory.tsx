import { DiWindows } from 'react-icons/di';
import { ProductCard } from '../ProductCard';

export const WindowsCategory = () => {
  const products = [
    {
      name: 'Windows 11 Pro',
      description: 'Licencia original de por vida',
      price: '$199',
      color: 'from-blue-500 to-cyan-600',
      icon: DiWindows,
      popular: true,
    },
    {
      name: 'Windows 11 Home',
      description: 'Licencia original de por vida',
      price: '$139',
      color: 'from-blue-400 to-blue-600',
      icon: DiWindows,
      popular: true,
    },
    {
      name: 'Windows 10 Pro',
      description: 'Licencia perpetua profesional',
      price: '$179',
      color: 'from-cyan-600 to-blue-700',
      icon: DiWindows,
      popular: false,
    },
    {
      name: 'Windows 10 Home',
      description: 'Licencia perpetua personal',
      price: '$119',
      color: 'from-cyan-500 to-cyan-700',
      icon: DiWindows,
      popular: false,
    },
    {
      name: 'Windows Server 2022',
      description: 'Licencia para servidor estándar',
      price: '$899',
      color: 'from-blue-800 to-indigo-900',
      icon: DiWindows,
      popular: false,
    },
    {
      name: 'Windows 11 Pro Workstation',
      description: 'Para estaciones de trabajo',
      price: '$309',
      color: 'from-blue-600 to-purple-700',
      icon: DiWindows,
      popular: false,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-black mb-2">Windows</h2>
        <p className="text-gray-600">Licencias originales de Windows 10 y 11</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
