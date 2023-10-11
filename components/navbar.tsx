'use client';
import { useState } from 'react';
import { pages } from '@/lib/utils';
import MobileNavbar from './mobile-nav';

export default function Navbar() {
   const [toggleNav, settoggleNav] = useState(false);

   function handleToggle() {
      settoggleNav((prev) => !prev);
   }

   return (
      <nav className='flex justify-between items-center h-20 shadow-lg px-10'>
         <div className='text-2xl font-bold z-10'>LOGO</div>
         <MobileNavbar handleToggle={handleToggle} toggleNav={toggleNav} />
         <ul className='md:flex hidden gap-4'>
            {pages.map((page, index) => {
               return (
                  <li className='cursor-pointer text-medium' key={index}>
                     {page}
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
