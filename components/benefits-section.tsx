"use client"

import { Home, Clock, Shield, GraduationCap } from "lucide-react"

const benefits = [
  {
    icon: Home,
    title: "Trabalhe de casa",
    description:
      "Sem deslocamento, sem trânsito. Trabalhe do conforto da sua casa com total flexibilidade.",
  },
  {
    icon: Clock,
    title: "Horários flexíveis",
    description:
      "Você define quando trabalhar. Ideal para quem busca conciliar com outras atividades.",
  },
  {
    icon: Shield,
    title: "Plataformas confiáveis",
    description:
      "Acesso a plataformas verificadas e reconhecidas no mercado de trabalho freelancer.",
  },
  {
    icon: GraduationCap,
    title: "Ideal para iniciantes",
    description:
      "Não precisa de experiência prévia. Aprenda enquanto ganha com oportunidades para todos os níveis.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Benefícios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Por que escolher o{" "}
              <span className="text-primary">trabalho online?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O mercado digital oferece oportunidades reais para quem busca
              independência financeira. Descubra como você pode transformar seu
              tempo em renda.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-primary/5 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-1">+50</div>
                <div className="text-sm text-muted-foreground">
                  Plataformas disponíveis
                </div>
              </div>
              <div className="p-6 bg-primary/5 rounded-2xl">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Acesso ilimitado
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
