import React from 'react';

const navItems = [
  { id: 'bio', label: 'BIO', color: 'bg-black' },
  { id: 'timeline', label: 'TIMELINE', color: 'bg-[#32CD32]' },
  { id: 'onde-assistir', label: 'ONDE ASSISTIR', color: 'bg-[#FFD700]' },
  { id: 'engage', label: 'ENGAGE', color: 'bg-blue-600' },
];

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Calcula a altura da barra de navegação
    if (element) {
      const elementPosition = element.offsetTop - navbarHeight; // Subtrai a altura do navbar
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`${item.color} ${
                item.id === 'onde-assistir' ? 'text-black' : 'text-white'
              } py-3 px-4 font-bold hover:opacity-90 transition-opacity rounded-lg text-sm md:text-base flex-1 md:flex-none md:px-6`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
