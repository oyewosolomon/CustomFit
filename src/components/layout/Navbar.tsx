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
            {/* Logo */}
            <div className="flex-shrink-0">
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