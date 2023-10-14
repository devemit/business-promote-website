import Image from 'next/image';
import map from '../public/macedonia-presentation-map.jpg';

export default function Location() {
   return (
      <div
         id='Location'
         className='h-[80vh] lg:h-screen w-full flex flex-col items-center justify-center '
      >
         <div>
            <h1 className='font-semibold lg:text-3xl text-2xl'>
               Locations we service
               <br />
               <br />
            </h1>
            <span className='text-slate-600 text-xl underline'>Skopje City</span>
            <br />
            <span className='text-slate-600 text-xl underline'>Veles City</span>
         </div>
         <div className='relative w-[100%] h-[500px] md:h-full'>
            <Image src={map} alt='skopje' fill className='object-contain' />
         </div>
      </div>
   );
}
