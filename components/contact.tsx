import ContactCard from './contact-card';

export default function Contact() {
   return (
      <div id='Contact' className=' bg-slate-100 h-1/2 w-full p-8'>
         <h1 className='font-semibold text-2xl text-center lg:text-3xl mb-10'>Contact Us</h1>
         <div className='flex flex-col justify-center items-center md:flex-row gap-2 md:gap-4 lg:gap-8'>
            <ContactCard title='Hours' description='Monday-Friday' hours='8:00 a.m - 4:00 p.m' />
            <ContactCard title='Phone' description='N/A' />
            <ContactCard title='Email' description='N/A' />
         </div>
      </div>
   );
}
