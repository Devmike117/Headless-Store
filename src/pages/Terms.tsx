import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';

export const Terms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-12">
        {/* Back Button */}
        <div className="max-w-[980px] mx-auto px-6 pt-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <HiArrowLeft className="mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-[980px] mx-auto px-6 py-12">
          <h1 className="text-5xl font-semibold text-black mb-6">Términos y Condiciones</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Al usar mis servicios, aceptas estos términos. Última actualización: {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-[980px] mx-auto px-6 pb-16">
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Uso de servicios</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Al contratar mis servicios, te comprometes a:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Proporcionar información veraz y actualizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Realizar el pago acordado en tiempo y forma</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Usar los servicios de manera legal y ética</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mantener respaldos de tu información importante</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Precios y pagos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Los precios mostrados están en pesos mexicanos (MXN) e incluyen IVA cuando aplica. 
                Me reservo el derecho de modificar precios sin previo aviso, aunque los servicios 
                ya contratados mantendrán el precio acordado.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Los pagos se procesan a través de plataformas seguras. Para servicios técnicos, 
                puede requerirse un anticipo antes de comenzar el trabajo.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Productos digitales</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Los productos digitales (licencias de software, claves de juegos, etc.) son finales 
                una vez entregados. Por su naturaleza digital, no aplican devoluciones salvo que el 
                producto sea defectuoso o no funcione según lo descrito.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Es tu responsabilidad verificar los requisitos del sistema antes de la compra.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Servicios técnicos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Para servicios de reparación, mantenimiento o desarrollo:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Los tiempos de entrega son estimados y pueden variar según la complejidad</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Te mantendré informado del progreso de tu servicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Los equipos no reclamados después de 30 días pueden ser dados de baja</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>No nos hacemos responsables por pérdida de datos si no existe respaldo previo</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Garantías</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Los servicios de reparación y mantenimiento incluyen garantía según lo especificado en cada caso. 
                Para desarrollo web, ofrezco soporte post-lanzamiento según el plan contratado. Las garantías 
                no cubren daños causados por mal uso, modificaciones no autorizadas o accidentes.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Limitación de responsabilidad</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Trabajo con el mayor cuidado, pero no puedo garantizar resultados específicos en todos los casos. 
                Mi responsabilidad se limita al monto pagado por el servicio. No me hago responsable por 
                daños indirectos, pérdida de datos o lucro cesante.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold text-black mb-4">Modificaciones</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Me reservo el derecho de modificar estos términos en cualquier momento. Los cambios entrarán 
                en vigor inmediatamente después de su publicación. El uso continuado de mis servicios implica 
                la aceptación de los términos actualizados.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold text-black mb-4">¿Dudas sobre los términos?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Si tienes preguntas sobre estos términos y condiciones, no dudes en contactarme:
              </p>
              <Link 
                to="/contacto" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
