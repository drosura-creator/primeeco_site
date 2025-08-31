import { Calculator } from "lucide-react";

const SavingsButton: React.FC = () => {
  const openSavings = () =>
    window.dispatchEvent(new CustomEvent("open-savings-calculator"));

  return (
    <div
      className="
        fixed top-1/2 right-6 -translate-y-1/2 z-[100]
      "
    >
      <button
        onClick={openSavings}
        aria-label="Calculate Your Savings"
        className="
          group relative inline-flex h-14 w-14 items-center justify-center
          rounded-full bg-blue-600 text-white shadow-lg
          transition-transform hover:scale-110 hover:shadow-xl active:scale-95
          focus:outline-none focus:ring-4 focus:ring-blue-300/50
        "
      >
        {/* subtle pulse ring */}
        <span className="absolute inset-0 rounded-full bg-blue-500/40 animate-ping" />

        {/* Icon */}
        <Calculator size={26} />

        {/* Slide-out tooltip (desktop only) */}
        <span
          className="
            pointer-events-none
            absolute right-[calc(100%+0.5rem)] top-1/2 -translate-y-1/2
            rounded-full bg-slate-800 text-white text-xs font-medium
            px-3 py-1 shadow-md whitespace-nowrap
            opacity-0 translate-x-2 transition-all duration-200
            group-hover:opacity-100 group-hover:translate-x-0
            hidden md:inline-block
          "
        >
          Calculate Savings
        </span>
      </button>
    </div>
  );
};

export default SavingsButton;
