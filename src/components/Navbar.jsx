import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import myLogo from '../assets/simo1.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle the click on a link and set it as active
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // Define your navigation links
  const links = [
    { to: '/', label: 'Home' },
    { to: '/video', label: 'Videos' },
    { to: '/lessons', label: 'Lessons' },
    { to: '/merch', label: 'Merch' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <div className='bg-slate-50 flex w-full justify-between items-center h-20 px-20 xsm:px-2 z-10 text-black relative'>
      <div>
        <img className='z-10 w-48 h-48' src={myLogo} alt='myLogo'/>
      </div>
      <ul className='hidden md:flex'>
        {links.map((link, index) => (
          <Link to={link.to} key={index}>
            <li
              onClick={() => handleLinkClick(index)}
              className={activeLink === index ? 'active-link' : ''}
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-20 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                onClick={() => handleLinkClick(index)}
                className={activeLink === index ? 'active-link' : ''}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;