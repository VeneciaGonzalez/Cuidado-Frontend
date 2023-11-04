'use client';
import React, { useState, useEffect } from 'react';
import Container from './shared/container';
import Title from '@/components/ui/title';
import Plan from '@/components/ui/plan';

interface PlanData {
  id: number; //plan id  
  name: string;
  descripcion: string;
  horas: string;
  precio: number;
  color: string;
}

const Plans = () => {
  const [planes, setPlanes] = useState<PlanData[]>([]);
  const [error, setError] = useState<string>('');
  //llamada a la API 
  // useEffect(() => {
  //   const fetchPlanes = async () => {
  //     try {
  //       const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/getPlanService';
  //       const response = await fetch(apiUrl);

  //       if (!response.ok) {
  //         throw new Error('Error al obtener datos de la API');
  //       }

  //       const data: PlanData[] = await response.json();
  //       setPlanes(data);
  //     } catch (error) {
  //       setError('Error al obtener datos de la API');
  //       console.error('Error al obtener datos de la API:', error);
  //     }
  //   };

  //   fetchPlanes();
  // }, []);

   // Datos estaticos como ejemplo con una propiedad 'id'
  useEffect(() => {
   
    const exampleData: PlanData[] = [
      {
        id: 1,
        name: "Servicio De Acompañamiento Básico",
        descripcion: "Descripción:",
        horas: "8 Horas",
        precio: 24.99,
        color: "purple",
      },
      {
        id: 2,
        name: "Servicio Para Paciente Semivalente",
        descripcion: "Descripción:",
        horas: "10 Horas",
        precio: 34.99,
        color: "blue",
      },
      {
        id: 3,
        name: "Servicio Para Paciente No Autovalente",
        descripcion: "Descripción:",
        horas: "12 Horas",
        precio: 44.99,
        color: "green",

      }
    ];

    setPlanes(exampleData);
  }, []);

    //poner accion agendar de acuerdo al id del plan
    const handleAgendar = (id: number) => {
      //colocar código que maneje agendar
      //redirigir a la página de agendamiento
      console.log(`Agendar plan con ID ${id}`);
    };

    return (
      <section id='plans' className='items-center justify-center'>
        <Container>
          <Title title='Elige el Servicio Que' titlePrimary='Necesites' />
          <div className='flex l-flex items-center justify-between gap-3'>
            {planes.map((plan, index) => (
              <Plan
                key={index}
                id={plan.id}
                name={plan.name}
                descripcion={plan.descripcion}
                horas={plan.horas}
                precio={plan.precio}
                active
                onAgendar={handleAgendar} // Pasa la función handleAgendar a través de onAgendar.
                color="purple" 
              />
            ))}
          </div>
        </Container>
      </section>
    );
}
export default Plans;


