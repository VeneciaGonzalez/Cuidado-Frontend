'use client';
import React, { useEffect, useState } from 'react';
import NurseCard from './ui/nurse-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
//interfaz que describe la estructura de los objetos de enfermeras
interface Enfermera {
  id: number;
  foto: string;
  nombre: string;
  apellido: string;
  profesion: string;
  calificacion: number;
}

//datos de p´rueba
  const exampleEnfermeras: Enfermera[] = [
    {
      id: 1,
      foto: 'calificaciones/enfermera-1.jpg',
      nombre: 'Monica',
      apellido: 'Rodriguez',
      profesion: 'Licenciada En Enfermeria',
      calificacion: 4,
    },
    {
      id: 2,
      foto: 'calificaciones/enfermera-2.jpg',
      nombre: 'Enfermera 2',
      apellido: 'Apellido 2',
      profesion: 'Enfermera',
      calificacion: 4,
    },
    {
      id: 3,
      foto: 'calificaciones/enfermera-3.jpg',
      nombre: 'Enfermera 3',
      apellido: 'Apellido 3',
      profesion: 'Enfermera',
      calificacion: 4.5,
    },
    {
      id: 3,
      foto: 'calificaciones/enfermera-4.jpg',
      nombre: 'Enfermera 3',
      apellido: 'Apellido 3',
      profesion: 'Enfermera',
      calificacion: 4.5,
    },
    {
      id: 3,
      foto: 'calificaciones/enfermera-8.jpg',
      nombre: 'Enfermera 3',
      apellido: 'Apellido 3',
      profesion: 'Enfermera',
      calificacion: 4.5,
    },
    
  ]; 

const NurseCardsPage: React.FC = () => {
  const [enfermeras, setEnfermeras] = useState<Enfermera[]>(exampleEnfermeras); // Usamos los datos de exampleEnfermeras

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const apiUrl = process.env.NEXT_PUBLIC_API_URL + '/plan-service'; // Reemplazar la URL 
  //       const response = await fetch(apiUrl);

  //       if (!response.ok) {
  //         throw new Error('Error al obtener datos de la API');
  //       }

  //       const data = await response.json();
  //       setEnfermeras(data); // Establece los datos obtenidos en el estado
  //     } catch (error) {
  //       console.error('Error al obtener datos de la API:', error);
  //     }
  //   };

  //   fetchData(); // Llama a la función para obtener datos
  // }, []); // El segundo argumento vacío significa que este efecto se ejecutará una vez, similar a componentDidMount
  
  return (
    <div>
      <h1>Enfermeras</h1>
      <Swiper spaceBetween={20} slidesPerView={5}>
        {enfermeras.map((enfermera) => (
          <SwiperSlide key={enfermera.id}>
            <NurseCard
              enfermera={enfermera}
              onAgendar={() => {
                // aquí se coloca la lógica para agendar 
                console.log(`Agendar enfermera con ID ${enfermera.id}`);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NurseCardsPage;



