import { useState } from 'react';
import { Menu, X, FileCheck } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">Paulo William Alvin</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-700 hover:text-slate-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5565999163045"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Solicite Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5565999163045"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors text-center"
              >
                Solicite Orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
