import Image from 'next/image';
import { FC } from 'react';

interface ServiceProps {
  image: string;
  title: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ image, title, description }) => {
  return (
    <div className='space-y-5 flex flex-col items-center'>
      <div className='relative w-20 h-20'>
        <Image src={image} alt='Image' fill className='object-cover' />
      </div>
      <h3 className='text-2xl text-white font-semibold'>{title}</h3>
      <p className='text-center max-w-sm'>{description}</p>
    </div>
  );
};

export default Service;

// import { FC } from "react";
// //import { IconType } from "react-icons/lib";
// import Image from 'next/image';

// interface ServiceProps {
// //    icon: IconType;
//     image: string;
//     title: string;
//     description: string;

// }

// //const Service: FC<ServiceProps> = ({ icon: Icon, title, description }) => {
// const Service: FC<ServiceProps> = ({image, title, description }) => {
//     return (
//         <div className="space-y-5 flex flex-col items-center">
//             <div className="relative w-20 h-20">
//                 <Image src={image} alt='Image' fill className='object-cover'/>
//             </div>
//             <h3 className="text-2xl text-white font-semibold">{title}</h3>
//             <p className="text-center max-w-sm">{description}</p>
//         </div>
//     );  
// };
 
// export default Service;
//<div className="space-y-5"> <-- este div separa el titulo y las  card para que no queden tan pegados 
//este servcio sera el card de cada servcio y va a recibir con el interface un icono de la libreria que estamos utiliando de REACT-ICONS...
//en la parte del icono se pueden pasar imagenes o iconos, las dos formas son aceptables
// <p className="text-center">{description}</p> <-- centra el texto que esta dentro del card y el max-w-sm hace que el texto de la card se reduzca y no quede tan extendido hacia los lados
//<div className="space-y-5 flex flex-col items-center"></div> <-- para centrar todo el contenido se derevicos tanto los titulos de los servcios como sus textos
// el services lo creamos como un funtional component y le pasamos el parametro de Icon con inicial mayuzculo para poderlo utilizar como componente mas adelante