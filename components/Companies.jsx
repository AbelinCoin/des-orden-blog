/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const data = [
  {
    id: 1,
    imageSrc: '/Moore-GSF.jpg',
    description: 'Firma de consultoría de alto impacto para empresas en Venezuela. Pertenece a MOORE Global (antigua Moore Stephens), grupo de consultoría integral número 8 del mundo con presencia en 110 países a través de 280 firmas.',
  },
  {
    id: 2,
    imageSrc: 'Nomadas.jpg',
    description: 'Productora full-service dedicada a conceptualizar y realizar piezas audiovisuales',
  },
  {
    id: 3,
    imageSrc: 'Rendivalores.jpg',
    description: 'Fundada en 1995, cuenta con una trayectoria exitosa en el mercado bursátil venezolano, destacándose en la emisión y colocación de instrumentos de renta fija y variable de las más prestigiosa empresas emisoras venezolanas.',
  },
  {
    id: 4,
    imageSrc: 'LOG.jpg',
    description: 'Agencia venezolana dedicada a la investigación y asesoramiento en temas sociales y políticos y de gestión pública.',
  },
];

const BoxGrid = () => (
  <div className="flex flex-col mx-32">
    <h2 className="text-6xl mb-4">Nuestras empresas y propósito</h2>
    <p className="mb-6 text-xl">Pertenecernos a varias empresas privadas que hacen vida en el mundo financiero y de consultoría empresarial y de entorno, nuestro propósito es ser una fuente de información fiable y crítica en temas económicos venezolanos y latinoamericanos.</p>

    <div className="flex flex-wrap justify-between">
      {data.map((item) => (
        <div
          key={item.id}
          className="w-5/12 rounded-lg overflow-hidden shadow-lg my-4 px-8"
        >
          <img
            src={item.imageSrc}
            alt={`Image ${item.id}`}
            className="w-full h-40 object-cover"
          />
          <p className="p-4 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default BoxGrid;
