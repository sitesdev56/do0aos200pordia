'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle2, Copy, Home } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useAuth } from '@/hooks/use-auth';

const PIX_CODE = "00020126580014BR.GOV.BCB.PIX013614658ec5-d2ed-4164-8773-4355ab2d2f15520400005303986540512.005802BR5916Diego Lima Souza6009SAO PAULO6214051032JRFxaJFG63043656";

export default function CheckoutPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy PIX code');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Acesso Completo Premium</span>
                  <span className="font-semibold">R$ 12,00</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-blue-600">R$ 12,00</span>
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  ✓ Acesso vitalício ao conteúdo premium
                  <br />✓ Guia completo de 50+ plataformas
                  <br />✓ Suporte prioritário
                  <br />✓ Atualizações mensais
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Método de Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <h3 className="font-semibold text-lg">Pague via PIX</h3>
                <p className="text-gray-600">Escaneie o QR Code abaixo ou copie o código PIX</p>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl border border-gray-300">
                    <QRCodeSVG
                      value={PIX_CODE}
                      size={200}
                      level="H"
                      includeMargin={false}
                      bgColor="white"
                      fgColor="black"
                    />
                  </div>
                </div>

                {/* Copy PIX Code */}
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600 font-mono break-all leading-relaxed mb-2">
                      {PIX_CODE}
                    </p>
                  </div>
                  <Button
                    onClick={handleCopyPix}
                    className="w-full gap-2 bg-blue-600 hover:bg-blue-700"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? 'Código copiado!' : 'Copiar código PIX'}
                  </Button>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">Como funciona:</h4>
                <ol className="text-sm text-green-800 space-y-1">
                  <li>1. Abra seu banco ou app de PIX</li>
                  <li>2. Escolha pagar via PIX</li>
                  <li>3. Escaneie o QR Code ou cole o código</li>
                  <li>4. Confirme o pagamento</li>
                  <li>5. Seu acesso será ativado automaticamente!</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation Message */}
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Pagamento seguro e protegido</p>
                  <p className="text-sm text-green-800">
                    Seus dados estão protegidos. Após a confirmação do pagamento, você terá acesso imediato a todos os recursos premium.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="flex gap-3">
            <Link href="/dashboard" className="flex-1">
              <Button variant="outline" className="w-full">
                Voltar para Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
