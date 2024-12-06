import React from 'react';
import { Play } from 'lucide-react';

export default function Header() {
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

      {/* Botão de Play centralizado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="group bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all">
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
