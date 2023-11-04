import Container from '@/components/shared/container';
import Logo from '@/components/shared/logo';
import Tag from '@/components/ui/tag';
import Section from './components/section';

const Footer = () => {
  return (
    <footer className='bg-gray-light/10'>
      <Container className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mb-10 px-5 py-10 lg:px-8 lg:py-20'>
        <Section title='Trabaja Con Nasotros' list={[' ', ' ', ' ']} />
      </Container>
      <div className='bg-primary p-5 text-white text-center'>
        <h5>&copy; Cuidado Seniors </h5>
      </div>
    </footer>
  );
};

export default Footer;


//este footer lleva el layout 