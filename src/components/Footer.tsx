export const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="max-w-[980px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="text-[12px] font-semibold text-black mb-3">Tienda</h4>
            <ul className="space-y-2">
              <li><a href="/store" className="text-[12px] text-gray-600 hover:text-black">Productos</a></li>
              <li><a href="/store" className="text-[12px] text-gray-600 hover:text-black">Ofertas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-black mb-3">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="/servicios/desarrollo-web" className="text-[12px] text-gray-600 hover:text-black">Desarrollo Web</a></li>
              <li><a href="/servicios/eliminacion-virus" className="text-[12px] text-gray-600 hover:text-black">Eliminación de Virus</a></li>
              <li><a href="/servicios/mantenimiento-pc" className="text-[12px] text-gray-600 hover:text-black">Mantenimiento PC</a></li>
              <li><a href="/servicios/recuperacion-datos" className="text-[12px] text-gray-600 hover:text-black">Recuperación de Datos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-black mb-3">Soporte</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-[12px] text-gray-600 hover:text-black">Contacto</a></li>
              <li><a href="/faq" className="text-[12px] text-gray-600 hover:text-black">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-black mb-3">Empresa</h4>
            <ul className="space-y-2">
              <li><a href="/acerca" className="text-[12px] text-gray-600 hover:text-black">Acerca de</a></li>
              <li><a href="/carreras" className="text-[12px] text-gray-600 hover:text-black">Carreras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-black mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacidad" className="text-[12px] text-gray-600 hover:text-black">Privacidad</a></li>
              <li><a href="/terminos" className="text-[12px] text-gray-600 hover:text-black">Términos</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-5">
          <p className="text-[12px] text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Devmike117 Store. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
