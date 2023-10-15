import Image from 'next/image';
import imgone from '../public/photo-1495714096525-285e85481946.avif';
import imgtwo from '../public/photo-1515449634394-7f0f1d7d6543.avif';
import imgthree from '../public/photo-1537301636683-5ac98e0466a2.avif';
import imgfour from '../public/photo-1559219432-1962fcaa2752.avif';
import imgfive from '../public/photo-1597242261552-e4bfc7618aea.avif';
import imgsix from '../public/photo-1600573472591-ee6b68d14c68.avif';
import imgsev from '../public/photo-1620641621506-5e8cc7cb5656.avif';
import imgeig from '../public/photo-1579424098101-7249e9009151.avif';
export default function Gallery() {
   return (
      <>
         <h1 id='Gallery' className='pt-10 font-semibold text-2xl lg:text-3xl text-center p-4'>
            Our Work
         </h1>
         <div className='grid p-8 lg:p-24 grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='grid gap-4'>
               <div>
                  <Image
                     className='h-auto max-w-full rounded-lg'
                     src={imgone}
                     alt=''
                     width={300}
                     height={300}
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgtwo}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgsev}
                     alt=''
                  />
               </div>
            </div>
            <div className='grid gap-4'>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgfour}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgfive}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgthree}
                     alt=''
                  />
               </div>
            </div>
            <div className='grid gap-4'>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgone}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgeig}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgfour}
                     alt=''
                  />
               </div>
            </div>
            <div className='grid gap-4'>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgfive}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgsix}
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src={imgthree}
                     alt=''
                  />
               </div>
            </div>
         </div>
      </>
   );
}
