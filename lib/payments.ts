import { updatePaymentStatus } from './auth';

// Simulação de pagamentos registrados (em produção, seria via gateway real)
const recordedPayments: Map<string, { pixCode: string; amount: number; timestamp: number }> = new Map();

// Registra um pagamento (chamado pelo webhook do gateway)
export function recordPayment(userId: string, pixCode: string, amount: number) {
  recordedPayments.set(pixCode, {
    pixCode,
    amount,
    timestamp: Date.now()
  });
  
  // Atualizar status do usuário
  updatePaymentStatus(userId, 'completed');
  
  return {
    success: true,
    userId,
    message: 'Pagamento confirmado com sucesso!'
  };
}

// Verifica se um pagamento já foi realizado
export function checkPaymentStatus(pixCode: string) {
  return recordedPayments.has(pixCode);
}

// Obter detalhes do pagamento
export function getPaymentDetails(pixCode: string) {
  return recordedPayments.get(pixCode) || null;
}

// Lista de pagamentos para admin (em produção, usar banco de dados)
export function listPayments() {
  return Array.from(recordedPayments.values());
}
