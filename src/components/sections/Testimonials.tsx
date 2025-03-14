// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      quote: "The fit is incredible, and the quality is unmatched!",
      author: "Emily R.",
      role: "Fashion Blogger",
      image: "https://randomuser.me/api/portraits/men/71.jpg"
    },
    {
      quote: "Finally, clothes that are made just for me. Highly recommend!",
      author: "James K.",
      role: "Business Professional",
      image: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      quote: "I've never had a better fit! CustomFit Direct is a game-changer.",
      author: "Sarah T.",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/men/73.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Loved by Thousands of Happy Customers</h2>
          <p className="text-xl text-gray-300">Join our community of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Testimonials