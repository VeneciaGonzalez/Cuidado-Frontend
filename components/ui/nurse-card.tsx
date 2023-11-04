import React from 'react';
import 'app/globals.css'; // Importa los estilos globales

interface NurseCardProps {
  enfermera: {
    id: number;
    foto: string;
    nombre: string;
    apellido: string;
    profesion: string;
    calificacion: number;
  };
  onAgendar: () => void;
}

const NurseCard: React.FC<NurseCardProps> = ({ enfermera, onAgendar }) => {
  const { foto, nombre, apellido, profesion, calificacion } = enfermera;

  return (
    <div className="enfermera-card">
      <img src={foto} alt={`${nombre} ${apellido}`} className="enfermera-image" />
      <h2>{nombre} {apellido}</h2>
      <p className="enfermera-profesion">{profesion}</p>
      <div className="calificacion">
        {Array.from({ length: calificacion }, (_, index) => (
          <span key={index} className="enfermera-star">&#9733;</span>
        ))}
      </div>
      <button className="agendar-button" onClick={onAgendar}>
        Agendar
      </button>
    </div>
  );
};

export default NurseCard;


