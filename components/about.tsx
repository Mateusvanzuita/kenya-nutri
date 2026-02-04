'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap } from 'lucide-react'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="sobre" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda - Foto */}
          <div className="relative flex justify-center items-start transition-all duration-700">
            <div className="relative w-full max-w-[380px] p-2 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100">
              <div className="relative rounded-[2.2rem] overflow-hidden bg-gray-50">
                <img 
                  src="https://i.imgur.com/u4pDyjy.jpeg" 
                  alt="Kenya Curcio - Nutricionista" 
                  className="w-full h-auto block shadow-inner" 
                />
              </div>

              {/* Badge de Registro */}
              <div className="absolute -bottom-4 -right-4 md:-right-10 bg-white shadow-2xl rounded-2xl p-4 border border-gray-50 flex items-center gap-3 z-20">
                <div className="w-11 h-11 bg-[#7F3240]/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#7F3240]" />
                </div>
                <div className="pr-2">
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-tight">Registro</p>
                  <p className="font-extrabold text-[#7F3240] text-base leading-none">CRN10 4942</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Texto Atualizado */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <span className="inline-block text-[#7F3240] font-semibold text-sm uppercase tracking-wider border-b-2 border-[#7F3240]/20 pb-1">
                Conheça minha história
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Olá, sou sua futura nutri!
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Me chamo <strong className="text-[#7F3240]">Kenya Curcio</strong>, sou nutricionista formada há <strong className="text-[#7F3240]">11 anos</strong>, pós-graduada em <strong className="text-[#7F3240]">Nutrição Esportiva</strong> e em <strong className="text-[#7F3240]">Fitoterapia e Suplementação Esportiva</strong>. Possuo diversos cursos na área e estou sempre em constante atualização.
                </p>
                <p>
                  Sou atleta <strong className="text-[#7F3240]">bicampeã de fisiculturismo</strong> e praticante de musculação há mais de 20 anos, vivendo na prática o que aplico em meus pacientes.
                </p>
                <p>
                  Atualmente estou cursando <strong className="text-[#7F3240]">Educação Física</strong>, com o objetivo de oferecer ainda mais suporte completo aos meus pacientes.
                </p>
                <p>
                  Além da nutrição, sou empresária no ramo de <strong className="text-[#7F3240]">alimentação saudável</strong> há mais de 8 anos, com uma loja de produtos naturais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}