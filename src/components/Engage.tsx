import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Engage() {
  return (
    <section id="engage" className="bg-blue-600 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          ENGAGE
        </h2>
        
        <form className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="instagram" className="block text-white mb-2">
              Instagram
            </label>
            <input
              type="text"
              id="instagram"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="@seuinstagram"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-white mb-2">
              Celular
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Participar
          </button>
        </form>
        
        <div className="mt-16 text-center">
          <h3 className="text-white font-bold mb-6">NOSSAS REDES</h3>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.instagram.com/oficialfernandatorres/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white/80 transition-colors"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a 
              href="https://twitter.com/atijucana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white/80 transition-colors"
            >
              <Twitter className="w-8 h-8" />
            </a>
            <a 
              href="https://www.facebook.com/FernandaTorresAtriz/?locale=pt_BR" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-white/80 transition-colors"
            >
              <Facebook className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
