
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';

import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/ary1-removebg-preview.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
    return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className=''>
          <img src={Logo} alt='Logo Image' style={{ width: '200px' }}  className='mt-10'/>
        </div>
  
        {/* menu */}
        <ul className='hidden md:flex'>
          <li >
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
  
        {/* Hamburger */}
        <div onClick={handleClick} className='z-10 md:hidden'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
  
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
  
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a
                className='flex items-center justify-between w-full text-gray-300'
                href='https://www.linkedin.com/in/aryan-shroff-b43928222/'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex items-center justify-between w-full text-gray-300'
                href='https://github.com/aryanshroff'
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#837342]'>
              <a
                className='flex items-center justify-between w-full text-black'
                href='https://leetcode.com/rekkles_21/'
              >
                Leetcode <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="-10 0 32 24" id="leetcode"><path d="M20.1,16.007h-9.187c-1.047,0-1.899-0.897-1.899-2s0.853-2,1.899-2H20.1c1.048,0,1.9,0.897,1.9,2S21.147,16.007,20.1,16.007z M10.913,13.507c-0.217,0-0.399,0.229-0.399,0.5s0.183,0.5,0.399,0.5H20.1c0.217,0,0.4-0.229,0.4-0.5s-0.184-0.5-0.4-0.5H10.913z"></path><path d="M10.538,24c-1.621,0-3.011-0.55-4.021-1.589l-3.949-4.09C1.557,17.278,1,15.803,1,14.167c0-1.61,0.557-3.072,1.568-4.117l9.174-9.47C12.104,0.206,12.592,0,13.113,0c0,0,0,0,0.001,0c0.54,0,1.049,0.218,1.434,0.614c0.766,0.792,0.78,2.061,0.032,2.828l-1.443,1.511C13.549,5.18,13.985,5.5,14.511,5.95l2.361,1.963c0.804,0.824,0.788,2.093,0.024,2.882c-0.386,0.397-0.895,0.615-1.435,0.615c-0.001,0-0.001,0-0.002,0c-0.521,0-1.007-0.207-1.367-0.581l-2.377-1.876c-0.668-0.497-0.783-0.534-1.19-0.534c-0.422,0-0.803,0.159-1.164,0.486l-3.886,4.069c-0.282,0.291-0.43,0.702-0.43,1.191c0,0.498,0.155,0.945,0.427,1.226l3.937,4.091c0.251,0.26,0.627,0.392,1.116,0.392c0.49,0,0.866-0.132,1.116-0.392l2.461-2.454c0.351-0.363,0.836-0.569,1.357-0.57c0,0,0.001,0,0.002,0c0.539,0,1.049,0.219,1.434,0.616c0.765,0.79,0.78,2.058,0.034,2.825l-2.365,2.469C13.542,23.422,12.113,24,10.538,24z M13.113,1.5c-0.079,0-0.194,0.021-0.294,0.124l-9.173,9.469C2.907,11.856,2.5,12.948,2.5,14.167c0,1.244,0.407,2.349,1.146,3.11c0.001,0.001,0.001,0.001,0.001,0.002l3.948,4.089c0.72,0.74,1.737,1.132,2.943,1.132c1.183,0,2.202-0.405,2.946-1.173l2.365-2.469c0.188-0.193,0.172-0.531-0.032-0.741c-0.1-0.103-0.226-0.159-0.356-0.159l0,0c-0.078,0-0.192,0.021-0.29,0.122l-2.46,2.454c-0.526,0.546-1.285,0.84-2.186,0.84c-0.898,0-1.658-0.294-2.195-0.85l-3.937-4.091c-0.546-0.565-0.848-1.371-0.848-2.268c0-0.874,0.302-1.667,0.849-2.231l3.921-4.104c0.67-0.609,1.421-0.912,2.21-0.912c0.878,0,1.315,0.258,2.104,0.845l2.468,1.957c0.172,0.168,0.285,0.189,0.364,0.189l0,0c0.131,0,0.258-0.057,0.357-0.159c0.202-0.21,0.219-0.549,0.034-0.739l-2.311-1.915c-1.026-0.881-1.474-1.02-1.844-1.086c-0.271-0.05-0.51-0.247-0.595-0.51c-0.086-0.263-0.036-0.554,0.155-0.753l2.241-2.347c0.189-0.195,0.173-0.533-0.03-0.743C13.372,1.557,13.245,1.5,13.113,1.5z"></path></svg>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#302f25]'>
              <a
                className='flex items-center justify-between w-full text-gray-300'
                href='https://github.com/aryanshroff/My_Resume'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

export default Navbar;