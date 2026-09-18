import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-sm border-b border-line">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 text-ink">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a
            href="https://joshuaoni-portfolio.vercel.app/"
            className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold hover:text-accent transition-colors duration-300 cursor-pointer"
          >
            Joshua Oni
          </a>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-base xl:text-lg">
          {menuItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(href);
                }}
                className="text-muted hover:text-accent transition-colors duration-300 font-medium relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-ivory rounded-lg transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-ink" />
          ) : (
            <Menu size={24} className="text-ink" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-full left-0 w-full bg-paper border-b border-line shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {menuItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(href);
                    }}
                    className="block px-4 sm:px-6 md:px-12 py-4 text-lg text-ink font-medium hover:text-accent hover:bg-ivory transition-all duration-300 border-l-4 border-transparent hover:border-gold"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
