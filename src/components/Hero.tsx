import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  /*const location = useLocation();

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
    return false;
  };

  const goToOrScroll = async (path: string, id: string) => {
    if (location.pathname === path) {
      if (!smoothScrollTo(id)) setTimeout(() => smoothScrollTo(id), 50);
    } else {
      navigate(path);
      setTimeout(() => smoothScrollTo(id), 60);
    }
  };*/

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-green-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Solar panels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating accents (click-through) */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-bounce pointer-events-none"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-orange-400 rounded-full opacity-20 animate-pulse delay-1000 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Power Your Future with
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent block">
              Clean Solar Energy
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            Transform your home or business with premium solar PV solutions.
            Reduce energy costs, increase property value, and contribute to a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Get Free Quote → scroll to #contact */}
            <button
             onClick={() => navigate("/contact")}
             className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
             <span>Get Free Quote</span>
             <ArrowRight size={20} />
             </button>

            {/* View our work → scroll to #projects */}
            <button
             onClick={() => navigate("/projects")}
             className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300"
             >
             View Our Work
             </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">High Efficiency</h3>
              <p className="text-green-100">Premium solar panels with industry-leading efficiency rates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">25-Year Warranty</h3>
              <p className="text-green-100">Comprehensive warranty coverage for complete peace of mind</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
              <p className="text-green-100">Reduce your carbon footprint and energy bills simultaneously</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
