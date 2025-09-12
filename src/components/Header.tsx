import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from '../../public/sharad-logo.png'; // Assuming you have a logo component or image
interface HeaderProps {
  openQueryModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ openQueryModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* <div className="text-2xl font-bold text-white">
            SHARAD<span className="text-gray-400">-SCRIPTWRITER</span>
          </div> */}
          <img src={Logo} alt="sharad" className="w-52 h-52 object-contain" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'Our-Offerings', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-yellow-400 hover:text-gray-300 transition-colors duration-200 capitalize"
              >
                {section.replace('-', ' ')}
              </button>
            ))}
          </nav>

          {/* Have Query Button - Desktop */}
          <button
            onClick={openQueryModal}
            className="hidden md:flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium"
          >
            <MessageCircle size={16} />
            <span>Have Query❓</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <nav className="px-4 py-6 space-y-4">
              {['home', 'about', 'services', 'Our-Offerings', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 capitalize text-left"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
              <button
                onClick={openQueryModal}
                className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-200 font-medium mt-4"
              >
                <MessageCircle size={16} />
                <span>Have Query</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;