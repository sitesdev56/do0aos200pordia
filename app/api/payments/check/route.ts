import { NextRequest, NextResponse } from 'next/server';
import { checkPaymentStatus } from '@/lib/payments';

/**
 * API para verificar status de pagamento
 * Cliente pode chamar para saber se pagamento foi confirmado
 */
export async function POST(request: NextRequest) {
  try {
    const { pixCode } = await request.json();

    if (!pixCode) {
      return NextResponse.json(
        { error: 'pixCode é obrigatório' },
        { status: 400 }
      );
    }

    const isPaid = checkPaymentStatus(pixCode);

    return NextResponse.json({
      pixCode,
      isPaid,
      message: isPaid ? 'Pagamento confirmado!' : 'Aguardando pagamento...'
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Erro ao verificar pagamento' },
      { status: 500 }
    );
  }
}
