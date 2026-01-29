import { TrendingUp } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg text-background">
              Renda Digital
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-background/70 hover:text-background transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Copyright */}
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Renda Digital. Todos os direitos
            reservados.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-xs max-w-2xl mx-auto leading-relaxed">
            Este site apresenta oportunidades de trabalho freelancer. Os
            resultados podem variar de acordo com a dedicação e esforço de cada
            pessoa. Não garantimos resultados financeiros específicos.
          </p>
        </div>
      </div>
    </footer>
  )
}
