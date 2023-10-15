'use client';
import { useState } from 'react';
import MobileNavbar from './mobile-nav';
import { Link } from 'react-scroll';

export default function Navbar() {
   const [toggleNav, settoggleNav] = useState(false);

   function handleToggle() {
      settoggleNav((prev) => !prev);
   }

   function closeMobileNav() {
      settoggleNav(false);
   }

   return (
      <nav className='flex justify-between fixed w-full z-[9999] bg-white items-center h-16 shadow-md px-10'>
         <div className='text-2xl font-bold z-20'>LOGO</div>
         <MobileNavbar
            handleToggle={handleToggle}
            toggleNav={toggleNav}
            closeMobileNav={closeMobileNav}
         />
         <ul className='md:flex hidden gap-4'>
            <Link
               className='cursor-pointer'
               to='Home'
               spy={true}
               smooth={true}
               offset={10}
               duration={300}
            >
               Home
            </Link>
            <Link
               className='cursor-pointer'
               to='About'
               spy={true}
               smooth={true}
               offset={10}
               duration={300}
            >
               About
            </Link>
            <Link
               className='cursor-pointer'
               to='Contact'
               spy={true}
               smooth={true}
               offset={-60}
               duration={300}
            >
               Contact
            </Link>
            <Link
               className='cursor-pointer'
               to='Location'
               spy={true}
               smooth={true}
               offset={-80}
               duration={300}
            >
               Location
            </Link>
            <Link
               className='cursor-pointer'
               to='Gallery'
               spy={true}
               smooth={true}
               offset={-60}
               duration={300}
            >
               Gallery
            </Link>
         </ul>
      </nav>
   );
}
