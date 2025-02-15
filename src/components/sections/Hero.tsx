import React, { useState, useEffect } from 'react';
import { Camera, Ruler, Clock, ThumbsUp } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "AI-Powered Precision",
      description: "Accurate 3D body scanning"
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Custom Tailoring",
      description: "200+ partnered manufacturers"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Delivered within 2 weeks"
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "High Satisfaction",
      description: "95% customer satisfaction"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Perfect Fit.</span>
              <span className="block text-blue-400">Every Time.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              Experience the future of fashion with AI-powered 3D body scanning and custom-tailored clothing delivered in just 2 weeks.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors duration-200 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              How It Works
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-500 hover:scale-105 hover:bg-white/20
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-500/20 rounded-lg p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* 3D Model Preview Placeholder */}
          <div className="relative mt-16 h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/dash.jpg"
                alt="3D Body Scanner Demo"
                className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <p className="absolute bottom-4 left-4 text-lg font-medium">Experience our AI-powered 3D body scanner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;