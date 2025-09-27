import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#111827]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 text-white">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hover:text-[#3676de] transition-colors duration-300 cursor-pointer">
            Joshua Oni
          </h1>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-lg xl:text-xl">
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(href);
                }}
                className="hover:text-[#3676de] transition-colors duration-300 font-medium relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3676de] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111827]/98 backdrop-blur-md border-b border-gray-800 shadow-2xl">
          <ul className="flex flex-col py-4">
            {menuItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(href);
                  }}
                  className="block px-4 sm:px-6 md:px-12 py-4 text-lg text-white font-medium hover:text-[#3676de] hover:bg-gray-800/50 transition-all duration-300 border-l-4 border-transparent hover:border-[#3676de]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;