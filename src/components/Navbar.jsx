import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" }
  ];

  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black text-white sticky top-0 z-50 border-b border-gray-800">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-primary">
        FizTECH
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        {navItems.map((item, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.2, color: "#E11D48" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            {item.path.startsWith("#") ? (
              <a href={item.path}>{item.name}</a>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Get Started Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
        href="#contact"
      >
        Get Started
      </motion.a>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-10 md:hidden border-t border-gray-800"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, color: "#E11D48" }}
              >
                {item.path.startsWith("#") ? (
                  <a href={item.path} onClick={() => setOpen(false)}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="bg-primary px-6 py-2 rounded-lg"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}