import { Link } from 'react-router-dom';
import { HiX, HiShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDropdown = ({ isOpen, onClose }: CartDropdownProps) => {
  const { cart, removeFromCart, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Dropdown */}
      <div className="fixed top-12 right-2 xs:right-3 sm:right-4 w-[calc(100vw-1rem)] xs:w-[calc(100vw-1.5rem)] sm:w-96 bg-white rounded-2xl xs:rounded-3xl shadow-2xl z-50 max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 xs:p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-black">Carrito de compras</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <HiX className="text-xl xs:text-2xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-3 xs:p-4 sm:p-6">
          {cart.length === 0 ? (
            <div className="text-center py-8 xs:py-10 sm:py-12">
              <HiShoppingBag className="text-4xl xs:text-5xl sm:text-6xl text-gray-300 mx-auto mb-3 xs:mb-4" />
              <p className="text-gray-500 text-sm xs:text-base">Tu carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-3 xs:space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-2 xs:gap-3 sm:gap-4 pb-3 xs:pb-4 border-b border-gray-100">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-black mb-1 text-sm xs:text-base truncate">{item.name}</h4>
                    <div className="flex items-center gap-2">
                      {item.originalPrice && (
                        <span className="text-xs xs:text-sm text-gray-400 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="font-semibold text-black text-sm xs:text-base">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                  >
                    <HiX className="text-lg xs:text-xl" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-3 xs:p-4 sm:p-6">
            <div className="flex items-center justify-between mb-3 xs:mb-4">
              <span className="text-base xs:text-lg font-medium text-black">Total:</span>
              <span className="text-xl xs:text-2xl font-semibold text-black">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="block w-full bg-blue-600 text-white text-center py-2.5 xs:py-3 rounded-full font-medium hover:bg-blue-700 transition-colors text-sm xs:text-base"
            >
              Proceder al pago
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
