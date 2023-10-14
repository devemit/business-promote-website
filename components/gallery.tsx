import Image from 'next/image';
export default function Gallery() {
   return (
      <>
         <h1 className='pt-10 font-semibold text-2xl lg:text-3xl text-center p-4'>Our Work</h1>
         <div className='grid p-8 lg:p-24 grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='grid gap-4'>
               <div>
                  <Image
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
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
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
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
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
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
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
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
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                     alt=''
                  />
               </div>
               <div>
                  <Image
                     width={300}
                     height={300}
                     className='h-auto max-w-full rounded-lg'
                     src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                     alt=''
                  />
               </div>
            </div>
         </div>
      </>
   );
}
