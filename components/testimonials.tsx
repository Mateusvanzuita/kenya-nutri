'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

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
      name: 'Débora T.',
      role: 'Emagrecimento',
      quote: 'Ameiiii a primeira consulta, tudo tão perfeito com tanto cuidado e atenção com a gente paciente super indico e vamos ter um belo tempo pela frente ameiiiiiiiiiiiiiiii nota milllll',
      image: 'https://i.imgur.com/1Bzd1NP.jpeg',
      stars: 5,
    },
    {
      name: '',
      role: 'Paciente',
      quote: 'Eu faço acompanhamento com a Kenya desde Setembro/2025, fiquei em choque com a minha diferença após 16 dias de dieta ajustada. O mais incrível é que eu comecei a comer mais do que quando "fazia dieta sozinha" e coisas surreais de tão boas, isso faz com que a gente siga a dieta tranquilamente, sem passar necessidade e/ou vontades.',
      image: 'https://i.imgur.com/DjCpYaX.jpeg',
      stars: 5,
    },
    {
      name: 'Anderson C.',
      role: 'Paciente',
      quote: 'Ótima profissional. Me fez alcançar resultados que eu nunca tive. Perdi gordura corporal e ganhei massa muscular em menos de 2 meses de acompanhamento.',
      image: 'https://i.imgur.com/a46WwyC.jpeg',
      stars: 5,
    },
    {
      name: 'Patrícia A.',
      role: 'Paciente',
      quote: 'Também estou muito feliz só tenho a te agradecer 💗 sem você esses resultados não seriam possíveis. Nunca vi uma nutri igual, plano igual, tão atenciosa',
      image: 'https://i.imgur.com/Jf3iKIN.jpeg',
      stars: 5,
    },
  ]

  const whatsappUrl = 'https://wa.me/5548998046395?text=Ola Kenya! Vi os depoimentos no site e gostaria de agendar minha consulta.'

  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

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

        {/* Carousel Container with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white hover:bg-[#7F3240] text-[#7F3240] hover:text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white hover:bg-[#7F3240] text-[#7F3240] hover:text-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[280px] bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Foto de depoimento */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={testimonial.image || "/placeholder.svg"} 
                    alt={`Depoimento de ${testimonial.name || 'cliente'}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 space-y-4">
                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-8 h-8 text-[#7F3240]/20 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-6 text-sm">{testimonial.quote}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#7F3240] text-[#7F3240]" />
                    ))}
                  </div>

                  {/* Nome e Descricao */}
                  <div className="pt-4 border-t border-gray-100">
                    {testimonial.name && <p className="font-bold text-gray-900">{testimonial.name}</p>}
                    <p className="text-sm text-[#7F3240]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
