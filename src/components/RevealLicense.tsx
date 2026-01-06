import { useState, useRef } from 'react';
import { HiInformationCircle } from 'react-icons/hi';

export function RevealLicense({ licenseKey }: { licenseKey: string }) {
  const [revealed, setRevealed] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const [showModal, setShowModal] = useState(false);
  const handleMouseDown = () => {
    timeoutRef.current = window.setTimeout(() => {
      setRevealed(true);
      setUnlocked(true);
      setShowModal(true);
    }, 800);
  };
  const closeModal = () => setShowModal(false);
  const handleMouseUp = () => {
    if (!unlocked) setRevealed(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="mb-4">
      <p className="text-gray-600 text-xs mb-1 font-medium">Clave de licencia:</p>
      <div className="bg-gray-100 p-3 rounded-xl border border-gray-200 select-none">
        <code className="text-gray-800 text-sm font-mono font-semibold">
          {revealed || unlocked ? licenseKey : '••••••••••••••••••••••••••••••••••••••••'}
        </code>
      </div>
      <button
        className={`mt-2 w-full py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-1 transition-colors ${unlocked ? 'bg-gray-300 text-gray-700 cursor-default' : 'bg-blue-600 hover:bg-blue-700 text-white active:bg-blue-800'}`}
        onMouseDown={unlocked ? undefined : handleMouseDown}
        onMouseUp={unlocked ? undefined : handleMouseUp}
        onMouseLeave={unlocked ? undefined : handleMouseUp}
        disabled={unlocked}
      >
        {unlocked ? (
          <>
            <HiInformationCircle /> Clave destapada
          </>
        ) : (
          <>
            <HiInformationCircle /> Mantén presionado para activar
          </>
        )}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-xs w-full text-center">
            <h2 className="text-lg font-bold mb-2 text-red-600">¡Atención!</h2>
            <p className="text-gray-700 mb-4 text-sm">Una vez destapada la clave, <b>no hay cambios ni devoluciones</b>. Por favor, asegúrate antes de continuar.</p>
            <button
              className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
              onClick={closeModal}
              autoFocus
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
