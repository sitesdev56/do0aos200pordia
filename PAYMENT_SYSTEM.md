# Sistema de Detecção de Pagamento

## Visão Geral

Sistema completo de detecção de pagamentos com:
- ✅ **Verificação em Tempo Real** - Cliente verifica se pagamento foi confirmado
- ✅ **Auto-checagem** - Verifica automaticamente a cada 3 segundos
- ✅ **Webhook** - Recebe notificações de gateways de pagamento
- ✅ **Simulação** - Para testes em desenvolvimento
- ✅ **Atualização Automática** - Libera acesso premium quando pago

## Fluxo de Funcionamento

```
Cliente paga via PIX
        ↓
Gateway recebe pagamento
        ↓
Webhook notifica seu servidor
        ↓
API /api/webhooks/payment confirma
        ↓
Status do usuário atualizado
        ↓
Cliente vê "Pagamento Confirmado!"
```

## APIs Disponíveis

### 1. Verificar Pagamento
**POST** `/api/payments/check`

Verifica se um pagamento PIX foi realizado.

```typescript
// Request
{
  "pixCode": "00020126580014BR.GOV.BCB.PIX..."
}

// Response (sucesso)
{
  "pixCode": "00020126580014BR...",
  "isPaid": true,
  "message": "Pagamento confirmado!"
}

// Response (pendente)
{
  "pixCode": "00020126580014BR...",
  "isPaid": false,
  "message": "Aguardando pagamento..."
}
```

### 2. Webhook de Pagamento (Produção)
**POST** `/api/webhooks/payment`

Recebe notificações de gateways de pagamento (Stripe, Mercado Pago, etc).

```typescript
// Request do Gateway
{
  "userId": "user-id-123",
  "pixCode": "00020126580014BR...",
  "amount": 12,
  "status": "completed"  // ou "paid"
}

// Response
{
  "success": true,
  "userId": "user-id-123",
  "message": "Pagamento confirmado com sucesso!"
}
```

### 3. Simular Pagamento (Desenvolvimento)
**POST** `/api/payments/simulate`

Para testar o fluxo de pagamento em desenvolvimento.

```typescript
// Request
{
  "userId": "user-id-123",
  "pixCode": "00020126580014BR...",
  "amount": 12
}

// Response
{
  "success": true,
  "userId": "user-id-123",
  "message": "Pagamento confirmado com sucesso!",
  "warning": "⚠️ Este é um pagamento simulado para desenvolvimento"
}
```

## Como Testar

### 1. Teste Rápido (Simulação)
1. Faça login em `/login`
2. Vá para `/checkout`
3. Clique no botão **"🧪 Simular Pagamento"** (apenas em desenvolvimento)
4. Veja a confirmação e redirecionamento automático

### 2. Teste Manual
1. Faça login em `/login`
2. Vá para `/checkout`
3. Clique em **"Verificar Pagamento"**
4. O sistema procura se pagamento foi feito

### 3. Auto-Verificação
- Sistema verifica automaticamente a cada 3 segundos
- Se detectar pagamento, mostra confirmação
- Redireciona para `/dashboard` após 3 segundos

## Integração com Gateways Reais

### Integração com Stripe

```typescript
// webhook do stripe
const handleStripeWebhook = async (event: Stripe.Event) => {
  if (event.type === 'charge.succeeded') {
    const charge = event.data.object as Stripe.Charge;
    
    await fetch('/api/webhooks/payment', {
      method: 'POST',
      body: JSON.stringify({
        userId: charge.metadata.userId,
        pixCode: charge.metadata.pixCode,
        amount: charge.amount / 100,
        status: 'completed'
      })
    });
  }
};
```

### Integração com Mercado Pago

```typescript
// webhook do mercado pago
const handleMercadoPagoWebhook = async (payment: any) => {
  if (payment.status === 'approved') {
    await fetch('/api/webhooks/payment', {
      method: 'POST',
      body: JSON.stringify({
        userId: payment.external_reference,
        pixCode: payment.description,
        amount: payment.transaction_amount,
        status: 'completed'
      })
    });
  }
};
```

### Integração com Gateway PIX (Gerencianet, etc)

```typescript
// webhook do gateway pix
const handlePixWebhook = async (charge: any) => {
  if (charge.status === 'paid') {
    await fetch('/api/webhooks/payment', {
      method: 'POST',
      body: JSON.stringify({
        userId: charge.custom_id,
        pixCode: charge.pix_code,
        amount: charge.value,
        status: 'completed'
      })
    });
  }
};
```

## Segurança

### Verificação de Signature
```typescript
// Adicione validação de assinatura no webhook
import crypto from 'crypto';

export function verifySignature(
  signature: string,
  body: any,
  secret: string
): boolean {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(body))
    .digest('hex');
  
  return crypto.timingSafeEqual(signature, hash);
}
```

### Variáveis de Ambiente
```bash
# .env.local
WEBHOOK_SECRET=sua_chave_secreta_aqui
PAYMENT_API_KEY=sua_chave_api_aqui
PAYMENT_WEBHOOK_URL=https://seu-site.com/api/webhooks/payment
```

## Status do Pagamento no Dashboard

O dashboard mostra:
- ✅ **Pago** - Verde, com acesso completo
- ⏳ **Pendente** - Cinza, mostra botão "Realizar Pagamento"
- ❌ **Erro** - Vermelho, com opção de tentar novamente

## Monitoramento

Para monitorar pagamentos, adicione logs:

```typescript
// Em lib/payments.ts
export function recordPayment(userId: string, pixCode: string, amount: number) {
  const timestamp = new Date().toISOString();
  console.log(`[PAYMENT] Usuário ${userId} - R$${amount} - ${timestamp}`);
  
  recordedPayments.set(pixCode, {
    pixCode,
    amount,
    timestamp: Date.now()
  });
  
  updatePaymentStatus(userId, 'completed');
  return { success: true, userId, message: 'Pagamento confirmado!' };
}
```

## Próximos Passos

1. **Integrar com Gateway Real** - Escolha um (Stripe, Mercado Pago, Gerencianet)
2. **Adicionar Validação de Signature** - Verificar autenticidade de webhooks
3. **Implementar Tentativas de Retry** - Se webhook falhar
4. **Adicionar Notificações** - Email quando pagamento confirmado
5. **Dashboard Admin** - Ver todos os pagamentos
6. **Relatórios** - Análise de conversão e receita
