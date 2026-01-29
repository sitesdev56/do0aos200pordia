"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MousePointerClick, KeyRound, Banknote } from "lucide-react"

const steps = [
  {
    icon: MousePointerClick,
    step: "01",
    title: "Acesse a plataforma",
    description:
      "Navegue pelo nosso site e descubra as melhores oportunidades de trabalho online disponíveis.",
  },
  {
    icon: KeyRound,
    step: "02",
    title: "Ative seu acesso",
    description:
      "Com uma taxa simbólica única, você libera o acesso completo a todas as plataformas freelancers.",
  },
  {
    icon: Banknote,
    step: "03",
    title: "Comece a ganhar dinheiro",
    description:
      "Explore as plataformas, candidate-se aos trabalhos e comece a construir sua renda digital.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Como funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Três passos simples para{" "}
            <span className="text-primary">começar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo descomplicado para você iniciar no mercado digital de
            forma organizada e segura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <Card
              key={item.step}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
