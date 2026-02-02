'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, Award, Trophy } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = `https://wa.me/5548998046395?text=${encodeURIComponent(
    'Olá Kenya! Gostaria de agendar minha consulta.'
  )}`

  const scrollToServices = () => {
    const element = document.getElementById('servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    /* Ajustado: de pt-32/pt-40 para pt-20/md:pt-24 para reduzir o vácuo inicial */
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 bg-gradient-to-br from-[#520c0b] via-[#7F3240] to-[#8B3A48] text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo Esquerdo */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <span className="text-[#F5C242] font-medium text-sm">
                Nutricionista Esportiva • CRN10 4942
              </span>
              <h1 className="text-2xl md:text-4xl font-semibold text-white/95" style={{ color: "#FFFAEC" }}>
                Kenya Curcio
              </h1>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: "#FFFAEC" }}>
                Transforme seu corpo e sua vida
              </h2>


              <p className="text-base md:text-lg text-white/80 max-w-lg" style={{ color: "#FFFAEC" }}>
                Consultoria nutricional especializada em nutrição esportiva,
                emagrecimento e estilo de vida saudável.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#520c0b] font-bold px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Agende sua Consulta
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                style={{ color: "#FFFAEC" }}
                onClick={scrollToServices}
                className="border-2 border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                Conhecer Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award size={20} className="text-white/80" />
                  <span className="text-xl md:text-3xl font-bold" style={{ color: "#FFFAEC" }}>11+</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm"  style={{ color: "#FFFAEC" }}>Anos de Experiência</p>
              </div>

              <div className="text-center border-l border-white/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Trophy size={20} className="text-white/80"/>
                  <span className="text-xl md:text-3xl font-bold" style={{ color: "#FFFAEC" }} >2x</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm" style={{ color: "#FFFAEC" }}>Campeã Bikini</p>
              </div>
            </div>
          </div>

          {/* Conteúdo Direito */}
          <div className="relative h-[450px] md:h-[550px] flex items-center justify-center animate-fade-in-right">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-white/5">
              <img 
                src="https://i.imgur.com/znhK25k.jpeg" 
                alt="Kenya Curcio - Nutricionista Esportiva" 
                className="w-full h-full object-cover object-top" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
            </div>
          </div>
        </div>

        {/* Scroll indicator - Opcional: Remova se quiser ainda menos espaço no fundo */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors hidden md:block"
          aria-label="Scroll para baixo"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}