# Sistema de Autenticação e Dashboard

## Visão Geral

Um sistema completo de login, registro e dashboard para gerenciar acesso a conteúdo premium após pagamento.

## Funcionalidades

✅ **Registro de Usuários** - Criar nova conta com email e senha
✅ **Login de Usuários** - Autenticar com credenciais
✅ **Dashboard Pessoal** - Painel com informações do usuário
✅ **Status de Pagamento** - Verificar se pagamento foi realizado
✅ **Acesso Premium** - Recursos desbloqueados após pagamento
✅ **Logout** - Sair da conta

## Rotas Disponíveis

### Públicas (sem autenticação)
- `/` - Home page
- `/login` - Página de login
- `/register` - Página de registro
- `/checkout` - Resumo e instruções de pagamento

### Protegidas (requer login)
- `/dashboard` - Painel do usuário
- `/dashboard/settings` - Configurações da conta

## Como Usar

### 1. Criar uma Conta

1. Acesse `/register`
2. Preencha com:
   - Nome completo
   - Email
   - Senha (mínimo 6 caracteres)
   - Confirmar senha
3. Clique em "Criar Conta"
4. Será redirecionado para o dashboard

### 2. Fazer Login

1. Acesse `/login`
2. Use as credenciais criadas
3. **Demo:** Email: `demo@example.com` | Senha: `123456`

### 3. Acessar o Dashboard

Após login, você verá:
- ✓ Informações da conta
- ✓ Status do pagamento
- ✓ Recursos disponíveis
- ✓ Botão para realizar pagamento

### 4. Pagamento

1. Clique em "Realizar Pagamento"
2. Na página de checkout `/checkout`:
   - Escaneie o QR Code PIX
   - Ou copie o código PIX
   - Realize o pagamento
3. Após confirmar, seu acesso será ativado

## Estrutura de Arquivos

```
app/
├── api/auth/
│   ├── login/route.ts          # API para login
│   └── register/route.ts       # API para registro
├── login/page.tsx              # Página de login
├── register/page.tsx           # Página de registro
├── dashboard/page.tsx          # Painel do usuário
└── checkout/page.tsx           # Página de pagamento

hooks/
├── use-auth.ts                 # Hook para autenticação

lib/
└── auth.ts                     # Lógica de autenticação
```

## Como Funciona a Autenticação

1. **Registro:** Dados salvos em memória (em produção, use banco de dados)
2. **Login:** Valida credenciais e retorna dados do usuário
3. **Sessão:** Armazenada em `localStorage` do navegador
4. **Proteção:** `useAuth()` redireciona para login se não autenticado

## Dados do Usuário

Cada usuário possui:
```typescript
{
  id: string;
  email: string;
  name: string;
  accessLevel: 'free' | 'premium';
  paymentStatus: 'pending' | 'completed';
  purchaseDate?: string;
}
```

## Demo Rápida

1. Vá para `/login`
2. Use:
   - Email: `demo@example.com`
   - Senha: `123456`
3. Você verá um painel completo com acesso premium

## Próximos Passos

Para produção:
1. Substituir `localStorage` por cookies seguros
2. Integrar banco de dados (MongoDB, PostgreSQL, etc.)
3. Adicionar autenticação com JWT
4. Integrar gateway de pagamento real (Stripe, Pix, etc.)
5. Adicionar validação email
6. Implementar recuperação de senha
7. Adicionar 2FA (autenticação de dois fatores)

## Customização

### Mudar valor do PIX
No arquivo `components/cta-section.tsx`:
```typescript
const PIX_CODE = "SEU_CODIGO_PIX_AQUI"
```

### Mudar preço
Em `components/cta-section.tsx` e `app/checkout/page.tsx`, altere o valor R$ 12,00

### Mudar benefícios inclusos
Em `components/cta-section.tsx`, edite o array `included`
