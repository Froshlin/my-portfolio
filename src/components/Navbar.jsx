import React from "react";

function Navbar() {

    const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];


  return (
    <div className="flex justify-between items-center w-full px-6 md:px-20 py-4 bg-[#111827] text-white">
      {/* Logo */}
      <div>
        <h1 className="text-5xl font-bold">Joshua Oni</h1>
      </div>
      {/* Menu Items */}
      <ul className="flex gap-8 text-xl">
        {menuItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-[#3676de] transition-colors duration-300"
            >
              {label}
            </a>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
