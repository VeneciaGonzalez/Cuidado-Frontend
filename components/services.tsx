import Title from '@/components/ui/title';
import Container from './shared/container';
import Service from '@/components/ui/service';

const Services = () => {
  return (
    <section
      id='services'
      className='flex items-center justify-center mb-5 lg:mb-0'
    >
      <Container>
        <Title title='Seguridad y tranquilidad dentro &' titlePrimary='fuera del hogar' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
          <Service
            image='/icons/asilo.png'
            title=''
            description=' '
          />
          <Service
            image='/icons/baston.png'
            title=''
            description=' '
          />
          <Service
            image='/icons/cama.webp'
            title=''
            description=' '
          />
          <Service
            image='/icons/cuidado-silla.png'
            title=''
            description=' '
          />
          <Service
            image='/icons/terapia.png'
            title=''
            description=' '
          />
          <Service
            image='/icons/icon-2.png'
            title=''
            description=' '
          />
        </div>
      </Container>
    </section>
  );
};

export default Services;
//como el archivo de services ya esta en shared va a entrar 
//directo al container por lo tanto no hay que agregarle la ruta de components
//agragamos el Service, este service que contiene el icono y requiere la imagen ...
//Para el --> description='' colocamos un loren 