'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  Video, MapPin, Users, Dumbbell, Check, 
  ArrowRight, Utensils, BookOpen, MessageCircle, CreditCard,
  Leaf, X, Image as ImageIcon
} from 'lucide-react'

export default function Services() {
  const basePhone = '5548998046395'
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showBoraSecar, setShowBoraSecar] = useState(false)

  const projectPhotos = [
    { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format', alt: 'Resultado 1' },
    { url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format', alt: 'Resultado 2' },
    { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format', alt: 'Resultado 3' },
    { url: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&auto=format', alt: 'Resultado 4' },
  ]

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
      price: 'R$ 280,00',
      icon: MapPin,
      features: [
        'Consulta presencial (São José - SC)',
        'Avaliação física (Medidas, % Gordura, % Massa)',
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
        'Consulta conjunta no mesmo dia',
        'Avaliação física completa para ambos',
        'Plano alimentar individual para cada um',
        'Acompanhamento de 2 meses',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre o Plano Casal.',
    },
    {
      title: 'Dieta + Treino',
      price: 'R$ 400,00',
      icon: Dumbbell,
      highlight: 'Completo',
      features: [
        'Consulta presencial e avaliação física',
        'Plano alimentar personalizado',
        '2 treinos no período com personal',
        'Suporte integrado e acompanhamento',
      ],
      whatsappMessage: 'Olá, Kenya! Gostaria de saber mais sobre o Plano Dieta + Treino.',
    },
  ]

  const extras = [
    {
      title: 'Dieta Personalizada',
      icon: Utensils,
      description: 'Plano baseado no seu objetivo e rotina, com foco em uma boa relação com a comida, sem restrições extremas.',
    },
    {
      title: 'E-book de Receitas',
      icon: BookOpen,
      description: 'Acesso exclusivo a receitas criativas e opções de substituição para garantir variedade na sua dieta.',
    },
    {
      title: 'Suporte Ativo',
      icon: MessageCircle,
      description: 'Suporte por 2 meses para ajustes no plano, esclarecimento de dúvidas e acompanhamento próximo.',
    },
    {
      title: 'Pagamento Facilitado',
      icon: CreditCard,
      description: 'Aceitamos Pix, Dinheiro e Cartão de Crédito (com opção de parcelamento).',
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
            Escolha o acompanhamento ideal para transformar seus resultados
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

        {/* PROJETO BORA SECAR 21 - NOVO CARD DE DESTAQUE */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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

        {/* Diferenciais/Extras Section */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 mt-12 border-t border-gray-200 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Plano alimentar personalizado</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Treinos específicos para emagrecimento</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#7F3240]" /> Acompanhamento diário</li>
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
                <div className="flex items-center gap-2 mb-2">
                  <ImageIcon className="w-5 h-5 text-[#7F3240]" />
                  <h4 className="font-bold text-gray-900">Transformações e Resultados</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {projectPhotos.map((photo, index) => (
                    <div key={index} className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                      <img 
                        src={photo.url} 
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
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
    </section>
  )
}