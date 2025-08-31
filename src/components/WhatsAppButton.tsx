import { MessageCircle } from "lucide-react";

const WhatsAppButton: React.FC = () => {
  // Replace with your actual number, format: countrycode + number (no +, no spaces)
  const phoneNumber = "94712048868"; 
  const message = "Hello! I'm interested in solar solutions from PrimeEco.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping"></span>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg
                   transition-transform hover:scale-110 hover:shadow-xl active:scale-95"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
