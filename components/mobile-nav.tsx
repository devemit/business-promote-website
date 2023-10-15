import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Props } from '@/types';
import { Button } from './ui/button';
import { Link } from 'react-scroll';

export default function MobileNavbar({ handleToggle, toggleNav, closeMobileNav }: Props) {
   return (
      <section className='cursor-pointer md:hidden z-10'>
         <div onClick={handleToggle}>{toggleNav ? null : <HiOutlineMenuAlt4 size={22} />}</div>
         <ul
            className={
               toggleNav
                  ? 'fixed px-10 bg-white top-0 left-0 flex gap-2 flex-col shadow-xl w-[100%] h-[50%] ease-in-out duration-1000  pt-24'
                  : 'fixed px-10 bg-white top-[-100%] left-0 flex flex-col w-[100%] h-[50%] ease-in-out duration-1000 pt-24'
            }
         >
            <Link
               onClick={closeMobileNav}
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
               onClick={closeMobileNav}
               className='cursor-pointer'
               to='About'
               spy={true}
               smooth={true}
               offset={-50}
               duration={300}
            >
               About
            </Link>
            <Link
               onClick={closeMobileNav}
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
               onClick={closeMobileNav}
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
               onClick={closeMobileNav}
               className='cursor-pointer'
               to='Gallery'
               spy={true}
               smooth={true}
               offset={-60}
               duration={300}
            >
               Gallery
            </Link>
            <Button variant={'secondary'} size={'sm'} onClick={handleToggle}>
               Close
            </Button>
         </ul>
      </section>
   );
}
