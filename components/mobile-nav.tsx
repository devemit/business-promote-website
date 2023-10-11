import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { pages } from '@/lib/utils';
import { Props } from '@/types';
import { Button } from './ui/button';

export default function MobileNavbar({ handleToggle, toggleNav }: Props) {
   return (
      <section className='cursor-pointer md:hidden z-10'>
         <div onClick={handleToggle}>{toggleNav ? null : <HiOutlineMenuAlt4 size={22} />}</div>
         <ul
            className={
               toggleNav
                  ? 'fixed px-10 bg-white top-0 left-0 flex gap-2 flex-col shadow-xl w-[100%] h-[45%] ease-in-out duration-1000  pt-24'
                  : 'fixed px-10 bg-white top-[-100%] left-0 flex flex-col w-[100%] h-[45%] ease-in-out duration-1000 pt-24'
            }
         >
            {pages.map((page) => {
               return (
                  <>
                     <li className='text-medium text-slate-600 border-b border-slate-200'>
                        {page}
                     </li>
                  </>
               );
            })}
            <Button variant={'secondary'} size={'sm'} onClick={handleToggle}>
               Close
            </Button>
         </ul>
      </section>
   );
}
