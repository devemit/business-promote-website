import Card from './card-showcase';

export default function About() {
   return (
      <main className='p-8 lg:p-24'>
         <div className='md:flex justify-center items-center'>
            <Card
               title='Commercial Construction'
               description='We service commercial building needing various glass and glazing needs.'
               image={
                  'https://images.unsplash.com/photo-1494884113216-952a0c2c1a30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
               }
            />
            <Card
               title='Residental Buildings'
               description='We service commercial building needing various glass and glazing needs.'
               image={
                  'https://images.unsplash.com/photo-1640113036738-02909e67ff61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
               }
            />
         </div>
         <div className='md:flex max-w-[69rem] mx-auto'>
            <Card
               title='Windows'
               description='Discover high quality and energy efficient window solutions for your commercial or residential needs.'
               image={
                  'https://images.unsplash.com/photo-1559219432-1962fcaa2752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
               }
            />
            <Card
               title='Storefront Frames'
               description='Create an inviting storefront with our durable and stylish frame options.'
               image={
                  'https://images.unsplash.com/photo-1464869372688-a93d806be852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
               }
            />
            <Card
               title='Swinging or Sliding Doors'
               description='Upgrade your entrances with our modern and functional swinging or sliding door solutions.'
               image={
                  'https://plus.unsplash.com/premium_photo-1681824928232-c82a58068592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2097&q=80'
               }
            />
         </div>
      </main>
   );
}
