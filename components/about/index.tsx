import Container from '@/components/shared/container';
import Title from '@/components/ui/title';
import SectionImages from './sections/section-images';
import SectionList from './sections/section-list';

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center'
    >
      <Container>
        <Title title='Porque Confiar En' titlePrimary='CuidadoSeniors?' />
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
          <SectionList />
          <SectionImages />
        </div>
      </Container>
    </section>
  );
};

export default About;

//llamaos a la section de images 