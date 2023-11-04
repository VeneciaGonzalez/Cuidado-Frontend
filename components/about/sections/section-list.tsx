import ButtonPrimary from '@/components/ui/button-primary';

const SectionList = () => {
  return (
    <section className='flex-1 flex flex-col items-center gap-8'>
      <ul className='space-y-4 text-xl'>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
        Agendamiento de Servicios
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
        Personal Especializado
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
        Registro de observaciones 
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
        Apoyo Emocional 
        </li>
        <li className='relative before:absolute before:w-2 before:h-2 before:bg-primary before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-left-4'>
        Facil accesibilidad de información del paciente
        </li>
      </ul>
      <ButtonPrimary type='button' text='Ver más beneficios' />
    </section>
  );
};

export default SectionList;
