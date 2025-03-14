import React from 'react';
import { Target, Users, Lightbulb, Recycle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: "Precision and Quality",
      description: "We combine cutting-edge AI technology with expert craftsmanship to deliver perfectly fitted garments every time."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Customer Satisfaction",
      description: "Our 95% satisfaction rate speaks to our commitment to exceeding customer expectations in every interaction."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-blue-500" />,
      title: "Innovation and Technology",
      description: "Our AI-powered platform revolutionizes the custom clothing industry with precise measurements and perfect fits."
    },
    {
      icon: <Recycle className="w-6 h-6 text-blue-500" />,
      title: "Sustainability",
      description: "By producing only what customers need, we're reducing waste and promoting sustainable fashion practices."
    }
  ];

  const stats = [
    { number: "200+", label: "Manufacturing Partners" },
    { number: "50k+", label: "Happy Customers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "2", label: "Week Delivery" }
  ];

  const leadershipTeam = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      description: "15+ years experience in AI and computer vision technology",
      image: "/images/aa.jpg"
    },
    {
      name: "Michael Smith",
      role: "Chief Executive Officer",
      description: "20+ years experience in business strategy and leadership",
      image: "/images/bb.jpg"
    },
    {
      name: "Emily Davis",
      role: "Chief Marketing Officer",
      description: "10+ years experience in digital marketing and brand management",
      image: "/images/cc.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission: Redefining Custom Clothing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CustomFit Direct was founded with a vision to merge cutting-edge technology with the art of custom tailoring.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/images/direct.jpg" 
                alt="CustomFit Direct Workshop" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                <p className="text-gray-600">
                  Founded in 2023, CustomFit Direct emerged from a simple observation: traditional 
                  clothing sizes don't reflect the unique dimensions of real people. By combining 
                  AI technology with traditional tailoring expertise, we've created a revolutionary 
                  platform that delivers perfectly fitted clothing to everyone.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/images/ai-tech.jpg" 
                alt="AI Technology" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Our Technology</h3>
                <p className="text-gray-600">
                  Our proprietary AI-powered 3D body scanning technology captures precise measurements 
                  with 99% accuracy. Combined with our network of over 200 expert manufacturers, 
                  we deliver custom-fitted clothing that exceeds expectations in quality and comfort.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-500 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do at CustomFit Direct
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-50 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-24 text-center">
          <h3 className="text-3xl font-semibold mb-4">Meet Our Leadership</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Our diverse team brings together expertise in technology, fashion, and customer service
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
      {leadershipTeam.map((member, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-0">
            <img 
              src={member.image} 
              alt={`Team Member ${member.name}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
              <p className="text-gray-500 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;