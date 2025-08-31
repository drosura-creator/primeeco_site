import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import SavingsCalculator from "./SavingsCalculator";

const SavingsCalculatorModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for global event dispatched by Hero button
  useEffect(() => {
    const openHandler = () => setIsOpen(true);
    window.addEventListener("open-savings-calculator", openHandler);
    return () => {
      window.removeEventListener("open-savings-calculator", openHandler);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-2 sm:px-4 py-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <div
            className="
              relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:w-[95%] md:max-w-5xl 
              bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-y-auto
            "
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100 text-slate-600"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Calculator inside */}
            <SavingsCalculator />
          </div>
        </div>
      )}
    </>
  );
};

export default SavingsCalculatorModal;
