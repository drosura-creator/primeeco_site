import React from 'react';
import { Home, Building2, Factory, Wrench, Calculator, Headphones, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar',
      description: 'Complete solar PV systems for homes with professional installation and maintenance.',
      features: ['Rooftop installations', 'Grid-tie systems', 'Battery backup options'],
    },
    {
      icon: Building2,
      title: 'Commercial Solar',
      description: 'Large-scale solar solutions for businesses looking to reduce operational costs.',
      features: ['Custom system design', 'Financial analysis', 'Monitoring systems'],
    },
    {
      icon: Factory,
      title: 'Industrial Solar',
      description: 'High-capacity solar installations for manufacturing and industrial facilities.',
      features: ['Megawatt installations', 'Load analysis', 'Grid integration'],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Professional maintenance services to keep your solar system performing optimally.',
      features: ['Regular inspections', 'Performance monitoring', 'Component replacement'],
    },
    {
      icon: Calculator,
      title: 'Energy Audits',
      description: 'Comprehensive energy assessments to optimize your solar investment.',
      features: ['Consumption analysis', 'ROI calculations', 'System sizing'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your solar energy needs.',
      features: ['Technical support', 'Emergency repairs', 'System monitoring'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our Solar PV Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From residential rooftops to large commercial installations, we provide comprehensive 
            solar energy solutions tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center space-x-2 group-hover:translate-x-2">
                <span>Learn More</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;