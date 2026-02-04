'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Video, MapPin, Users, Dumbbell, Check, 
  ArrowRight, Utensils, BookOpen, MessageCircle, CreditCard,
  Leaf, X, ImageIcon, ChevronLeft, ChevronRight, Copy, CheckCheck
} from 'lucide-react'

export default function Services() {
  const basePhone = '5548998046395'
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showBoraSecar, setShowBoraSecar] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [fullScreenImage, setFullScreenImage] = useState<{ url: string; alt: string } | null>(null)
  const [couponCopied, setCouponCopied] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const projectPhotos = [
    { url: 'https://i.imgur.com/27VT5O1.jpeg', alt: 'Aulão de funcional' },
    { url: 'https://i.imgur.com/7N0kFeL.jpeg', alt: 'Coquetel saudável' },
    { url: 'https://i.imgur.com/uiY2cCG.jpeg', alt: 'E-book de receitas' },
    { url: 'https://i.imgur.com/4EOTogD.jpeg', alt: 'Momento do projeto' },
    { url: 'https://i.imgur.com/LPul5uy.jpeg', alt: 'Atividades do grupo' },
    { url: 'https://i.imgur.com/BepiIBc.jpeg', alt: 'Encontro presencial' },
    { url: 'https://i.imgur.com/qaOlBFl.jpeg', alt: 'Treino funcional' },
    { url: 'https://i.imgur.com/gdyLxH8.jpeg', alt: 'Participantes do projeto' },
    { url: 'https://i.imgur.com/hNRR4Gy.jpeg', alt: 'Evento especial' },
  ]

  const dietPhotos = [
    { url: 'https://i.imgur.com/HI5pcGu.jpeg', alt: 'Comida saudável' },
    { url: 'https://i.imgur.com/P0VPROL.jpeg', alt: 'Refeição balanceada' },
    { url: 'https://i.imgur.com/PiZL0Bi.jpeg', alt: 'Preparações saborosas' },
    { url: 'https://i.imgur.com/gpbzXBn.jpeg', alt: 'Comida de verdade' },
    { url: 'https://i.imgur.com/NYmYBiO.jpeg', alt: 'Refeições práticas' },
    { url: 'https://i.imgur.com/KP6Ln6W.jpeg', alt: 'Pratos variados' },
  ]

  const maxSlide = dietPhotos.length - 3 // Mostra 3 fotos por vez

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0
        return prev + 1
      })
    }, 3500) // Muda a cada 3.5 segundos (lento)

    return () => clearInterval(interval)
  }, [maxSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev >= maxSlide) return 0
      return prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev <= 0) return maxSlide
      return prev - 1
    })
  }

  const copyCoupon = () => {
    navigator.clipboard.writeText('EBOOKDANUTRI')
    setCouponCopied(true)
    setTimeout(() => setCouponCopied(false), 2000)
  }

  const mainServices = [
    {
      title: 'Consultoria Online',
      price: 'R$ 250,00',
      icon: Video,
      highlight: 'Mais popular',
      features: [
        'Avaliação por fotos e questionário',
        'Opção de vídeo chamada',
        'Plano alimentar personalizado',
        'Acompanhamento de 2 meses',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre a Consultoria Online.',
    },
    {
      title: 'Atendimento Presencial',
      price: 'R$ 300,00',
      icon: MapPin,
      features: [
        'Consulta presencial (São José - SC)',
        'Avaliação física completa',
        'Plano alimentar individualizado',
        'Acompanhamento de 2 meses',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre o Atendimento Presencial.',
    },
    {
      title: 'Plano Casal',
      price: 'R$ 500,00',
      icon: Users,
      features: [
        'Consulta conjunta',
        'Avaliação física completa para ambos',
        'Plano alimentar individual',
        'Acompanhamento de 2 meses',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre o Plano Casal.',
    },
    {
      title: 'Dieta + Treino',
      price: 'R$ 450,00',
      icon: Dumbbell,
      highlight: 'Completo',
      features: [
        'Consulta presencial e avaliação física',
        'Plano alimentar personalizado',
        '2 planilhas de treino',
        'Suporte com personal',
        'Acompanhamento de 2 meses',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre o Plano Dieta + Treino.',
    },
  ]

  const extras = [
    {
      title: 'Suporte Ativo',
      icon: MessageCircle,
      description: 'Suporte por 2 meses para ajustes no plano, esclarecimento de dúvidas e acompanhamento próximo.',
    },
    {
      title: 'Pagamento Facilitado',
      icon: CreditCard,
      description: 'Aceitamos Pix, Dinheiro e Cartão de Crédito (Com opção de parcelamento com juros da operadora).',
    },
  ]

  return (
    <section ref={sectionRef} id="servicos" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-[#7F3240] font-semibold text-sm uppercase tracking-wider">Modalidades</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Como Posso Te Ajudar?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o acompanhamento ideal para alcançar seus resultados
          </p>
        </div>

        {/* Modalidades Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainServices.map((service, index) => {
            const Icon = service.icon
            const whatsappUrl = `https://wa.me/${basePhone}?text=${encodeURIComponent(service.whatsappMessage)}`

            return (
              <div
                key={service.title}
                className={`relative bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-[#7F3240] transition-all duration-500 flex flex-col group hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 bg-[#7F3240] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {service.highlight}
                  </div>
                )}

                <div className="p-6 space-y-5 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-[#7F3240]/10 flex items-center justify-center group-hover:bg-[#7F3240] transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#7F3240] group-hover:text-white transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#7F3240] transition-colors">{service.title}</h3>
                    <div className="mt-1">
                      <span className="text-lg font-black text-[#7F3240]">{service.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#7F3240] mt-1 shrink-0" />
                        <span className="text-sm text-gray-600 leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t border-gray-50">
                  <Button
                    className="w-full bg-[#7F3240] hover:bg-[#6B2A34] text-white font-semibold group/btn"
                    asChild
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      Quero esse plano
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

      

              {/* Diferenciais/Extras Section */}
        <div className={`grid md:grid-cols-2 gap-8 pt-12 mt-12 border-t border-gray-200 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {extras.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background shadow-sm border border-gray-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#7F3240]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROJETO BORA SECAR 21 - NOVO CARD DE DESTAQUE */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7F3240] to-[#b04556] rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500"></div>
            <div className="relative p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#7F3240] to-[#b04556] rounded-2xl flex items-center justify-center shadow-lg shadow-[#7F3240]/20">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <h4 className="text-gray-900 font-black text-2xl uppercase tracking-tighter">Projeto Bora Secar 21</h4>
                  <span className="bg-[#7F3240]/10 text-[#7F3240] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Turmas Limitadas</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  Em 2025, idealizei um projeto exclusivo de emagrecimento para mulheres que já transformou a vida de muitas delas.
                </p>
              </div>
              <Button 
                onClick={() => setShowBoraSecar(true)}
                className="w-full md:w-auto bg-[#7F3240] hover:bg-[#6a2935] text-white font-bold py-6 px-8 rounded-xl transition-all shadow-md group/btn"
              >
                SAIBA MAIS SOBRE O PROJETO
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* SEÇÃO INTERATIVA - DIETA PERSONALIZADA */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-[#7F3240]/5 via-white to-[#7F3240]/5 rounded-3xl p-8 md:p-10 border border-[#7F3240]/10 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#7F3240]/10 rounded-full flex items-center justify-center">
                <Utensils className="w-7 h-7 text-[#7F3240]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Dieta Personalizada</h3>
                <p className="text-sm text-[#7F3240] font-semibold">Incluída em todos os planos</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              Estratégias com comida de verdade e preparações saborosas que se encaixam na rotina e tragam resultados duradouros.
            </p>

            {/* Carrossel de Fotos - Múltiplos Cards */}
            <div className="relative mb-6 group/carousel">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex gap-4 transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * (100 / 3 + 4 / 3)}%)` }}
                >
                  {dietPhotos.map((photo, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-[calc(33.333%-11px)] group/card"
                    >
                      <div 
                        className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg group-hover/card:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => setFullScreenImage(photo)}
                      >
                        <img 
                          src={photo.url || "/placeholder.svg"} 
                          alt={photo.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white text-sm md:text-base font-bold drop-shadow-lg">{photo.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões de Navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 text-[#7F3240]" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-10"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5 text-[#7F3240]" />
              </button>

              {/* Indicadores de Posição */}
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(maxSlide + 1)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all ${
                      index === currentSlide 
                        ? 'w-8 h-2 bg-[#7F3240]' 
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    } rounded-full`}
                    aria-label={`Ir para grupo ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#7F3240] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Comida de Verdade</h4>
                  <p className="text-xs text-gray-600">Sem substitutos ou shakes milagrosos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#7F3240] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Encaixa na Rotina</h4>
                  <p className="text-xs text-gray-600">Planejamento adaptado ao seu dia a dia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#7F3240] mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Resultados Duradouros</h4>
                  <p className="text-xs text-gray-600">Mudança real de hábitos alimentares</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEÇÃO INTERATIVA - E-BOOK DE RECEITAS */}
        <div className={`mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border-2 border-amber-100 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7F3240]/10 to-transparent rounded-full blur-3xl" />
            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#7F3240] to-[#b04556] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-amber-400 text-gray-900 font-black text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                    NOVO
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">E-book de Receitas Exclusivas</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Mais de 50 receitas criativas e opções de substituição para garantir variedade e sabor na sua dieta.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-amber-200">
                    <Check className="w-4 h-4 text-[#7F3240]" />
                    <span className="text-sm font-semibold text-gray-700">Receitas práticas</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-amber-200">
                    <Check className="w-4 h-4 text-[#7F3240]" />
                    <span className="text-sm font-semibold text-gray-700">Lista de ingredientes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-amber-200">
                    <Check className="w-4 h-4 text-[#7F3240]" />
                    <span className="text-sm font-semibold text-gray-700">Opções de substituição</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 text-center space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#7F3240]">
                  <div className="text-sm text-gray-500 line-through mb-1">R$ 69,90</div>
                  <div className="text-4xl font-black text-[#7F3240] mb-1">R$ 49,90</div>
                  <div className="text-xs text-gray-600 font-semibold mb-2">Pode ser adquirido separadamente</div>
                </div>

                {/* Cupom de Desconto */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Cupom de Desconto</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white px-4 py-2 rounded-lg border border-amber-200">
                      <p className="text-lg font-black text-[#7F3240] tracking-wider">EBOOKDANUTRI</p>
                    </div>
                    <button
                      onClick={copyCoupon}
                      className="p-2 bg-[#7F3240] hover:bg-[#6B2A34] text-white rounded-lg transition-all hover:scale-105 active:scale-95"
                      aria-label="Copiar cupom"
                    >
                      {couponCopied ? (
                        <CheckCheck className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {couponCopied && (
                    <p className="text-xs text-green-600 font-semibold">Cupom copiado!</p>
                  )}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-[#7F3240] to-[#b04556] hover:from-[#6B2A34] hover:to-[#9a3a49] text-white font-bold py-6 px-8 rounded-xl transition-all shadow-lg group/btn"
                  asChild
                >
                  <a 
                    href="https://chk.eduzz.com/39ZB1D6Z9E"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Quero o E-book
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Modal Bora Secar 21 */}
      {showBoraSecar && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowBoraSecar(false)}>
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowBoraSecar(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg border border-gray-100"
            >
              <X size={20} />
            </button>
            
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-12 bg-[#7F3240]/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-7 h-7 text-[#7F3240]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-black text-gray-900">Projeto Bora Secar 21</h3>
              </div>
              
              <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                O Bora Secar 21 é um projeto revolucionário de emagrecimento feminino que combina nutrição personalizada com treinos específicos. Ajuda mulheres a transformarem seus corpos e mentes em apenas 21 dias.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#7F3240] mb-4">O que inclui:</h4>
                  <ul className="space-y-3 text-sm text-gray-700 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Plano alimentar sugestivo</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Planilhas de treinos</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Encontros presenciais</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> E-book de receitas exclusivas</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Grupo de suporte exclusivo</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#7F3240] mb-4">Resultados esperados:</h4>
                  <ul className="space-y-3 text-sm text-gray-700 font-medium">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Emagrecimento saudável</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Melhora da disposição</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Mudança de hábitos reais</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Aumento da autoestima</li>
                  </ul>
                </div>
              </div>

              {/* GALERIA DE FOTOS */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <ImageIcon className="w-6 h-6 text-[#7F3240]" />
                  <h4 className="font-bold text-gray-900 text-xl">Fotos do Projeto</h4>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  Confira os momentos especiais do desafio: aulões de funcional, coquetéis saudáveis e muito mais!
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectPhotos.map((photo, index) => (
                    <div 
                      key={index} 
                      className="group relative aspect-square rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200 hover:border-[#7F3240] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setFullScreenImage(photo)}
                    >
                      <img 
                        src={photo.url || "/placeholder.svg"} 
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center bg-[#7F3240]/5 p-8 rounded-3xl border border-[#7F3240]/10">
                <p className="text-gray-900 font-bold mb-4 italic">Faltam poucos dias para a próxima turma!</p>
                <a
                  href="https://wa.me/5548998046395?text=Olá Kenya! Gostaria de entrar na lista de espera para o Projeto Bora Secar 21."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#7F3240] hover:bg-[#6a2935] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-lg active:scale-95"
                >
                  Quero entrar na lista de espera <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Imagem em Tamanho Real */}
      {fullScreenImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300" 
          onClick={() => setFullScreenImage(null)}
        >
          <button
            onClick={() => setFullScreenImage(null)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={fullScreenImage.url || "/placeholder.svg"} 
              alt={fullScreenImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-xl md:text-2xl font-bold drop-shadow-lg text-center">{fullScreenImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
