import React from 'react';

export default function Bio() {
  return (
    <section id="bio" className="bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Imagem de perfil em círculo */}
          <div className="relative w-64 h-64 overflow-hidden rounded-full flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
              alt="Fernanda Torres"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto ao lado da imagem */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">Fernanda Torres</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Fernanda Torres é uma das mais versáteis e premiadas atrizes
              brasileiras. Com uma carreira que se estende por mais de quatro
              décadas, ela tem demonstrado consistentemente sua capacidade
              extraordinária de dar vida a personagens complexos e memoráveis.
              Sua atuação transcende fronteiras, tendo sido a primeira e única
              atriz brasileira a ganhar o prêmio de Melhor Atriz no Festival de
              Cannes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
