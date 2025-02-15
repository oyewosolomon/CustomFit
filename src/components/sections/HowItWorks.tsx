import React, { useState, useEffect } from 'react';
import { Scan, Palette, Box, Star, Scale, Award, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// How It Works Section
const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting)
    );
    
    const element = document.getElementById('how-it-works');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Scan className="w-8 h-8" />,
      title: "Scan Your Body",
      description: "Use our AI-powered 3D body scanner to capture precise measurements from the comfort of your home."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Customize Your Style",
      description: "Choose from a wide range of fabrics, colors, and designs. Tailor every detail to your liking."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Receive and Enjoy",
      description: "Your custom clothing is crafted by our expert manufacturers and delivered to your doorstep in just 2 weeks."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Perfect Fit in 3 Easy Steps</h2>
          <p className="text-xl text-gray-600">Experience seamless custom clothing creation</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="relative h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-fit mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
