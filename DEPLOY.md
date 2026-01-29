# Guia de Deploy do Site

## Opção 1: Vercel (Recomendado - Automático)

Vercel é a plataforma oficial para Next.js e faz deploy automático quando você faz push no GitHub.

### Passos:

1. **Acesse o Vercel**
   - Vá para https://vercel.com
   - Clique em "Sign Up"
   - Conecte sua conta do GitHub

2. **Importar Projeto**
   - Clique em "Add New Project"
   - Selecione o repositório `do0aos200pordia`
   - Clique em "Import"

3. **Configurar Variáveis de Ambiente (se necessário)**
   - Deixe as configurações padrão
   - Clique em "Deploy"

4. **Aguarde o Deploy**
   - Vercel vai compilar e fazer deploy automaticamente
   - Você receberá um link como: `https://seu-projeto.vercel.app`

### Deploy Automático
Toda vez que você fizer push no GitHub, Vercel vai fazer deploy automaticamente!

---

## Opção 2: Netlify

1. Vá para https://netlify.com
2. Clique em "Add new site"
3. Selecione "Connect to Git"
4. Autorize e selecione o repositório
5. Configure o build:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

---

## Opção 3: GitHub Pages (Mais Complexo)

GitHub Pages é gratuito, mas requer configuração adicional para Next.js.

### Pré-requisitos:
- Next.js configurado para exportar como estático
- Remover API routes (não funcionam em GitHub Pages)

### Não é recomendado para este projeto pois temos API routes!

---

## Verificar Deploy Localmente

Antes de fazer deploy, teste se está tudo funcionando:

```bash
npm run build
npm run start
```

Acesse: http://localhost:3000

---

## Como Acessar o Site Online

Após fazer deploy:

1. **Via Vercel:**
   ```
   https://seu-projeto-name.vercel.app
   ```

2. **Via domínio customizado:**
   - Adicione seu domínio no painel do Vercel
   - Atualize DNS records
   - Seu site fica em: `https://seu-dominio.com.br`

---

## Variáveis de Ambiente em Produção

Se precisar de variáveis de ambiente:

1. Vá para Settings do projeto
2. Clique em "Environment Variables"
3. Adicione as variáveis necessárias
4. Redeploy

Exemplo:
```
WEBHOOK_SECRET=sua_chave_secreta
PAYMENT_API_KEY=sua_chave_api
```

---

## Troubleshooting

### Build falha?
```bash
# Limpar cache
rm -rf .next
npm run build
```

### Erro de dependências?
```bash
npm install
npm run build
```

### Site está lento?
- Ative caching do Vercel
- Otimize imagens
- Use CDN

---

## Monitorar Deploy

No painel do Vercel você pode:
- ✅ Ver logs de build
- ✅ Ver histórico de deploys
- ✅ Monitorar performance
- ✅ Ver analytics
- ✅ Configurar domínios

---

## Próximos Passos

1. Criar conta no Vercel
2. Conectar repositório GitHub
3. Fazer deploy com um clique
4. Compartilhar link com clientes!

Seu site estará online em minutos! 🚀
