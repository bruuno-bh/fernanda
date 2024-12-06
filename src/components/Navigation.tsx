import React from 'react';

const navItems = [
  { id: 'bio', label: 'BIO', color: 'bg-black' },
  { id: 'timeline', label: 'TIMELINE', color: 'bg-[#32CD32]' },
  { id: 'onde-assistir', label: 'ONDE ASSISTIR', color: 'bg-[#FFD700]' },
  { id: 'engage', label: 'ENGAGE', color: 'bg-blue-600' },
];

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-center px-4 py-4 bg-gray-100">
      <div className="flex gap-4 w-full max-w-6xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`${item.color} ${
              item.id === 'onde-assistir' ? 'text-black' : 'text-white'
            } py-4 px-6 font-bold hover:opacity-90 transition-opacity rounded-xl flex-1`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}