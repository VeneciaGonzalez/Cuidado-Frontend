import { cn } from '@/libs/utils';
import { FC } from 'react';
import MainMenu from './main-menu';

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile: FC<MenuMobileProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={cn(
          'fixed left-0 top-0 w-[80%] sm:w-[40%] h-full z-50 bg-slate-100 -300 flex items-center justify-center transition-all duration-300 ease-in-out',
          !isOpen ? '-left-full' : 'left-0'
        )}
      >
        <MainMenu />
      </div>
      <div
        onClick={onClose}
        className={cn(
          'fixed left-0 top-0 w-full h-full bg-slate-50/30 z-40',
          !isOpen ? 'hidden' : 'block'
        )}
      />
    </>
  );
};

export default MenuMobile;

//este componente muestra el menu en los mobiles 
// se asigna el w-[85%] para mobiles 
// el --> z-50 para que se muestre mejor 
//el --> h-full para que tome el 85% y todo el ancho de la pantalla 
//que en tables sea un wid del 40% --> sm:w[40%] 
//para que el menu en mobile se vea vertical se modifica en el archivo mainmenu
// justify-center <-- para que quede en el centro

//el menu mobile va arecibir las propiedades en -->interface MenuMobile que sera la 
//funcion que le diga  que cuando sea open no regrese nada con el void
// interface MenuMobile{
//     isOpen: boolean
//     onClose: () => void;
// }

//le decimos que si --> !isOpen ? '-left-full' <-- isOpen es falso va amostrar un left-full, sino --> : <-- va a mostrar un left-0

//agregamos ya funcion cn que ya ha sido creada 
