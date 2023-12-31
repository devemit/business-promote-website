import { CardProps } from '@/types';
import Image from 'next/image';

export default function Card({ title, description, image }: CardProps) {
   return (
      <div className='py-4 md:px-4'>
         <div className='relative w-[100%] h-[300px]'>
            <Image src={image} fill alt='card-image' className='rounded-t-2xl' />
         </div>
         <div className='p-1 bg-slate-100'>
            <h3 className='text-xl py-1 font-semibold'>{title}</h3>
            <p className='text-slate-600 text-sm'>{description}</p>
         </div>
      </div>
   );
}
