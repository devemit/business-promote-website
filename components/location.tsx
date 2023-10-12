import Image from 'next/image';
import map from '../public/macedonia-presentation-map.jpg';

export default function Location() {
   return (
      <div className='h-screen w-full'>
         <div className='relative w-[100%] h-full'>
            <Image src={map} alt='skopje' fill />
         </div>
      </div>
   );
}
