# 💰 Renda Digital - Plataforma de Acesso a Freelancer

Plataforma completa para vender acesso a guia de plataformas freelancer com sistema de autenticação, pagamento via PIX e detecção automática.

## 🚀 Recursos Principais

### ✅ Sistema de Autenticação
- Registro de usuários com email/senha
- Login seguro
- Dashboard pessoal
- Proteção de rotas
- Demo account incluída

### 💳 Sistema de Pagamento
- PIX com QR Code
- Verificação automática a cada 3 segundos
- Webhook para gateways reais
- Simulação para testes
- Atualização de acesso em tempo real

### 🛡️ Segurança
- Senhas hashadas (SHA-256)
- Validação de dados
- Proteção de rotas autenticadas
- Status de pagamento rastreado

## 📱 Páginas Disponíveis

| Página | URL | Descrição |
|--------|-----|-----------|
| Home | `/` | Landing page com proposta de valor |
| Login | `/login` | Página de autenticação |
| Registro | `/register` | Criar nova conta |
| Dashboard | `/dashboard` | Painel do usuário (protegido) |
| Checkout | `/checkout` | Página de pagamento |
| Acesso | `/acesso` | Lista de plataformas (protegido) |

## 🧪 Testar Localmente

### Requisitos
- Node.js 18+
- npm ou pnpm

### Instalação

```bash
# Clonar repositório
git clone https://github.com/sitesdev56/do0aos200pordia.git
cd do0aos200pordia

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: **http://localhost:3000**

### Demo Account

Use para testar:
- **Email:** demo@example.com
- **Senha:** 123456
- **Status:** Premium (pago)

## 🌐 Deploy Online

### Opção 1: Vercel (Recomendado)

1. Vá para https://vercel.com
2. Clique "Add New Project"
3. Selecione seu repositório GitHub
4. Clique "Deploy"

**Pronto!** Seu site estará em: `https://seu-projeto.vercel.app`

### Opção 2: Netlify

1. Vá para https://netlify.com
2. Clique "Add new site from Git"
3. Conecte seu GitHub
4. Configure o build e deploy

### Opção 3: Seu próprio servidor

```bash
# Build para produção
npm run build

# Rodar em produção
npm run start
```

## 📚 Documentação

- **[AUTH_SYSTEM.md](AUTH_SYSTEM.md)** - Sistema de autenticação
- **[PAYMENT_SYSTEM.md](PAYMENT_SYSTEM.md)** - Sistema de pagamento
- **[DEPLOY.md](DEPLOY.md)** - Guia de deployment

## 🔧 Configuração

### Variáveis de Ambiente

Crie `.env.local`:

```bash
# Opcional - para gateways reais
WEBHOOK_SECRET=sua_chave_secreta
PAYMENT_API_KEY=sua_chave_api
NEXT_PUBLIC_SITE_URL=https://seu-site.com
```

## 🎯 Como Funciona

### Fluxo do Cliente

```
1. Cliente acessa home page
   ↓
2. Clica "Quero Mudar de Vida Agora"
   ↓
3. Cria conta em /register
   ↓
4. Vai para /dashboard
   ↓
5. Clica "Realizar Pagamento"
   ↓
6. Vai para /checkout
   ↓
7. Faz PIX (copia código ou escaneia QR)
   ↓
8. Sistema detecta pagamento automaticamente
   ↓
9. Vê "Pagamento Confirmado!"
   ↓
10. Redirecionado para /dashboard com acesso premium
```

## 📊 Stack Técnico

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js 16, API Routes
- **UI Components:** Radix UI, shadcn/ui
- **Autenticação:** localStorage + API
- **Pagamento:** PIX (integração pronta para gateways)
- **Deploy:** Vercel

## 🔐 Segurança

- Senhas hasheadas com SHA-256
- Validação em frontend e backend
- Proteção CSRF (via Next.js)
- Variáveis sensíveis em .env
- Webhook signature verification (implementável)

## 💡 Integração com Gateways Reais

O sistema já está pronto para:
- ✅ Stripe
- ✅ Mercado Pago
- ✅ Gerencianet (PIX)
- ✅ Qualquer outro gateway

Ver documentação em [PAYMENT_SYSTEM.md](PAYMENT_SYSTEM.md)

## 📞 Suporte

Para integração com gateways reais ou customizações:
1. Consulte a documentação em `/PAYMENT_SYSTEM.md`
2. Implemente o webhook específico do seu gateway
3. Teste em desenvolvimento com `/api/payments/simulate`

## 📈 Próximas Melhorias

- [ ] Dashboard admin para gerenciar clientes
- [ ] Relatórios de vendas e receita
- [ ] Recuperação de senha por email
- [ ] 2FA (autenticação de dois fatores)
- [ ] API de webhook testing
- [ ] Histórico de transações
- [ ] Notificações por email
- [ ] Suporte a múltiplas moedas

## 📝 Licença

Propriedade do projeto - todos os direitos reservados

## 🚀 Começar Agora

1. Clone o repositório
2. `npm install`
3. `npm run dev`
4. Acesse http://localhost:3000
5. Teste com demo@example.com / 123456
6. Faça deploy no Vercel!

---

**Seu site está pronto para gerar receita!** 💰
