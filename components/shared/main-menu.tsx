import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa';
import ButtonPrimary from '@/components/ui/button-primary';

const MainMenu = () => {
{/* <ul className="flex justify-center items-center">
  <li className="mx-2">Opción 1</li>
  <li className="mx-2">|</li>
  <li className="mx-2">Opción 2</li>
  <li className="mx-2">|</li>
  <li className="mx-2">Opción 3</li>
</ul> */}

  return (//flex flex-col lg:flex-row items-center gap-4
    <ul className='flex flex-col lg:flex-row items-center gap-1'>
      <li>
        <Link
          href='#home'
          className='py-4 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        > 
          Inicio
        </Link>
      </li>
      <li >
        <Link
          href='#about'
          className='py-4 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        >
          Acerca De Nosotros
        </Link>
      </li>
     
      <li className="mx-2">
        <Link
          href='#qualification'
          className='py-2 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        >
          Nuestro Equipo
        </Link>
      </li>
      <li className="mx-2">
        <Link
          href='#plans'
          className='py-2 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        >
          Servicios
        </Link>
      </li>
      <li className="mx-2">
        <Link
          href='#contact'
          className='py-2 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        >
         Agendar 
        </Link>
      </li>
      <li className="mx-2">
        <Link
          href='#qualification'
          className='py-2 px-4 transition-colors duration-300 font-mono text-blue-150 text-1xl lg:text-1xl font-semibold text-center lg:text-left'
        >
          Empresa
        </Link>
      </li>
      <li className="mx-2">
          <a className='py-2 px-4 border-b-4 transition-colors duration-300'>
            <FaUserAlt className='text-2xl'/> 
          </a>
      </li>
      {/* <li className="mx-2">
        <ButtonPrimary type='button' text='Contactanos' />
      </li> */}
    </ul>
  );
};

export default MainMenu;

// import Link from 'next/link';
// import ButtonPrimary from '@/components/ui/button-primary';
// //aqui se colocan todos los enlaces de la page
// //le decimo que va a tener un flex-col pero que a partir del lg va a tener un lg:flex-row <-- para que el menu del mobile se vea vertical 
// const MainMenu = () => { //el --> hover hace que al hacer clic en el boton se refleje el color primario naranja en el borde del boton 
