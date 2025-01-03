import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaCompass, FaBook, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="glass-effect sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          MusicStream
        </Link>
        
        <div className="flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`
            }
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/explore" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`
            }
          >
            <FaCompass className="text-xl" />
            <span>Explore</span>
          </NavLink>
          
          <NavLink 
            to="/library" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`
            }
          >
            <FaBook className="text-xl" />
            <span>Library</span>
          </NavLink>
          
          <NavLink 
            to="/profile" 
            className={({ isActive }) => 
              `flex items-center space-x-2 ${isActive ? 'text-primary' : 'text-white hover:text-primary'}`
            }
          >
            <FaUser className="text-xl" />
            <span>Profile</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
