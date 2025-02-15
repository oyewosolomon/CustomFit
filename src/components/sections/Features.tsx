const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'AI-Driven Trading Signals',
      description: 'Leverage advanced algorithms to make informed trading decisions.',
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Risk Assessment',
      description: 'Mitigate risks with real-time market analysis.',
    },
    {
      icon: '📊',
      title: 'Portfolio Optimization',
      description: 'Maximize returns with tailored investment strategies.',
    },
    {
      icon: '🌍',
      title: 'Global Coverage',
      description: 'Trusted by institutions in 25 countries and counting.',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;