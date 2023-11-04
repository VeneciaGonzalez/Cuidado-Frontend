'use client';

import { useState } from 'react';
import Container from './container';
import Logo from './logo';
import MainMenu from './main-menu';

import { RiMenu3Line } from 'react-icons/ri';
import MenuMobile from './menu-mobile';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return ( //      <header className='fixed left-0 top-0 w-full p-1 z-40 bg-white'>

    <> 
      <header className='fixed right-0 top-0 w-full p-1 z-40 bg-white'>
        <Container className='flex items-centerjustify-between'>
          <section>
            <Logo />
          </section>
          <section className='hidden lg:block ml-auto'>
            <MainMenu />
          </section>
          <section className='lg:hidden'>
            <button
              type='button'
              onClick={() => setShowMenu(true)}
              className='text-blue'
            >
              <RiMenu3Line size={24} />
            </button>
          </section>
        </Container>
      </header>
      <MenuMobile isOpen={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Header;

// onClose al darle clic va a ser false 
// se covierte a este componente con el 'use client' de arriba para que pueda usar los React State

// React State contiene los datos de un componente . El componente, a su vez, devuelve los datos contenidos en el estado a la salida.

//se crea un estado como show meno que va ainiciar como falso -->const [showMenu, setShoeMenu] =  useState(false);

// se agrega el --> <section className="lg:hidden">  con el HIDDEN para que el icono del meno no se muestre en la web y solo se mueestre en los mobiles 
// y oculamos las section del menu de la web cuando se abra en mobiles --> <section className="hidden lg:block"> con el HIDDEN LG:BLOCK 












//EXPLICACION DEL COMPONENTE
// import Container from "./container";
// import Logo from "./logo";
// //aqui en el header nos traemos el componente logo que creamos en shared
// const Header = () => { // con el -->Container className le decimos que aparte de las clases que estan declarads en container tambien agregue la clase --> className="flex items-center justify-between"
//     return ( //con el div dentro del herader colocamos un ancho maximo para poner el logo
//         <header className="bg-red-100 fixed left-0 top-0 w-full">
//             <Container className="flex items-center justify-between"> 
//                 <section>
//                     <Logo />
//                 </section>
//                 <section>MENU</section>
//             </Container>
//         </header>
//     );
// };
// //justify-around, justify-evenly deja un espacio en el extremo de cada uno,  pero el izquierdo queda mas alejado
// export default Header;