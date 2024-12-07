import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function OndeAssistir() {
  const [cep, setCep] = useState('');

  const handleSearch = () => {
    if (cep) {
      const encodedCep = encodeURIComponent(cep);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedCep}`;
      window.open(googleMapsUrl, '_blank'); // Abre o Google Maps em uma nova aba
    } else {
      alert('Por favor, insira um CEP válido.');
    }
  };

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
              Insira seu CEP abaixo para localizar locais próximos no mapa.
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
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-[#FFD700] text-black font-bold rounded-md hover:opacity-90"
              >
                Buscar
              </button>
            </div>

            {/* Pontos de Interesse com Ícones */}
            <div className="flex flex-col gap-3 text-lg">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFD700] w-6 h-6 mt-1" />
                <p>Encontre cinemas e locais de exibição próximos.</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#FFD700] w-6 h-6 mt-1" />
                <p>Insira seu CEP para buscar locais personalizados.</p>
              </div>
            </div>
          </div>

          {/* Coluna Direita (Imagem do Mapa) */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="https://www.istanbul-city-guide.com/map/brazil/rio-de-janeiro/map_of_rio_de_janeiro.jpg"
                alt="Mapa do Rio de Janeiro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="text-black w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
