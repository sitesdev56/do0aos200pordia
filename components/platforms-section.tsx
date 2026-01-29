"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  PenTool,
  Code,
  Camera,
  Headphones,
  FileText,
  Globe,
  Users,
} from "lucide-react"

const platforms = [
  {
    icon: Briefcase,
    title: "Trabalho Geral",
    description: "Vagas diversificadas para todos os perfis",
  },
  {
    icon: PenTool,
    title: "Design & Criação",
    description: "Para designers e criativos",
  },
  {
    icon: Code,
    title: "Tecnologia & Dev",
    description: "Desenvolvimento e programação",
  },
  {
    icon: Camera,
    title: "Vídeo & Foto",
    description: "Produção de conteúdo visual",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    description: "Suporte e atendimento ao cliente",
  },
  {
    icon: FileText,
    title: "Redação & Texto",
    description: "Escrita e produção de conteúdo",
  },
  {
    icon: Globe,
    title: "Marketing Digital",
    description: "Redes sociais e marketing online",
  },
  {
    icon: Users,
    title: "Assistência Virtual",
    description: "Tarefas administrativas remotas",
  },
]

export function PlatformsSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Plataformas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comece a ganhar de{" "}
            <span className="text-primary">R$50 a R$200 por dia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trabalhando de casa, no seu tempo, com plataformas que realmente pagam.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <Card
              key={platform.title}
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <platform.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {platform.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
