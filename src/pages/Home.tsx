import { HiLightningBolt, HiShieldCheck, HiCheckCircle } from 'react-icons/hi';
import { SiSteam } from 'react-icons/si';
import { DiWindows } from 'react-icons/di';
import { BsMicrosoft, BsXbox } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';

export const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
      {/* Sección hero */}
      <section className="pt-24 pb-16 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl font-semibold text-black tracking-tight mb-4"
        >
          Licencias y Servicios IT
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Software original, soporte técnico y servicios de informática profesionales.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 justify-center mb-16"
        >
          <Link to="/store" className="inline-flex items-center justify-center rounded-xl bg-blue-600 text-white px-7 py-3 text-base font-medium hover:bg-blue-700 transition-all duration-200">
            Ver catálogo
          </Link>
          <Link to="/servicios" className="inline-flex items-center justify-center rounded-xl bg-gray-100 text-gray-900 px-7 py-3 text-base font-medium hover:bg-gray-200 transition-all duration-200">
            Servicios
          </Link>
        </motion.div>
      </section>

      {/* Categorías populares */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[980px] mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold text-black mb-8 text-center"
          >
            Categorías populares
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { href: '/games/steam', icon: SiSteam, color: 'text-blue-900', title: 'Juegos', desc: 'Steam, Epic, Origin' },
              { href: '/games/xbox', icon: BsXbox, color: 'text-green-600', title: 'Consolas', desc: 'Xbox, PlayStation' },
              { href: '/store/windows', icon: DiWindows, color: 'text-blue-500', title: 'Windows', desc: '10, 11 Pro/Home' },
              { href: '/store/office', icon: BsMicrosoft, color: 'text-orange-600', title: 'Office', desc: '365, 2021, 2019' },
            ].map((category, i) => (
              <Link
                key={i}
                to={category.href}
              >
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`text-5xl ${category.color}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-black h-14 flex items-center justify-center">{category.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 h-10 flex items-center justify-center">{category.desc}</p>
                </Card>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-24 px-6">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: HiLightningBolt,
                title: 'Entrega Rápida',
                desc: 'Recibe tu licencia por email en menos de 5 minutos tras la compra',
                color: 'text-blue-600'
              },
              {
                icon: HiShieldCheck,
                title: '100% Originales',
                desc: 'Todas nuestras licencias son originales y verificadas directamente con los fabricantes',
                color: 'text-blue-600'
              },
              {
                icon: HiCheckCircle,
                title: 'Garantía Total',
                desc: 'Soporte completo y garantía en todas tus compras. Tu satisfacción es nuestra prioridad',
                color: 'text-blue-600'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                  <motion.div 
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <feature.icon className={`text-6xl ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-3 text-black">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="bg-white py-20 px-6 border-t border-b border-gray-100">
        <motion.div 
          className="max-w-[980px] mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-semibold text-black mb-4"
          >
            ¿Listo para empezar?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-700 mb-8"
          >
            Explora nuestro catálogo completo de licencias
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/store" className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-colors shadow-md">
              Ver todas las licencias
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
    </PageTransition>
  );
};
