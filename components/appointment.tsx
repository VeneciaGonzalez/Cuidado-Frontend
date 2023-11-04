import Container from '@/components/shared/container';
import Title from '@/components/ui/title';


const Appointment = () => {
    return (
        <section className="h-screen flex flex-col justify-center text-center bg-grey text-blue">
            <a href="#plans" className="inline relative text-4xl font-bold mb-4">
                ¡Agenda tu cita Ahora!
            <div className="border-b-4 w-1/4 mx-auto border-green-800 bottom-0"></div>
            </a>
        </section>
    );
  };
  
  export default Appointment;

  import React from 'react';

// function AgendaCitaSection() {
//   return (
//     <section className="h-screen flex flex-col justify-center text-center bg-primary text-white">
//       <h1 className="text-4xl font-bold mb-4">¡Agenda tu cita Ahora!</h1>
//       <div className="border-b-2 w-1/4 mx-auto"></div>
//     </section>
//   );
// }

// export default AgendaCitaSection;
  

{/* <section
id='appointment'
className='min-h-screen flex items-center justify-cente'
>
<Container>
  <Title title='¡Agenda tu cita' titlePrimary='Ahora!' />
  <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
  </div>
</Container>
</section> */}