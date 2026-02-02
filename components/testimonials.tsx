'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'Cliente 1',
      role: 'Paciente - Emagrecimento',
      quote: 'Resultados incriveis! Perdi 15kg em 4 meses com acompanhamento dedicado.',
      before_after: 'Antes e Depois',
      stars: 5,
    },
    {
      name: 'Cliente 2',
      role: 'Paciente - Nutricao Esportiva',
      quote: 'Melhorei minha performance no treino e ganhei massa muscular de forma saudavel.',
      before_after: 'Antes e Depois',
      stars: 5,
    },
    {
      name: 'Cliente 3',
      role: 'Paciente - Reeducacao Alimentar',
      quote: 'Aprendi a comer de forma equilibrada sem abrir mao do prazer.',
      before_after: 'Antes e Depois',
      stars: 5,
    },
  ]

  const whatsappUrl = 'https://wa.me/5548998046395?text=Ola Kenya! Vi os depoimentos no site e gostaria de agendar minha consulta.'

  return (
    <section ref={sectionRef} id="depoimentos" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`text-center space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#7F3240] font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Histórias de Transformação</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os resultados transformadores de quem confiou no meu trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Espaco para Foto Antes e Depois */}
              <div className="relative h-56 bg-gradient-to-br from-[#7F3240]/10 to-[#A83D52]/10 flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 bg-[#7F3240]/10 rounded-full mx-auto animate-float" />
                  <p className="text-gray-600 text-sm font-medium">{testimonial.before_after}</p>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#7F3240]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium">Ver transformacao</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-[#7F3240]/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">{testimonial.quote}</p>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7F3240] text-[#7F3240]" />
                  ))}
                </div>

                {/* Nome e Descricao */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-[#7F3240]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center bg-gradient-to-r from-[#7F3240] to-[#A83D52] rounded-2xl p-8 md:p-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Você pode ser o próximo!</h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            O seu resultado começa com uma decisão. Agende sua consulta e receba um plano 100% focado na sua realidade.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-[#7F3240] font-bold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Agendar consulta agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
