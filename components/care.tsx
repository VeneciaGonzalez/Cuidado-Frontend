import Image from 'next/image';
import Container from './shared/container';
import ButtonPrimary from './ui/button-primary';

const Care = () => {
  return (
    <section id='care'>
      <div className='relative w-90 h-screen'>
        <Image
          src='/images/cuidado-3.jpg'
          alt='Care'
          fill
          className='object-cover imagen-transparente'
          style={{ opacity: 0.8 }}
         
        />
        <Container>
          <div className='absolute bg-gradient-to-tr to-transparent left-0 top-0 w-full h-full' />
          <div className='absolute top-1/2 -translate-y-1/1 left-1/2 lg:left-60 -translate-x-1/2 lg:translate-x-0 space-y-10'>
            <h1 className='text-blue-180 text-5xl lg:text-5xl font-semibold text-center lg:text-left'>
            Entregamos Tranquilidad y  <br /> Confianza
            </h1>
            <p className='text-green-900 font-semibold text-1xl'>
            Acompañamiento integral para adultos mayores y personas con discapacidad.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-5'>
              <ButtonPrimary
                type='button'
                text='Agendar'
                className='w-30'
              />
              <ButtonPrimary
                type='button'
                text='Contactar'
                className='border-2 border-primary bg-transparent hover:bg-transparent w-30'
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Care;

//el fill es para que tome las medidas del div que colocamos, luego debe llamarse la imagen en el archivo PAGE
//agregamops un div screm para que ocupe todo el ancho de la pantalla
//luego ajustar la imagen con un --> z-40 en el header que tiene el fixed
//este haro va aser una seccion con id y lo dejamos como home aqui nos va a mandar todos los enlaces que tenagmos 
//el --> bg-gradient-to-tr coloca hacia la derecha con el tr
// el  from-black  la parte para que se puedan ver las letras 
//se coloca un object cover para que la imagen se expanda y no se distrocione 
//centrar un div verticalmente: div className='absolute top-1/2 -translate-y-1/2' con el top-1/2 se refiere a que es del 50%
//este CONTAINER alinea el texto con el logo y lo coloca en el centro
// <Container>
// <div className='absolute bg-gradient-to-tr  from-black to-transparent left-0 top-0 w-full h-full'/>  
// <div className='absolute left-50 top-1/2 -translate-y-1/2'>
//     <h1 className='text-white'>
//         Your Body <br/> Will Transform
//     </h1> 
// </div>
// </Container>
// separa los textos y los botones del container  --> <div className='absolute left-50 top-1/2 -translate-y-1/2 space-y-10'>