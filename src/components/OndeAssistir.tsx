import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function OndeAssistir() {
  const [cep, setCep] = useState('');

  return (
    <section id="onde-assistir" className="bg-black text-white py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Coluna Esquerda */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-[#FFD700] text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              ONDE
              <br />
              ASSISTIR?
            </h2>

            <p className="text-white text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FFD700] font-bold text-xl">CEP</span>
              <input
                type="text"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="00000-000"
                className="px-4 py-2 bg-white text-black rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
            </div>

            {/* Bullet points com ícones */}
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFD700] w-6 h-6 mt-1" />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam
                </p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFD700] w-6 h-6 mt-1" />
                <p>
                  Nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                  erat
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Mapa) */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
              {/* Você pode substituir a URL abaixo por uma imagem real do mapa */}
              <img
                src="https://via.placeholder.com/600x400?text=MAPA+AQ"
                alt="Mapa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-[#FFD700] w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
