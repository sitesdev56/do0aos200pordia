"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, ShieldCheck, Zap, Lock, Copy, CheckCircle2 } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

const PIX_CODE = "00020126580014BR.GOV.BCB.PIX013614658ec5-d2ed-4164-8773-4355ab2d2f15520400005303986540512.005802BR5916Diego Lima Souza6009SAO PAULO6214051032JRFxaJFG63043656"

const included = [
  "Acesso a +50 plataformas freelancer",
  "Guia de como começar em cada plataforma",
  "Lista atualizada mensalmente",
  "Suporte por email",
]

export function CTASection() {
  const [copied, setCopied] = useState(false)
  const [showPix, setShowPix] = useState(false)

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error("Failed to copy PIX code")
    }
  }

  return (
    <section id="cta" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Ative seu acesso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Taxa única para{" "}
              <span className="text-primary">começar a ganhar</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pagamento simbólico para ativação e manutenção do acesso. Sem
              mensalidades, sem cobranças escondidas.
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="border-2 border-primary shadow-2xl overflow-hidden max-w-lg mx-auto">
            <div className="bg-primary p-6 text-center">
              <h3 className="text-primary-foreground font-semibold text-lg mb-2">
                Acesso Completo
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-primary-foreground/70 text-xl">R$</span>
                <span className="text-6xl font-bold text-primary-foreground">
                  12
                </span>
                <span className="text-primary-foreground/70 text-xl">,00</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mt-2">
                Pagamento único
              </p>
            </div>

            <CardContent className="p-8">
              {/* What's included */}
              <div className="space-y-4 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {!showPix ? (
                <>
                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full text-lg py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setShowPix(true)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Quero Mudar de Vida Agora
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </>
              ) : (
                <>
                  {/* PIX Payment Section */}
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-foreground mb-2">
                        Pague via PIX
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Escaneie o QR Code ou copie o código
                      </p>
                    </div>

                    {/* QR Code */}
                    <div className="flex justify-center">
                      <div className="bg-card p-4 rounded-xl border border-border">
                        <QRCodeSVG
                          value={PIX_CODE}
                          size={180}
                          level="H"
                          includeMargin={false}
                          bgColor="transparent"
                          fgColor="currentColor"
                          className="text-foreground"
                        />
                      </div>
                    </div>

                    {/* Copy PIX Code */}
                    <div className="space-y-3">
                      <div className="bg-secondary/50 rounded-lg p-3 border border-border">
                        <p className="text-xs text-muted-foreground font-mono break-all leading-relaxed">
                          {PIX_CODE.slice(0, 60)}...
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={handleCopyPix}
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2 text-primary" />
                            Código copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copiar código PIX
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-muted-foreground">
                        Após o pagamento, clique no botão abaixo para acessar
                      </p>
                      <a
                        href="/acesso"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Já paguei, quero meu acesso
                      </a>
                    </div>
                  </div>
                </>
              )}

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Pagamento seguro</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Dados protegidos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional info */}
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
            Após a confirmação do pagamento, você receberá acesso imediato à
            área com todas as plataformas organizadas.
          </p>
        </div>
      </div>
    </section>
  )
}
