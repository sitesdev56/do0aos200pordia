import { NextRequest, NextResponse } from 'next/server';
import { recordPayment } from '@/lib/payments';

/**
 * Webhook para receber notificações de pagamento
 * Pode ser integrado com:
 * - Stripe
 * - Mercado Pago
 * - Gateway PIX
 * - Qualquer outro provider
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar signature do webhook (em produção, verificar com chave secreta)
    // const signature = request.headers.get('x-webhook-signature');
    // if (!verifySignature(signature, body)) {
    //   return NextResponse.json({ error: 'Signature inválida' }, { status: 401 });
    // }

    const { userId, pixCode, amount, status } = body;

    if (!userId || !pixCode) {
      return NextResponse.json(
        { error: 'userId e pixCode são obrigatórios' },
        { status: 400 }
      );
    }

    if (status === 'completed' || status === 'paid') {
      const result = recordPayment(userId, pixCode, amount || 12);
      
      return NextResponse.json(result, { status: 200 });
    }

    return NextResponse.json(
      { error: 'Status de pagamento não reconhecido' },
      { status: 400 }
    );
  } catch (error: any) {
    console.error('Erro ao processar webhook:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao processar pagamento' },
      { status: 500 }
    );
  }
}
