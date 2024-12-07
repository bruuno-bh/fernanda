import React from 'react';
import { Play, Instagram } from 'lucide-react';

export default function Header() {
  const handlePlayClick = () => {
    window.open('https://www.youtube.com/watch?v=_NzqP0jmk3o', '_blank');
  };

  return (
    <header className="relative h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Barra superior com CTA e ícones do Instagram */}
      <div className="absolute top-0 w-full bg-black bg-opacity-70">
        <div className="container mx-auto px-6 py-2 max-w-6xl flex items-center justify-center gap-12">
          <p className="text-white text-sm font-medium">Siga no Instagram</p>
          <a
            href="https://www.instagram.com/oficialfernandatorres/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#FFD700] transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-sm ml-2">Fernanda Torres</span>
          </a>
          <a
            href="https://www.instagram.com/oriremarketing/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#FFD700] transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="text-sm ml-2">Orire Marketing</span>
          </a>
        </div>
      </div>

      {/* Botão de Play centralizado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handlePlayClick}
          className="group bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all"
        >
          <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Texto "#OscarForNanda" alinhado ao final (parte de baixo) da seção */}
      <div className="absolute bottom-12 w-full flex justify-center text-white">
        <h1 className="font-bold flex items-center gap-2 text-[10vw] leading-none">
          <span className="text-[#32CD32]">#</span>
          <span className="text-white">Oscar</span>
          <span className="text-[#FFD700]">For</span>
          <span className="text-[#32CD32]">Nanda</span>
        </h1>
      </div>
    </header>
  );
}
