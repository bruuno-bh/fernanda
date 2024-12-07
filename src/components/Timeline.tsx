import React, { useState } from 'react';

const timelineEvents = [
  {
    year: 2004,
    title: 'Primeiro Oscar',
    description: 'Primeira indicação ao Oscar de Melhor Atriz',
    image:
      'https://images.unsplash.com/photo-1542206395-9feb3edaa68c?auto=format&fit=crop&q=80',
  },
  {
    year: 2008,
    title: 'Reconhecimento Internacional',
    description: 'Prêmio de Melhor Atriz em Cannes',
    image:
      'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80',
  },
  {
    year: 2012,
    title: 'Conquista Nacional',
    description: 'Grande Prêmio do Cinema Brasileiro',
    image:
      'https://images.unsplash.com/photo-1562157872-8180ff60b4e0?auto=format&fit=crop&q=80',
  },
  {
    year: 2024,
    title: 'Campanha Oscar',
    description: '#OscarForNanda',
    image:
      'https://images.unsplash.com/photo-1517638851339-d46d9c5e31b8?auto=format&fit=crop&q=80',
  },
];

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const selectedEvent =
    hoveredIndex !== null ? timelineEvents[hoveredIndex] : timelineEvents[0];

  return (
    <section id="timeline" className="bg-[#32CD32] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título da Seção */}
        <h2 className="text-black font-extrabold text-5xl md:text-7xl mb-12">
          TIMELINE
        </h2>

        {/* Linha Horizontal com os Anos */}
        <div className="relative mb-16">
          <div className="absolute inset-x-0 top-1/2 h-1 bg-black"></div>

          <div className="flex justify-between items-center relative">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className="flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-black font-bold text-xl md:text-2xl mb-2">
                  {event.year}
                </span>
                <div className="w-1 h-8 bg-black"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo do Evento Selecionado */}
        {selectedEvent && (
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Imagem à esquerda */}
            <div className="flex-shrink-0 order-1 md:order-none">
              <div
                className="rounded-full overflow-hidden border-4 border-black"
                style={{
                  width: 'clamp(100px, 20vw, 200px)',
                  height: 'clamp(100px, 20vw, 200px)',
                }}
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto à direita */}
            <div className="order-2 md:order-none">
              <h3 className="text-black font-bold text-2xl md:text-3xl mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-black text-lg leading-relaxed max-w-xl">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
