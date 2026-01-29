import { NextRequest, NextResponse } from 'next/server';
import { recordPayment } from '@/lib/payments';

/**
 * API para simular pagamento (apenas para desenvolvimento)
 * Em produção, remover esta rota
 */
export async function POST(request: NextRequest) {
  try {
    // Validar que está em desenvolvimento
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Esta rota não está disponível em produção' },
        { status: 403 }
      );
    }

    const { userId, pixCode, amount } = await request.json();

    if (!userId || !pixCode) {
      return NextResponse.json(
        { error: 'userId e pixCode são obrigatórios' },
        { status: 400 }
      );
    }

    // Simular pagamento
    const result = recordPayment(userId, pixCode, amount || 12);

    return NextResponse.json({
      ...result,
      warning: '⚠️ Este é um pagamento simulado para desenvolvimento'
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erro ao simular pagamento' },
      { status: 500 }
    );
  }
}
