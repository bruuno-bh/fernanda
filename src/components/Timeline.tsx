import React, { useState } from 'react';

const timelineEvents = [
  {
    year: 2004,
    title: 'Primeiro Oscar',
    description: 'Primeira indicação ao Oscar de Melhor Atriz',
    image:
      'https://s2-gshow.glbimg.com/gGDplAOiJ7haMbHOyKhzNwsCOS4=/216x0:1386x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/6/y/B8cUhBTWujfJQxLgB4Dg/fernanda-torres-altas-horas.png',
  },
  {
    year: 2008,
    title: 'Reconhecimento Internacional',
    description: 'Prêmio de Melhor Atriz em Cannes',
    image:
      'https://revistatrip.uol.com.br/dados/_imgBank/1414684446trip237-p015v1-1.jpg',
  },
  {
    year: 2012,
    title: 'Conquista Nacional',
    description: 'Grande Prêmio do Cinema Brasileiro',
    image:
      'https://img.band.uol.com.br/image/2024/09/03/fernanda-torres-19228_800x450.webp',
  },
  {
    year: 2024,
    title: 'Campanha Oscar',
    description: '#OscarForNanda',
    image:
      'https://s2-g1.glbimg.com/RlLlmWbnGuGbZAz6qNRUHnMy7r4=/0x0:1024x682/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/A/B/HN9PAzQpyfN19RkFoFaA/000-36fb4bf.jpg',
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
                {/* Ano */}
                <span
                  className={`text-xl md:text-2xl mb-2 font-bold ${
                    hoveredIndex === index ? 'text-[#FFD700]' : 'text-black'
                  }`}
                >
                  {event.year}
                </span>

                {/* Bolinha no início da linha vertical */}
                <div className="relative flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      hoveredIndex === index ? 'bg-[#FFD700]' : 'bg-black'
                    }`}
                  ></div>
                  <div
                    className={`w-1 h-8 ${
                      hoveredIndex === index ? 'bg-[#FFD700]' : 'bg-black'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conteúdo do Evento Selecionado */}
        {selectedEvent && (
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            {/* Imagem à esquerda */}
            <div className="flex-shrink-0">
              <div
                className="rounded-full overflow-hidden border-4 border-black"
                style={{
                  width: 'clamp(100px, 30vw, 200px)',
                  height: 'clamp(100px, 30vw, 200px)',
                }}
              >
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texto à direita, centralizado verticalmente */}
            <div className="flex-1 text-center max-w-sm">
              <h3 className="text-black font-bold text-2xl mb-4">
                {selectedEvent.title}
              </h3>
              <p className="text-black text-lg leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
