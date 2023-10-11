import Image from 'next/image';
import { Button } from './ui/button';

export default function Hero() {
   return (
      <div className='gap-y-4 pt-16 h-screen w-[100%] lg:p-24 p-8 mx-auto lg:flex gap-4 bg-slate-100'>
         <div className='left-side flex-1 lg:pt-6 max-w-5xl'>
            <h1 className='text-2xl md:text-3xl lg:text-6xl text-slate-900 font-semibold'>
               Glass Installation in Macedonia.
            </h1>
            <p className='text-slate-600 text-medium max-w-3xl md:text-xl lg:text-2xl pt-4 lg:pt-6'>
               Our company believes in the core values of customer satisfaction, dependability, and
               integrity, as these values shape our employees and the quality of our work.
            </p>
            <h3 className='pt-4 lg:pt-6 text-medium lg:text-lg'>
               Ready to <span className='italic font-semibold '>"Let the Light in?"</span>
            </h3>
            <div className='pt-4 lg:pt-6'>
               <Button variant={'default'}>Contact Us</Button>
            </div>
         </div>
         <div className='right-side flex-1'>
            <div className='image-wrapper w-[100%] h-[450px] relative'>
               <Image
                  src='https://images.unsplash.com/photo-1494884113216-952a0c2c1a30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
                  alt='glass-building'
                  fill
                  className='bg-cover pt-4'
               />
            </div>
            <p className='text-center italic text-medium lg:text-lg pt-4'>
               A recent market we serviced in Skopje.
            </p>
         </div>
      </div>
   );
}
