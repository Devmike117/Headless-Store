import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const Careers = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
        {/* Botón de regreso */}
        <div className="max-w-[980px] mx-auto px-6 pt-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <HiArrowLeft className="mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <h1 className="text-5xl font-semibold text-black mb-6">Colaboración</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Trabaja conmigo y construyamos juntos el futuro de la tecnología.
          </p>
        </div>

        {/* Por qué unirse */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-6">¿Por qué trabajar conmigo?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Busco personas apasionadas por la tecnología que quieran marcar la diferencia. 
              Si te gusta resolver problemas, aprender constantemente y trabajar en proyectos desafiantes, 
              podemos colaborar juntos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Trabajo remoto</h3>
                <p className="text-gray-600">Trabaja desde donde quieras con horarios flexibles.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Crecimiento profesional</h3>
                <p className="text-gray-600">Aprende nuevas tecnologías y desarrolla tus habilidades.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Proyectos variados</h3>
                <p className="text-gray-600">Desde desarrollo web hasta soporte técnico avanzado.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-black mb-2">Ambiente colaborativo</h3>
                <p className="text-gray-600">Trabajo directo donde tu voz importa y tu trabajo cuenta.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posiciones abiertas */}
        <div className="py-16">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl font-semibold text-black mb-8">Posiciones abiertas</h2>
            <div className="bg-gray-50 rounded-3xl p-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Actualmente no tenemos posiciones abiertas, pero siempre estamos interesados en conocer talento excepcional.
              </p>
              <Link 
                to="/contacto" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Envíanos tu CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
