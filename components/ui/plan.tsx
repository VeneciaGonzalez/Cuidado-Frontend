import ButtonPrimary from '@/components/ui/button-primary';
import { cn } from '@/libs/utils';
import { FC } from 'react';

interface PlanProps {
  id: number;
  name: string;
  descripcion: string;
  horas: string;
  precio: number;
  active?: boolean;
  color: string;
  onAgendar: (id: number) => void; // Definimos onAgendar aquí.
  
}



const Plan: FC<PlanProps> = ({ id, name, descripcion, horas, precio, active, onAgendar, color }) => {
  return (
    <div
      className={cn(
        'w-full bg-gray-light/30 p-5 rounded-lg flex flex-col items-center gap-y-8',
        active && 'relative border-2 border-primary'
      )}
    >
      {active && (
        <div className='absolute text-black py-2 px-4 -top-4 left-1/2 -translate-x-1/2'>
          {/* agregar contenido adicional si el plan está activo */}
        </div>
      )}
      <h2 className='text-2xl text-black font-medium'>{name}</h2>
      <h3 className='text-1xl font-semibold text-black'>{descripcion}</h3>
      <h1 className='text-1xl font-semibold text-black'>{horas}</h1>
      <h1 className='text-1xl font-semibold text-black'>${precio}</h1>
      <ButtonPrimary
        type='button'
        text='Agendar'
        className={`bg-${color}-500 text-white hover:bg-${color}-400`}
        onClick={() => onAgendar(id)}
      />
    </div>
  );
};

export default Plan;


//el el archivo Plans dividimos los planes en 3 cards
// este --> <div className='w-full bg-gray-light/30'> me coloca todo el texto en una pequeña seccion
// al titulo le damos el estilo para que las letras queden un poco gruesas--> <h2 className='text-2xl text-white font-semibold'>Standar</h2>
// el --> p-8 rounded-lg flex flex-col items-center hace que las cards queden centradas y alargadas verticalmente, y con el gap-y-5 se agruega la card un poco mas para que queden mas anchas 
// el --> w-full hace que se expanda ea todo el tamaño de la card
// el --> backdrop-blurd-sm es un efecto para que distorcione 
//pasamos la propiedad interface de tipo booleano y luego con el --> <div className={cn(
        //     'w-full bg-gray-light/30 p-8 rounded-lg flex flex-col items-center gap-y-10'
        //     )}
        // > LE DECIMO QUE SI ESTA ACTIVO AGREGUE LAS CLASES 
//como quiere que solo el card del medio se active, entonce vamos al Plans.tsx y alli le agrehamos el active al plan 2
//esta linas de codigo hace que el borde naranajo de card tenga en active arriva y en el centro 
// {active && (
//     <div className='absolute bg-primary text-white py-2 px-4 -top-4'> el top-4 lo coloca arriba 
//         <h5>Recomended</h5>
//     </div>
// )} 

// cuando le coloco el -->  left-1/2 -translate-x-1 a el -->    <div className='absolute bg-primary text-white py-2 px-4 -top-4 left-1/2 -translate-x-1'> el 
//cuadrito del remended no me queda centrado pero si lo dejo sin eso ahi so lo deja centrado -->                 <div className='absolute bg-primary text-white py-2 px-4 -top-4'>

