import { FC } from 'react';

interface TitleProps {
  title: string;
  titlePrimary: string;
}

const Title: FC<TitleProps> = ({ title, titlePrimary }) => {
  return (
    <h1 className='text-3xl flex flex-col sm:flex-row items-center gap-2 text-green-800 font-semibold mb-10'>
      {title}
      <span className='text-primary'>{titlePrimary}</span>
    </h1>
  );
};

export default Title;

//esta configuracion va a ser aplicada para todos los titulos primarios de la ONE PAGE  
//le decimos que el titulo por default va a tener un text-4xl..
// a cada card de los servicios con el grid le damos 


//clase flex para un contenedor flexible y la clase flex-wrap para  que las tarjetas se vean horizontalmente
// const Qualification = () => {
//   return (
      
//       <div className="container mx-auto p-4 flex flex-wrap"> {/* Agrega la clase 'flex' y 'flex-wrap' */}
//         <h1 id='qualification' className="text-2xl font-bold w-full mb-4">Lista De Enfermeras</h1>
//         <Card title="Tecnico en Enfermaria" imageUrl='/calificaciones/enfermera-1.jpg' rating={5} />
//         <Card title="Enfermera y Kinesiologa" imageUrl="/calificaciones/enfermera-2.jpg" rating={5} />
//         <Card title="Cuidadora Junior" imageUrl="/calificaciones/enfermera-3.jpg" rating={5} />
//         <Card title="Cuidadora Experta" imageUrl="/calificaciones/enfermera-4.jpg" rating={5} />
//         <Card title="Tecnico en Enfermaria" imageUrl="/calificaciones/enfermera-5.jpg" rating={5} />
//         <Card title="Cuidadora Experta" imageUrl="/calificaciones/enfermera-6.jpg" rating={5} />
//         <Card title="Licenciada Enfermera" imageUrl="/calificaciones/enfermera-7.jpg" rating={5} />
//         <Card title="Enfermera Geriátrica" imageUrl="/calificaciones/enfermera-8.jpg" rating={5} />
//         <Card title="Enfermera de Cuidados Quirúrgicos" imageUrl="/calificaciones/enfermera-9.jpg" rating={5} />
//         <Card title="Enfermera y Kinesiologa" imageUrl="/calificaciones/enfermera-10.jpg" rating={5} />
    
//         {/* Agrega más tarjetas según sea necesario */}
//       </div>
//     );
//   };

// export default Qualification;