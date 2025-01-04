import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaCompass, FaBook, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { to: '/', icon: FaHome, label: 'Home' },
    { to: '/explore', icon: FaCompass, label: 'Explore' },
    { to: '/library', icon: FaBook, label: 'Library' },
    { to: '/profile', icon: FaUser, label: 'Profile' }
  ];

  const NavItem = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      onClick={() => setIsOpen(false)}
      className={({ isActive }) =>
        `flex items-center space-x-2 p-2 rounded-lg transition-colors ${
          isActive ? 'text-primary' : 'text-white hover:text-primary'
        }`
      }
    >
      <Icon className="text-xl" />
      <span>{label}</span>
    </NavLink>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          {/* Desktop and Mobile Header */}
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              MusicStream
            </Link>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-primary focus:outline-none"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transform transition-transform ${
                    isOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transition-opacity ${
                    isOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current transform transition-transform ${
                    isOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden bg-background"
              >
                <div className="flex flex-col space-y-2 pt-4">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.to}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <NavItem {...item} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {/* Spacer div to prevent content from going under navbar */}
      <div className="h-[72px]" /> {/* Adjust this height to match your navbar height */}
    </>
  );
};

export default Navbar;
