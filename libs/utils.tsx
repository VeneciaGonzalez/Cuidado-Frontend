import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { 
    return twMerge(clsx(inputs));
}

//se crea el componente uttil que creara una funcion en el cual le puedo pasar clases y con tailwind-merge me va a mergear todas la 
//clases de Talwind, es decir que si ya tenemos definido un color como por ejempo ''text-red' y luegole pasamos otra variable como 
//'text-500' entonces quita el text-red y deja la nueva variable, si no la pasamos como varible no cambiara el color por eso se llama
// telwindmerge porque hace el merge de las clases de los colores que cofiguremos 
