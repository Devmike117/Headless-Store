import { Link } from 'react-router-dom';
import { HiArrowLeft, HiChevronDown } from 'react-icons/hi2';
import { PageTransition } from '@/components/PageTransition';
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Confianza y Seguridad",
      questions: [
        {
          q: "¿Quién es Devmike117?",
          a: "Soy ingeniero en sistemas computacionales especializado en desarrollo web y software. Me dedico a crear soluciones digitales profesionales y ofrecer servicios técnicos especializados."
        },
        {
          q: "¿Por qué debería confiar en tus servicios?",
          a: "Trabajo con transparencia total: precios claros, sin cargos ocultos. Solo cobro si resuelvo tu problema. Además, ofrezco garantía en todos mis servicios y mantengo comunicación constante durante el proceso."
        },
        {
          q: "¿Cómo protegen mis datos personales?",
          a: "Implemento medidas de seguridad estrictas. Tu información personal está protegida y nunca la comparto con terceros. Los pagos son procesados por plataformas certificadas y seguras."
        },
        {
          q: "¿Qué experiencia tienes?",
          a: "Soy ingeniero en sistemas computacionales con experiencia profesional en Microsoft, Gobierno de México (centro de comando y control), desarrollo full-stack para cadenas de restaurantes y proyectos freelance como desarrollador."
        },
        {
          q: "¿Son legítimas las licencias que vendes?",
          a: "Sí, todas las licencias y productos digitales son completamente legítimos y provienen de canales autorizados. No vendemos software pirata ni claves ilegales."
        }
      ]
    },
    {
      category: "Tienda",
      questions: [
        {
          q: "¿Cómo compro productos en la tienda?",
          a: "Navega por nuestro catálogo, agrega productos al carrito y procede al checkout. Aceptamos múltiples métodos de pago seguros."
        },
        {
          q: "¿Cuándo recibo mis licencias/productos digitales?",
          a: "Los productos digitales se entregan inmediatamente después de confirmar el pago. Recibirás un email con las instrucciones y códigos."
        },
        {
          q: "¿Puedo devolver un producto digital?",
          a: "Por su naturaleza digital, las licencias no tienen devolución una vez entregadas, salvo que el producto sea defectuoso o no funcione según lo descrito."
        }
      ]
    },
    {
      category: "Servicios",
      questions: [
        {
          q: "¿Cuánto tarda un servicio de reparación?",
          a: "Depende del servicio. Servicios básicos toman 1-2 días, mientras que recuperación de datos o reparaciones complejas pueden tomar 5-7 días."
        },
        {
          q: "¿Ofrecen garantía en los servicios?",
          a: "Sí, todos los servicios incluyen garantía. El tiempo varía según el servicio: 30 días para reparaciones, 3 meses para desarrollo web."
        },
        {
          q: "¿Hacen visitas a domicilio?",
          a: "Algunos servicios están disponibles a domicilio con cargo adicional. Contáctame para consultar disponibilidad en tu zona."
        },
        {
          q: "¿Qué pasa si no pueden resolver mi problema?",
          a: "Si no puedo resolver el problema, no cobro el servicio. Para recuperación de datos, solo pagas si logro recuperar tu información."
        }
      ]
    },
    {
      category: "Pagos",
      questions: [
        {
          q: "¿Qué métodos de pago aceptan?",
          a: "Aceptamos tarjetas de crédito/débito, Apple Pay, Google Pay y transferencias bancarias. Los pagos son procesados de forma segura."
        },
        {
          q: "¿Los precios incluyen IVA?",
          a: "Sí, todos los precios mostrados incluyen IVA cuando aplica."
        },
        {
          q: "¿Puedo pagar en cuotas?",
          a: "Dependiendo del método de pago y tu banco, puedes configurar meses sin intereses. Esto se gestiona directamente con tu institución financiera."
        }
      ]
    },
    {
      category: "Soporte",
      questions: [
        {
          q: "¿Cómo me comunico con soporte?",
          a: (
            <>
              Puedes contactarme a través del formulario de contacto, Telegram (@devmike117), o por email: <a href="mailto:devmike117@icloud.com" className="text-blue-600 hover:underline">devmike117@icloud.com</a>. Respondo en menos de 24 horas.
            </>
          )
        },
        {
          q: "¿Dan capacitación o asesoría?",
          a: "Sí, ofrezco sesiones de capacitación y asesoría técnica. Contáctame para más información sobre horarios y tarifas."
        },
        {
          q: "¿Tienen servicio de mantenimiento preventivo?",
          a: "Sí, ofrezco planes de mantenimiento mensual/trimestral para empresas y usuarios que quieren mantener sus equipos en óptimas condiciones."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="text-5xl font-semibold text-black mb-6">Preguntas Frecuentes</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Secciones de preguntas frecuentes */}
        <div className="max-w-[980px] mx-auto px-6 pb-16">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className={sectionIndex % 2 === 1 ? "bg-gray-50 -mx-6 px-6 py-12" : "py-12"}>
              <h2 className="text-3xl font-semibold text-black mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.questions.map((faq, faqIndex) => {
                  const globalIndex = sectionIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  return (
                    <div key={faqIndex} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-black pr-4">{faq.q}</h3>
                        <HiChevronDown 
                          className={`text-gray-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                          size={24}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="text-gray-600 leading-relaxed">{faq.a}</div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contacto CTA */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-black mb-4">¿No encontraste lo que buscabas?</h2>
            <p className="text-xl text-gray-600 mb-8">Contáctame directamente y te ayudaré con tu consulta</p>
            <Link 
              to="/contacto" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
