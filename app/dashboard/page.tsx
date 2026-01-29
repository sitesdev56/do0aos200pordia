'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  LogOut,
  Download,
  FileText,
  CreditCard,
  CheckCircle2,
  Clock,
  Settings,
  Home,
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

export default function DashboardPage() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  const handleLogout = () => {
    setIsLogoutLoading(true);
    logout();
  };

  const isPremium = user.accessLevel === 'premium';
  const isPaymentCompleted = user.paymentStatus === 'completed';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
            <Home className="w-5 h-5" />
            Voltar ao início
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">{user.name}</span>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="gap-2"
              disabled={isLogoutLoading}
            >
              <LogOut className="w-4 h-4" />
              {isLogoutLoading ? 'Saindo...' : 'Sair'}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <aside className="md:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mx-auto mb-3">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-center text-lg">{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {isPremium ? (
                      <Badge className="bg-green-100 text-green-800 gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Premium
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        <Clock className="w-3 h-3" />
                        Gratuito
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="border-t pt-4">
                  <Link href="/settings">
                    <Button variant="outline" className="w-full gap-2">
                      <Settings className="w-4 h-4" />
                      Configurações
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-6">
            {/* Payment Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Status do Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Status Atual</span>
                    {isPaymentCompleted ? (
                      <Badge className="bg-green-100 text-green-800 gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Pagamento Realizado
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="gap-1">
                        <Clock className="w-3 h-3" />
                        Pendente
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    {isPaymentCompleted
                      ? `Seu pagamento foi confirmado em ${new Date(
                          user.purchaseDate || ''
                        ).toLocaleDateString('pt-BR')}`
                      : 'Complete seu pagamento para acessar todos os recursos'}
                  </p>
                </div>

                {!isPaymentCompleted && (
                  <Link href="/checkout">
                    <Button className="w-full bg-green-600 hover:bg-green-700 gap-2">
                      <CreditCard className="w-4 h-4" />
                      Realizar Pagamento
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>

            {/* Access & Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Seus Recursos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {isPremium ? (
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h3 className="font-medium text-green-900 mb-2">Acesso Completo Liberado!</h3>
                      <p className="text-sm text-green-800 mb-3">
                        Você agora tem acesso a todos os guias e recursos premium.
                      </p>
                      <Button className="gap-2 bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4" />
                        Baixar Guias Completos
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Guia Completo de Freelancer</p>
                          <p className="text-xs text-gray-600">50+ plataformas analisadas</p>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Estratégias de Monetização</p>
                          <p className="text-xs text-gray-600">Técnicas avançadas e comprovadas</p>
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm">Suporte Prioritário</p>
                          <p className="text-xs text-gray-600">Chat disponível 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center">
                    <p className="text-sm text-gray-600 mb-3">
                      Complete o pagamento para acessar todos os recursos premium
                    </p>
                    <Link href="/checkout">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Desbloquear Premium Agora
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Account Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informações da Conta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Nome</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-sm">{user.email}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2">
                  <Settings className="w-4 h-4" />
                  Editar Perfil
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
