import React from 'react';
import { Users, Clock, Award, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Customers' },
    { icon: Clock, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Target, value: '1MW+', label: 'Solar Installed' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Leading Sri Lanka's
              <span className="text-green-600"> Solar Revolution</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Prime Eco is a pioneering solar PV company committed to delivering sustainable 
              energy solutions across Sri Lanka. We combine cutting-edge technology with 
              exceptional service to help homes and businesses transition to clean energy.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Expert Installation</h4>
                  <p className="text-slate-600">Certified technicians with years of solar installation experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Premium Components</h4>
                  <p className="text-slate-600">We use only top-tier solar panels and inverters from trusted manufacturers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Ongoing Support</h4>
                  <p className="text-slate-600">Comprehensive maintenance and monitoring services for optimal performance</p>
                </div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/9875419/pexels-photo-9875419.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Solar panel installation"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">ISO 9001</div>
              <div className="text-slate-600 font-semibold">Certified Quality</div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;