const Resources = () => {
    const resources = [
      {
        type: 'Blog',
        title: 'Top 5 AI Trends in Financial Markets',
        link: '#',
      },
      {
        type: 'Whitepaper',
        title: 'The Future of Portfolio Optimization',
        link: '#',
      },
      {
        type: 'Webinar',
        title: 'Mastering Risk Assessment with AI',
        link: '#',
      },
    ];
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Knowledge Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-sm text-gray-500 mb-2">{resource.type}</p>
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <a href={resource.link} className="text-yellow-400 hover:text-yellow-500 transition duration-300">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Resources;