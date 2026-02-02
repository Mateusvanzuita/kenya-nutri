'use client'

import { Instagram, Phone, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/kenya.nutricionista' },
    { icon: Phone, label: 'WhatsApp', href: 'https://wa.me/5548998046395' },
    { icon: Mail, label: 'E-mail', href: 'mailto:kenya.nutricionista@gmail.com' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Coluna 1 - Branding */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              {/* Ajuste da Logo: Container com fundo branco arredondado para a logo jpeg brilhar */}
              <div className="w-14 h-14 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-black/20">
                <img 
                  src="https://i.imgur.com/VFBP5qt.jpeg" 
                  alt="Kenya Curcio Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kenya Curcio</h3>
                <p className="text-gray-400 text-sm">Nutricionista Esportiva</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Transformando vidas através da nutrição personalizada. Mais de 11 anos de experiência ajudando pessoas a alcançarem seus objetivos de saúde e bem-estar.
            </p>
            <p className="text-sm text-gray-500 font-medium tracking-wider">CRN10 4942</p>
          </div>

          {/* Coluna 2 - Links Rapidos */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Links Rápidos</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-[#A83D52] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#A83D52] group-hover:w-4 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Conecte-se</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-[#7F3240] flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-transparent"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              Siga-me nas redes sociais para dicas diárias de nutrição e bem-estar!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            2026 Kenya Curcio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.softara.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 text-sm flex items-center gap-1 hover:text-[#A83D52] transition-colors"
            >
              Desenvolvido por Softara
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#7F3240] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-gray-700"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}