'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Instagram, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const whatsappUrl = 'https://wa.me/5548998046395?text=Olá Kenya! Gostaria de agendar minha consulta.'
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Local de Atendimento Presencial',
      // Utilizando \n para quebra de linha com a classe whitespace-pre-line abaixo
      value: 'Rua Vereador Arthur Manoel Mariano, 1342 – Sala 7\nForquilhinhas – São José / SC\n(anexo ao Studio Patrícia Malmann)',
      href: 'https://www.google.com/maps/search/?api=1&query=Rua+Vereador+Arthur+Manoel+Mariano,+1342+Forquilhinhas+São+José+SC',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(48) 99804-6395',
      href: whatsappUrl,
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'kenya.nutricionista@gmail.com',
      href: 'mailto:kenya.nutricionista@gmail.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@kenya.nutricionista',
      href: 'https://instagram.com/kenya.nutricionista',
    }
  ]

return (
    <section ref={sectionRef} id="contato" className="py-20 md:py-32 bg-[#FFFAEC] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Informações de Contato */}
          <div className={`space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <span className="text-[#7F3240] font-semibold text-sm uppercase tracking-wider">Contato</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Vamos começar sua transformação?</h2>
              <p className="text-lg text-gray-600">
                Escolha a melhor forma de entrar em contato. Estou à disposição para tirar suas dúvidas.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href || '#'}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group p-4 -m-4 rounded-2xl hover:bg-white/50 transition-colors"
                >
                  {/* Ícone com fundo que harmoniza com o creme */}
                  <div className="w-12 h-12 rounded-xl bg-[#7F3240]/10 flex items-center justify-center shrink-0 group-hover:bg-[#7F3240] transition-colors shadow-sm">
                    <item.icon className="w-6 h-6 text-[#7F3240] group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-tight">{item.label}</p>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Card do Formulário - Agora em Branco puro para destacar sobre o Creme */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(127,50,64,0.05)] border border-[#7F3240]/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <MessageCircle size={120} className="text-[#7F3240]" />
              </div>
              
              <div className="relative z-10 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-gray-900">Agende sua Consulta</h3>
                  <p className="text-gray-600">Preencha os campos abaixo ou me chame diretamente no WhatsApp.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFFAEC] bg-[#FFFAEC]/30 focus:bg-white focus:border-[#7F3240] focus:ring-4 focus:ring-[#7F3240]/5 outline-none transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(48) 9 9999-9999"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFFAEC] bg-[#FFFAEC]/30 focus:bg-white focus:border-[#7F3240] focus:ring-4 focus:ring-[#7F3240]/5 outline-none transition-all duration-300 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">Mensagem</label>
                    <textarea
                      id="message"
                      placeholder="Conte-me sobre seus objetivos..."
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFFAEC] bg-[#FFFAEC]/30 focus:bg-white focus:border-[#7F3240] focus:ring-4 focus:ring-[#7F3240]/5 outline-none transition-all duration-300 resize-none placeholder:text-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#7F3240] hover:bg-[#6B2A34] text-white font-bold py-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#7F3240]/20 group"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Enviar Mensagem
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}