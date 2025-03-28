import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    {
      name: 'Shop',
      href: '#',
      dropdownItems: [
        { name: "Men's Collection", href: '#mens' },
        { name: "Women's Collection", href: '#womens' },
        { name: 'Accessories', href: '#accessories' },
      ]
    },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-gray-900 to-gray-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex ">
           <svg fill={`${isScrolled ?'#000000':'#ffffff'}`} height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M320.001,0c-2.423,0-4.727,1.024-6.349,2.825c-0.742,0.828-17.331,20.019-18.756,54.101 c-16.307,12.339-29.184,27.29-38.827,40.841c-9.566-13.449-22.562-28.433-38.963-40.823 c-1.417-34.091-18.022-53.291-18.765-54.118C196.72,1.024,194.416,0,192.001,0C75.888,0,72.534,45.961,72.534,51.2 c0,4.71,3.823,8.533,8.533,8.533c3.268,0,80.128,0.768,95.36,61.653c0.017,0.077,0.068,0.137,0.094,0.213 c1.186,4.949,2.859,9.754,5.222,14.208c10.761,20.275,13.346,41.557,7.296,59.938c-4.693,14.259-11.947,30.268-21.743,47.906 c-0.76,1.519-18.441,37.914-0.683,91.068c0.257,1.102,25.388,110.653,25.388,168.748c0,4.719,3.814,8.533,8.533,8.533h51.2h59.733 c4.71,0,8.533-3.814,8.533-8.533c0-58.069,25.122-167.646,25.156-167.97c17.98-53.931,0.307-90.325-0.461-91.844 c-0.051-0.111-0.111-0.222-0.171-0.324c-9.626-17.331-16.879-33.34-21.572-47.582c-6.05-18.381-3.456-39.663,7.296-59.938 c2.355-4.437,4.019-9.207,5.205-14.14c0.034-0.102,0.102-0.188,0.128-0.29c15.224-60.877,92.075-61.645,95.343-61.645 c4.71,0,8.542-3.823,8.542-8.533C439.468,45.961,436.114,0,320.001,0z M320.351,108.092c-0.068,0.802-0.094,1.621-0.188,2.415 c-0.171,1.434-0.469,2.825-0.734,4.233c-0.879,4.634-2.15,9.096-4.258,13.073c-12.954,24.422-15.949,50.441-8.431,73.267 c5.009,15.206,12.655,32.119,22.733,50.295c1.033,2.244,14.601,33.408-0.725,79.505c-1.007,4.361-23.603,102.895-25.668,164.053 h-41.609c0.922-6.997,2.167-16.717,3.601-28.399c0.119-0.939,0.23-1.818,0.341-2.773c0.239-1.929,0.486-3.968,0.734-5.99 c0.171-1.459,0.341-2.876,0.529-4.386c0.239-2.048,0.495-4.19,0.751-6.323c0.188-1.621,0.375-3.217,0.572-4.89 c0.256-2.15,0.512-4.361,0.768-6.588c0.205-1.775,0.401-3.541,0.614-5.359c0.247-2.202,0.503-4.446,0.759-6.707 c0.222-1.997,0.444-3.985,0.666-6.025c0.256-2.244,0.503-4.514,0.751-6.81c0.23-2.099,0.461-4.207,0.691-6.34 c0.247-2.364,0.503-4.727,0.751-7.134c0.23-2.15,0.452-4.309,0.683-6.485c0.256-2.466,0.512-4.941,0.759-7.441 c0.23-2.202,0.452-4.42,0.666-6.647c0.256-2.526,0.503-5.06,0.759-7.62c0.213-2.236,0.427-4.48,0.64-6.733 c0.247-2.603,0.495-5.188,0.742-7.808c0.205-2.287,0.41-4.582,0.623-6.886c0.239-2.637,0.478-5.265,0.708-7.919 c0.188-2.176,0.375-4.361,0.563-6.545c0.239-2.807,0.478-5.615,0.708-8.439c0.154-1.843,0.29-3.695,0.444-5.538 c0.247-3.157,0.503-6.306,0.742-9.455c0.034-0.444,0.06-0.879,0.094-1.314c0.606-8.055,1.161-16.068,1.664-24.03 c0.077-1.169,0.154-2.355,0.23-3.524c0.188-3.021,0.35-6.007,0.512-9.003c0.111-1.843,0.222-3.703,0.316-5.53 c0.154-2.901,0.282-5.743,0.418-8.602c0.094-1.886,0.188-3.78,0.265-5.649c0.119-2.773,0.222-5.495,0.316-8.226 c0.077-1.903,0.145-3.814,0.205-5.692c0.085-2.654,0.154-5.24,0.213-7.834c0.051-1.911,0.102-3.823,0.137-5.7 c0.043-2.509,0.077-4.966,0.102-7.415c0.017-1.869,0.034-3.729,0.043-5.564c0.009-2.381,0.009-4.71-0.008-7.031 c-0.009-1.818-0.026-3.618-0.051-5.393c-0.034-2.227-0.077-4.42-0.137-6.579c-0.043-1.749-0.094-3.464-0.154-5.163 c-0.077-2.065-0.162-4.096-0.256-6.084c-0.085-1.69-0.188-3.32-0.29-4.949c-0.119-1.877-0.239-3.738-0.375-5.53 c-0.128-1.596-0.282-3.123-0.427-4.651c-0.162-1.681-0.324-3.362-0.512-4.958c-0.171-1.51-0.384-2.927-0.58-4.361 c-0.205-1.451-0.401-2.927-0.631-4.292c-0.239-1.451-0.521-2.756-0.785-4.105c-0.239-1.178-0.461-2.415-0.725-3.516 c-0.341-1.451-0.734-2.731-1.118-4.036c-0.239-0.819-0.452-1.715-0.708-2.475c-0.666-1.98-1.382-3.78-2.167-5.342 c-0.026-0.06-0.119-0.282-0.273-0.614c-0.905-2.048-4.301-9.387-10.24-19.345c9.617-14.464,23.62-31.676,41.916-44.757 c0.034-0.026,0.068-0.034,0.102-0.051c2.33-1.672,4.625-3.2,6.895-4.608c0.154,0.555,0.324,1.237,0.478,1.835 c0.307,1.143,0.623,2.295,0.93,3.558c0.273,1.101,0.538,2.304,0.802,3.482c0.213,0.973,0.435,1.954,0.648,2.978 c0.273,1.357,0.538,2.765,0.785,4.198c0.171,0.947,0.333,1.903,0.486,2.876c0.247,1.57,0.478,3.166,0.674,4.787 c0.102,0.862,0.179,1.732,0.265,2.603c0.179,1.775,0.358,3.558,0.461,5.367c0.026,0.41,0.008,0.811,0.026,1.212 C320.752,100.48,320.675,104.311,320.351,108.092z"></path> </g> </g> </g></svg>
              <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                CustomFit
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdownItems ? (
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center space-x-1 py-2 text-sm font-medium ${
                        isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className={`py-2 text-sm font-medium ${
                        isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                      }`}
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdownItems && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1" role="menu">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                <ShoppingCart className={isScrolled ? 'text-gray-700' : 'text-white'} />
              </button>
              <button className={`p-2 rounded-full ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`}>
                <User className={isScrolled ? 'text-gray-700' : 'text-white'} />
              </button>
              <button className={`px-4 py-2 rounded-lg ${
                isScrolled 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}>
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdownItems ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {link.name}
                    </button>
                    {isDropdownOpen && (
                      <div className="pl-4">
                        {link.dropdownItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {link.name}
                  </a>
                )}
              </React.Fragment>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart className="text-gray-700" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <User className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;