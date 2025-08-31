import React, { useEffect, useState } from 'react';
import { ExternalLink, MapPin, Zap, X } from 'lucide-react';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: 'Residential Villa - Colombo',
      slug: 'residential-villa-colombo',
      location: 'Colombo 07',
      capacity: '8.5 kW',
      image: 'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Modern villa with rooftop solar installation reducing electricity bills by 85%.',
      savings: '85% reduction in bills',
      completedOn: 'May 2025',
      specs: {
        panels: 'JA Solar 425 W x 20',
        inverter: 'Huawei SUN2000-8KTL',
        mounting: 'Rooftop, aluminum rails',
        battery: '—',
        monitoring: 'Huawei FusionSolar (App + Web)',
      },
      performance: {
        monthlyKWh: '~1,050 kWh',
        co2SavedPerYear: '~8.5 tons',
        payback: '3.8 years (est.)',
      },
      gallery: [
        'https://images.pexels.com/photos/9875421/pexels-photo-9875421.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/9875423/pexels-photo-9875423.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/9875426/pexels-photo-9875426.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      testimonial:
        '“PrimeEco handled everything from design to approvals. Our bills dropped drastically within the first month.” — Homeowner',
    },
    {
      title: 'Commercial Building - Kandy',
      slug: 'commercial-building-kandy',
      location: 'Kandy City',
      capacity: '25 kW',
      image: 'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Office complex with comprehensive solar solution and battery backup system.',
      savings: '60% energy cost reduction',
      completedOn: 'Jan 2025',
      specs: {
        panels: 'Trina 550 W x 46',
        inverter: 'Sungrow SG25RT',
        mounting: 'Rooftop, ballast mounting',
        battery: 'Sungrow SBR 19.2 kWh',
        monitoring: 'Sungrow iSolarCloud',
      },
      performance: {
        monthlyKWh: '~2,900 kWh',
        co2SavedPerYear: '~23 tons',
        payback: '4.2 years (est.)',
      },
      gallery: [
        'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/9875428/pexels-photo-9875428.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      testimonial:
        '“Reliable installation and superb support. Battery backup keeps us running during outages.” — Facilities Manager',
    },
    {
      title: 'Factory Installation - Galle',
      slug: 'factory-installation-galle',
      location: 'Galle Industrial Zone',
      capacity: '150 kW',
      image: 'https://images.pexels.com/photos/9875425/pexels-photo-9875425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Large-scale industrial solar installation with smart monitoring systems.',
      savings: '40% operational cost savings',
      completedOn: 'Aug 2024',
      specs: {
        panels: 'Jinko 565 W x 266',
        inverter: 'Huawei SUN2000-100KTL + 50KTL',
        mounting: 'Structural steel + clamps',
        battery: '—',
        monitoring: 'SCADA + FusionSolar',
      },
      performance: {
        monthlyKWh: '~18,500 kWh',
        co2SavedPerYear: '~145 tons',
        payback: '3.2 years (est.)',
      },
      gallery: [
        'https://images.pexels.com/photos/9875425/pexels-photo-9875425.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      testimonial:
        '“Significant reduction in peak demand charges. The monitoring is top-notch.” — Plant Director',
    },
    {
      title: 'Hotel Resort - Negombo',
      slug: 'hotel-resort-negombo',
      location: 'Negombo Beach',
      capacity: '75 kW',
      image: 'https://images.pexels.com/photos/9875422/pexels-photo-9875422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Luxury resort with integrated solar solution maintaining aesthetic appeal.',
      savings: '70% energy independence',
      completedOn: 'Mar 2025',
      specs: {
        panels: 'Canadian Solar 540 W x 140',
        inverter: 'GoodWe GW75K-ET',
        mounting: 'Low-profile rooftop',
        battery: 'GoodWe Lynx 28.8 kWh',
        monitoring: 'SEMS Portal',
      },
      performance: {
        monthlyKWh: '~8,900 kWh',
        co2SavedPerYear: '~70 tons',
        payback: '3.9 years (est.)',
      },
      gallery: [
        'https://images.pexels.com/photos/9875422/pexels-photo-9875422.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
        'https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      ],
      testimonial:
        '“Discreet, elegant, and powerful—fits perfectly with our brand.” — General Manager',
    },
  ];

  // Lock page scroll while modal is open
  useEffect(() => {
    if (selected) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => (document.body.style.overflow = '');
  }, [selected]);

  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Featured Solar Projects
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Explore some of our successful solar installations across Sri Lanka. 
            Each project demonstrates our commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Smaller cards + 3 cols on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                  {project.capacity}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>

                <div className="flex flex-wrap items-center gap-4 mb-3 text-slate-600">
                  <div className="flex items-center gap-1.5 text-sm">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Zap size={16} />
                    <span>{project.capacity}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-green-600">{project.savings}</div>
                </div>

                <button
                  onClick={() => setSelected(project)}
                  className="flex items-center gap-2 text-orange-500 text-sm font-semibold hover:text-orange-600 transition-all duration-300 group-hover:translate-x-1"
                >
                  <span>View Project Details</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-7 py-3 rounded-full text-base font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const [hero, setHero] = useState(project.gallery?.[0] || project.image);

  return (
    <div
  className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:py-10"
  aria-modal="true"
  role="dialog"
>
  {/* Overlay */}
  <div
    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
    onClick={onClose}
  />

  {/* Card: now smaller */}
  <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden max-h-[85vh]">
    {/* Close */}
    <button
      onClick={onClose}
      className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full p-2 hover:bg-slate-100 text-slate-600"
    >
      <X size={18} />
    </button>

    {/* Image */}
    <div className="relative">
      <img
        src={hero}
        alt={project.title}
        className="w-full h-56 md:h-64 object-cover"
      />
      <div className="absolute top-4 left-4 bg-white/90 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
        {project.location}
      </div>
      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
        {project.capacity}
      </div>
    </div>

    {/* Content (scroll if needed) */}
    <div className="p-5 md:p-6 overflow-y-auto max-h-[calc(85vh-15rem)] text-sm">
      <h3 className="text-xl md:text-2xl font-bold text-slate-800">{project.title}</h3>
      <p className="text-slate-600 mt-2">{project.description}</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <Stat label="Completed" value={project.completedOn} />
        <Stat label="Payback" value={project.performance?.payback} />
        <Stat label="CO₂ Saved" value={project.performance?.co2SavedPerYear} />
      </div>

      {/* Specs */}
      <div className="mt-5 rounded-lg border border-slate-200">
        <div className="px-3 py-2 bg-slate-50 font-semibold text-sm rounded-t-lg">System Specifications</div>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <Spec label="Panels" value={project.specs?.panels} />
          <Spec label="Inverter" value={project.specs?.inverter} />
          <Spec label="Mounting" value={project.specs?.mounting} />
          <Spec label="Battery" value={project.specs?.battery} />
          <Spec label="Monitoring" value={project.specs?.monitoring} />
        </div>
      </div>

      {/* Performance */}
      <div className="mt-5 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-3">
        <div className="font-semibold text-sm">Performance & Benefits</div>
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <Spec label="Monthly Gen." value={project.performance?.monthlyKWh} />
          <Spec label="CO₂ Reduction" value={project.performance?.co2SavedPerYear} />
          <Spec label="Savings" value={project.savings} />
        </div>
      </div>

      {/* Testimonial */}
      {project.testimonial && (
        <blockquote className="mt-5 p-3 border-l-4 border-green-600 bg-green-50 text-slate-700 italic rounded-r-md text-xs">
          {project.testimonial}
        </blockquote>
      )}

      {/* CTA */}
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-95"
        >
          Get a Similar System
        </a>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

const Stat = ({ label, value }) => (
  <div className="rounded-xl border border-slate-200 p-3">
    <div className="text-xs text-slate-500">{label}</div>
    <div className="text-sm font-semibold text-slate-800">{value || '—'}</div>
  </div>
);

const Spec = ({ label, value }) => (
  <div className="flex items-start gap-2">
    <div className="w-28 shrink-0 text-slate-500">{label}</div>
    <div className="font-medium text-slate-800">{value || '—'}</div>
  </div>
);

export default Projects;
