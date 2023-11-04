import { FC } from 'react';

import { cn } from '@/libs/utils';

interface ButtonPrimaryProps {
  type: 'button' | 'submit';
  text: string;
  className?: string;
  onClick?: () => void;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ type, text, className }) => {
  return (
    <button
      type={type}
      className={cn(
        'py-2 px-4 bg-primary text-white rounded-lg border-2 border-transparent hover:bg-transparent hover:text-primary transition-colors duration-300',
        className
      )}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;

// import { cn } from '@/libs/utils';
// import { FC } from 'react';

// interface ButtonPrimaryProps{ //recibira las propiedades de tipo string, el button y el submi, el contenido del button va a ser texto y convierte los botones componentes 
//     type: 'button' | 'submit';
//     text: string;
//     className?: string;
// }

// const ButtonPrimary: FC<ButtonPrimaryProps> = ({ type, text, className}) => {
//     return ( 
//         <button 
//             type={type}
//             className={cn(
//                 'py-2 px-4 border-b-2 bg-primary text-white rounded-lg border-2border-transparent hover:bg-transparent hover:border-primary hover:text-primary transition-colors duration-300', className
//             )}> 
//           {text}
//         </button>
//      );
// };
 
// export default ButtonPrimary;