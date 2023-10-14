import { ContactCardProps } from '@/types';

export default function ContactCard({ title, description, hours }: ContactCardProps) {
   return (
      <div className='bg-blue-200 rounded-xl mt-2 w-40 h-32 flex flex-col justify-center items-center'>
         <div className='text-center'>
            <h1 className='font-semibold text-md'>{title}</h1>
            <p className='text-slate-600 text-sm'>{description}</p>
            <p className='text-slate-600 text-sm'>{hours}</p>
         </div>
      </div>
   );
}
