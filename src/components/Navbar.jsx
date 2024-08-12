import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Logo from '../assests/logo.png';

const Navbar = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <div className='header'>
        <nav className='navbar'>
          <Link
            to='/'
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className='logo'
          >
            <div className=' w-20' onClick={ScrollToTop}>
              <img src={Logo} alt='logo' />
            </div>
          </Link>
          <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: '#00000' }} />
            ) : (
              <FaBars size={30} style={{ color: '#00000' }} />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li> */}
            <li className='nav-item'>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='service'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Catalog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='why'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
