import React from 'react';
import { TrendingDown, DollarSign, Zap, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Energy Bills',
      description: 'Save up to 90% on your electricity bills with our high-efficiency solar panels.',
      percentage: '90%',
      color: 'text-green-500',
    },
    {
      icon: DollarSign,
      title: 'Increase Property Value',
      description: 'Solar installations can increase your property value by up to 20%.',
      percentage: '20%',
      color: 'text-blue-500',
    },
    {
      icon: Zap,
      title: 'Clean Energy Production',
      description: 'Generate clean, renewable energy and reduce your carbon footprint significantly.',
      percentage: '100%',
      color: 'text-orange-500',
    },
    {
      icon: Award,
      title: 'ROI in 5-7 Years',
      description: 'Typical payback period with government incentives and energy savings.',
      percentage: '5-7Y',
      color: 'text-purple-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Solar Energy?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Solar energy isn't just about being environmentally conscious—it's a smart financial 
            investment that pays dividends for decades to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-yellow-500 transition-all duration-300">
                <benefit.icon className={`w-12 h-12 ${benefit.color} group-hover:text-white transition-colors duration-300`} />
              </div>
              <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                {benefit.percentage}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
