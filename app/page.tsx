import Care from '@/components/care';
import About from '@/components/about';
//import Nurses from '@/components/nurses';
import Services from '@/components/services';
import Plans from '@/components/plans';
import Appointment from '@/components/appointment';
import NursePage from '@/components/nursepage';

export default function Home() {
  return (
    <div>
      <Care />
      <About />
      <Services />
      <Plans />
      <Appointment/>
      <NursePage/>
    </div>
  );
}

      //<Qualification/>
//esta ultima llave no se le colocó ;