import Link from 'next/link';

const Logo = () => { 
    //return ( <a href="/" type="button">CuidadoSeniors</a> );
    return ( 
        
        <Link 
            
            
            href="/" 
            type="button" 
            className='mt-2 text-green-800 text-2xl lg:text-4xl font-semibold text-center lg:text-left' 
        >
            CuidadoSeniors
        </Link>
    );
};
 
export default Logo;
// className="p-1" href={'/'}>
//             <img
//             src='/images/logo-oficialpage.jpg' // Ruta imagen 
//             alt="Logo Oficial"
//        className="w-30 h-10" // clase Tailwind

//esta achor -->a me debe de regresar al inicio,
// a la hora de renderizar el link se convierte en anchort
// se usa el link para que la pagina no se recargue y como hipervinculo