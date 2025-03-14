import React, { useState, FormEvent, ChangeEvent } from 'react';
import { MapPin, Phone, Mail, Star, X } from 'lucide-react';

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col" id='contact'>
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row flex-grow gap-8">
          {/* Left Side - Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center rounded-3xl bg-gray-300 overflow-hidden">
            <img 
              src="/images/d.jpg" 
              alt="Customer support representative" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Send us a message</h2>
            <p className="text-gray-600 mb-8">Your satisfaction is our top priority, and we are committed to providing exceptional service and support</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Contact Info Section */}
        <div className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-orange-100 rounded-full p-3 mb-2">
                  <MapPin className="text-orange-500 w-6 h-6" />
                </div>
                <span className="text-sm text-gray-600">Address</span>
                <p className="text-xs text-gray-500">789 Oak Lane, Lakeside, TX 54321</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-3 mb-2">
                  <Phone className="text-blue-500 w-6 h-6" />
                </div>
                <span className="text-sm text-gray-600">Contact</span>
                <p className="text-xs text-gray-500">1800-2541-2541, 1800-14-0147</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-3 mb-2">
                  <Mail className="text-green-500 w-6 h-6" />
                </div>
                <span className="text-sm text-gray-600">Email</span>
                <p className="text-xs text-gray-500">pagedone1234@gmail.com</p>
              </div>
              <div 
                className="flex flex-col items-center cursor-pointer"
                onClick={openMapModal}
              >
                <div className="bg-pink-100 rounded-full p-3 mb-2">
                  <Star className="text-pink-500 w-6 h-6" />
                </div>
                <span className="text-sm text-gray-600">Google Map</span>
                <a className="text-xs text-indigo-600 hover:underline">Discover our prime location</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-xl">
            <button 
              onClick={closeMapModal}
              className="absolute top-4 right-4 z-60 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123!2d-97.7345!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzM2LjciTiA5N8KwNDMnMzAuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;