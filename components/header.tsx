'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
   <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
  isScrolled 
    ? 'bg-white shadow-lg' // Removido o /95 e o backdrop-blur para evitar o contraste com o fundo da logo
    : 'bg-white shadow-md'
}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <img 
            src="https://i.imgur.com/VFBP5qt.jpeg" 
            alt="Kenya Curcio Logo" 
            className="h-10 w-auto group-hover:scale-105 transition-transform mix-blend-mode-multiply"
            style={{ mixBlendMode: 'multiply' }} // Garante a aplicação do modo de mesclagem
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-gray-700 hover:text-[#7F3240] font-medium transition-colors text-sm py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7F3240] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection('servicos')}
            className="bg-[#7F3240] hover:bg-[#6B2A34] text-white px-6 py-2 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-lg text-gray-700 hover:text-[#7F3240] hover:bg-[#7F3240]/5 font-medium transition-all animate-fade-in-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('servicos')}
            className="w-full mt-4 bg-[#7F3240] hover:bg-[#6B2A34] text-white font-semibold py-3"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  )
}
