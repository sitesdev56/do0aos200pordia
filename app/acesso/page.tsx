"use client";

import React from "react"

import { useState } from "react";
import {
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Star,
  Globe,
  DollarSign,
  Clock,
  CheckCircle2,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface Platform {
  name: string;
  url: string;
  description: string;
  difficulty: "Fácil" | "Médio" | "Avançado";
  earnings: string;
  guide: string[];
  tips: string[];
}

interface Category {
  name: string;
  icon: React.ReactNode;
  platforms: Platform[];
}

const categories: Category[] = [
  {
    name: "Freelancer Geral",
    icon: <Globe className="w-5 h-5" />,
    platforms: [
      {
        name: "Workana",
        url: "https://www.workana.com",
        description: "Maior plataforma de freelancer da América Latina",
        difficulty: "Fácil",
        earnings: "R$50 - R$500/projeto",
        guide: [
          "Crie sua conta gratuitamente em workana.com",
          "Complete 100% do seu perfil com foto profissional",
          "Adicione suas habilidades e portfólio",
          "Comece enviando propostas para projetos simples",
          "Mantenha uma boa avaliação respondendo rápido",
        ],
        tips: [
          "Envie propostas personalizadas, não copie e cole",
          "Comece com preços mais baixos para ganhar avaliações",
          "Responda mensagens em até 1 hora",
        ],
      },
      {
        name: "99Freelas",
        url: "https://www.99freelas.com.br",
        description: "Plataforma brasileira com milhares de projetos",
        difficulty: "Fácil",
        earnings: "R$30 - R$300/projeto",
        guide: [
          "Cadastre-se gratuitamente no site",
          "Verifique seu email e complete o perfil",
          "Escolha suas categorias de atuação",
          "Navegue pelos projetos disponíveis",
          "Envie propostas detalhadas explicando como vai resolver o problema",
        ],
        tips: [
          "Foque em nichos específicos para se destacar",
          "Use o chat da plataforma para negociar",
          "Peça avaliação após cada trabalho concluído",
        ],
      },
      {
        name: "Fiverr",
        url: "https://www.fiverr.com",
        description: "Plataforma global para vender serviços (Gigs)",
        difficulty: "Médio",
        earnings: "US$5 - US$500/gig",
        guide: [
          "Crie conta em fiverr.com (aceita brasileiros)",
          "Crie seu primeiro 'Gig' (serviço)",
          "Faça uma descrição detalhada e atraente",
          "Defina 3 pacotes de preços (básico, padrão, premium)",
          "Adicione imagens e vídeo de apresentação",
        ],
        tips: [
          "Título do Gig deve ter palavras-chave buscadas",
          "Ofereça revisões ilimitadas no início",
          "Responda compradores em até 1 hora",
        ],
      },
      {
        name: "Upwork",
        url: "https://www.upwork.com",
        description: "Maior plataforma de freelancer do mundo",
        difficulty: "Avançado",
        earnings: "US$15 - US$100/hora",
        guide: [
          "Crie perfil completo em inglês",
          "Faça o teste de habilidades da plataforma",
          "Comece com projetos de valor mais baixo",
          "Construa seu Job Success Score",
          "Aumente preços conforme ganha experiência",
        ],
        tips: [
          "Perfil 100% em inglês é obrigatório",
          "Especialize-se em um nicho específico",
          "Mantenha Job Success Score acima de 90%",
        ],
      },
      {
        name: "Freelancer.com",
        url: "https://www.freelancer.com",
        description: "Plataforma global com milhões de projetos",
        difficulty: "Médio",
        earnings: "US$10 - US$200/projeto",
        guide: [
          "Registre-se gratuitamente",
          "Complete verificação de identidade",
          "Faça exames de habilidades gratuitos",
          "Envie propostas competitivas",
          "Entregue projetos antes do prazo",
        ],
        tips: [
          "Participe de concursos para ganhar visibilidade",
          "Use o plano gratuito no início",
          "Foque em projetos com orçamento definido",
        ],
      },
      {
        name: "GetNinjas",
        url: "https://www.getninjas.com.br",
        description: "Plataforma brasileira para serviços locais e online",
        difficulty: "Fácil",
        earnings: "R$50 - R$500/serviço",
        guide: [
          "Cadastre-se como profissional",
          "Escolha suas categorias de serviço",
          "Compre moedas para responder pedidos",
          "Responda pedidos da sua região",
          "Negocie diretamente com clientes",
        ],
        tips: [
          "Responda pedidos rapidamente",
          "Ofereça orçamento gratuito inicial",
          "Peça indicações após cada trabalho",
        ],
      },
    ],
  },
  {
    name: "Redação e Conteúdo",
    icon: <BookOpen className="w-5 h-5" />,
    platforms: [
      {
        name: "Rock Content",
        url: "https://comunidade.rockcontent.com",
        description: "Maior plataforma de marketing de conteúdo do Brasil",
        difficulty: "Médio",
        earnings: "R$30 - R$150/artigo",
        guide: [
          "Cadastre-se na comunidade Rock Content",
          "Faça o teste de redação",
          "Aguarde aprovação (pode levar alguns dias)",
          "Escolha pautas disponíveis na plataforma",
          "Escreva seguindo as diretrizes do cliente",
        ],
        tips: [
          "Estude SEO básico antes de começar",
          "Entregue sempre antes do prazo",
          "Mantenha nota acima de 4 estrelas",
        ],
      },
      {
        name: "Textbroker",
        url: "https://www.textbroker.com",
        description: "Plataforma internacional de redação",
        difficulty: "Médio",
        earnings: "US$0.01 - US$0.05/palavra",
        guide: [
          "Cadastre-se e envie texto de exemplo",
          "Receba sua classificação (2 a 5 estrelas)",
          "Escolha pedidos do Open Order Pool",
          "Escreva e envie para revisão",
          "Receba pagamento via PayPal",
        ],
        tips: [
          "Melhore sua classificação com textos de qualidade",
          "Foque em nichos que você domina",
          "Escreva em inglês para ganhar mais",
        ],
      },
      {
        name: "Contently",
        url: "https://contently.com",
        description: "Plataforma premium para escritores",
        difficulty: "Avançado",
        earnings: "US$100 - US$1000/artigo",
        guide: [
          "Crie portfólio no Contently (gratuito)",
          "Adicione seus melhores trabalhos",
          "Candidate-se para projetos disponíveis",
          "Trabalhe com marcas grandes",
          "Receba pagamentos em dólar",
        ],
        tips: [
          "Tenha portfólio forte antes de aplicar",
          "Especialize-se em indústrias específicas",
          "Networking é essencial",
        ],
      },
      {
        name: "Medium Partner Program",
        url: "https://medium.com/creators",
        description: "Ganhe dinheiro escrevendo artigos",
        difficulty: "Fácil",
        earnings: "US$50 - US$5000/mês",
        guide: [
          "Crie conta no Medium",
          "Aplique para o Partner Program",
          "Escreva artigos de qualidade",
          "Publique consistentemente",
          "Ganhe baseado em tempo de leitura",
        ],
        tips: [
          "Títulos chamativos aumentam cliques",
          "Publique em publicações populares",
          "Escreva sobre temas em alta",
        ],
      },
      {
        name: "Scripted",
        url: "https://www.scripted.com",
        description: "Plataforma de conteúdo para empresas",
        difficulty: "Avançado",
        earnings: "US$50 - US$500/artigo",
        guide: [
          "Aplique como escritor",
          "Passe no teste de redação",
          "Aceite projetos da sua área",
          "Entregue conteúdo de alta qualidade",
          "Construa relacionamentos com clientes",
        ],
        tips: [
          "Inglês fluente é obrigatório",
          "Especialize-se em B2B content",
          "Mantenha deadlines rigorosamente",
        ],
      },
      {
        name: "WriterAccess",
        url: "https://www.writeraccess.com",
        description: "Marketplace de conteúdo profissional",
        difficulty: "Médio",
        earnings: "US$0.02 - US$0.10/palavra",
        guide: [
          "Crie perfil de escritor",
          "Complete testes de habilidade",
          "Receba sua classificação",
          "Aceite pedidos do marketplace",
          "Entregue dentro do prazo",
        ],
        tips: [
          "Faça todos os testes disponíveis",
          "Mantenha taxa de aceitação alta",
          "Responda rapidamente aos clientes",
        ],
      },
    ],
  },
  {
    name: "Design e Criativo",
    icon: <Star className="w-5 h-5" />,
    platforms: [
      {
        name: "99designs",
        url: "https://99designs.com.br",
        description: "Plataforma de design com concursos",
        difficulty: "Médio",
        earnings: "R$500 - R$5000/projeto",
        guide: [
          "Crie conta de designer",
          "Monte seu portfólio na plataforma",
          "Participe de concursos de design",
          "Submeta várias opções por concurso",
          "Ganhe se seu design for escolhido",
        ],
        tips: [
          "Leia o brief com atenção",
          "Envie múltiplas variações",
          "Responda feedback rapidamente",
        ],
      },
      {
        name: "DesignCrowd",
        url: "https://www.designcrowd.com",
        description: "Concursos de design globais",
        difficulty: "Médio",
        earnings: "US$100 - US$1000/concurso",
        guide: [
          "Registre-se como designer",
          "Navegue por concursos ativos",
          "Leia requisitos com atenção",
          "Submeta seus designs",
          "Itere baseado no feedback",
        ],
        tips: [
          "Foque em concursos garantidos",
          "Qualidade supera quantidade",
          "Construa portfólio diversificado",
        ],
      },
      {
        name: "Canva Creators",
        url: "https://www.canva.com/creators",
        description: "Venda templates no Canva",
        difficulty: "Fácil",
        earnings: "US$100 - US$2000/mês (passivo)",
        guide: [
          "Aplique para o programa de criadores",
          "Crie templates originais",
          "Suba para a biblioteca do Canva",
          "Ganhe royalties por downloads",
          "Escale com mais templates",
        ],
        tips: [
          "Crie templates para nichos específicos",
          "Mantenha consistência visual",
          "Atualize templates sazonalmente",
        ],
      },
      {
        name: "Creative Market",
        url: "https://creativemarket.com",
        description: "Venda recursos de design",
        difficulty: "Médio",
        earnings: "US$50 - US$5000/mês (passivo)",
        guide: [
          "Aplique para ser vendedor",
          "Crie produtos digitais (fontes, templates, etc)",
          "Defina preços competitivos",
          "Promova seus produtos",
          "Ganhe 70% de cada venda",
        ],
        tips: [
          "Produtos em bundles vendem mais",
          "Invista em previews de qualidade",
          "Participe de promoções da plataforma",
        ],
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com",
        description: "Portfólio e trabalhos de design",
        difficulty: "Avançado",
        earnings: "US$50 - US$200/hora",
        guide: [
          "Crie conta e publique trabalhos",
          "Construa seguidores com consistência",
          "Ative perfil Pro para jobs",
          "Candidate-se a vagas",
          "Conecte-se com clientes diretamente",
        ],
        tips: [
          "Qualidade das imagens é crucial",
          "Poste regularmente (2-3x/semana)",
          "Interaja com a comunidade",
        ],
      },
      {
        name: "Behance",
        url: "https://www.behance.net",
        description: "Portfólio profissional Adobe",
        difficulty: "Médio",
        earnings: "Indireto - gera clientes",
        guide: [
          "Crie conta gratuita",
          "Monte projetos detalhados",
          "Use tags relevantes",
          "Conecte com Adobe Portfolio",
          "Candidate-se a jobs na plataforma",
        ],
        tips: [
          "Projetos longos e detalhados performam melhor",
          "Adicione processo de criação",
          "Mantenha perfil atualizado",
        ],
      },
    ],
  },
  {
    name: "Programação e Tech",
    icon: <Globe className="w-5 h-5" />,
    platforms: [
      {
        name: "Toptal",
        url: "https://www.toptal.com",
        description: "Top 3% dos freelancers de tech",
        difficulty: "Avançado",
        earnings: "US$60 - US$200/hora",
        guide: [
          "Aplique pelo site",
          "Passe na entrevista inicial",
          "Complete teste técnico",
          "Faça projeto de teste",
          "Entre para a rede exclusiva",
        ],
        tips: [
          "Prepare-se bem para entrevistas",
          "Tenha portfólio sólido",
          "Inglês fluente é obrigatório",
        ],
      },
      {
        name: "GitHub Jobs",
        url: "https://github.com/jobs",
        description: "Vagas de tech via GitHub",
        difficulty: "Médio",
        earnings: "US$30 - US$150/hora",
        guide: [
          "Mantenha perfil GitHub ativo",
          "Contribua para open source",
          "Navegue por vagas disponíveis",
          "Aplique com seu perfil GitHub",
          "Mostre seus repositórios",
        ],
        tips: [
          "Commits regulares mostram atividade",
          "README bem feito impressiona",
          "Contribuições open source são valorizadas",
        ],
      },
      {
        name: "Stack Overflow Jobs",
        url: "https://stackoverflow.com/jobs",
        description: "Vagas para desenvolvedores",
        difficulty: "Médio",
        earnings: "US$40 - US$120/hora",
        guide: [
          "Crie Developer Story completo",
          "Responda perguntas para reputação",
          "Busque vagas remotas",
          "Aplique destacando experiência",
          "Mencione sua reputação SO",
        ],
        tips: [
          "Reputação alta abre portas",
          "Tags de tecnologia específicas ajudam",
          "Mantenha perfil técnico atualizado",
        ],
      },
      {
        name: "Codementor",
        url: "https://www.codementor.io",
        description: "Mentoria e freelance de código",
        difficulty: "Médio",
        earnings: "US$15 - US$100/hora",
        guide: [
          "Cadastre-se como mentor",
          "Defina suas especialidades",
          "Configure disponibilidade",
          "Ofereça sessões de mentoria",
          "Aceite projetos freelance",
        ],
        tips: [
          "Boa avaliação gera mais clientes",
          "Responda rápido às solicitações",
          "Ofereça primeira sessão com desconto",
        ],
      },
      {
        name: "Gun.io",
        url: "https://gun.io",
        description: "Freelance de elite para devs",
        difficulty: "Avançado",
        earnings: "US$50 - US$150/hora",
        guide: [
          "Aplique para a plataforma",
          "Passe no processo seletivo",
          "Complete seu perfil técnico",
          "Receba projetos curados",
          "Trabalhe com startups top",
        ],
        tips: [
          "Experiência comprovada é essencial",
          "Foco em tecnologias modernas",
          "Comunicação clara é valorizada",
        ],
      },
      {
        name: "Lemon.io",
        url: "https://lemon.io",
        description: "Devs para startups americanas",
        difficulty: "Avançado",
        earnings: "US$40 - US$100/hora",
        guide: [
          "Passe no teste técnico online",
          "Faça entrevista em inglês",
          "Complete coding challenge",
          "Entre para o pool de talentos",
          "Receba matches com startups",
        ],
        tips: [
          "Prepare-se para live coding",
          "Inglês conversacional é must",
          "Experiência com startups ajuda",
        ],
      },
    ],
  },
  {
    name: "Tradução",
    icon: <Globe className="w-5 h-5" />,
    platforms: [
      {
        name: "ProZ",
        url: "https://www.proz.com",
        description: "Maior comunidade de tradutores",
        difficulty: "Médio",
        earnings: "US$0.05 - US$0.15/palavra",
        guide: [
          "Crie perfil detalhado",
          "Liste seus pares de idiomas",
          "Candidate-se a jobs postados",
          "Construa sua reputação",
          "Negocie diretamente com clientes",
        ],
        tips: [
          "Especialize-se em áreas técnicas",
          "Certificações aumentam valor",
          "Responda RFQs rapidamente",
        ],
      },
      {
        name: "TranslatorsCafe",
        url: "https://www.translatorscafe.com",
        description: "Marketplace de tradução",
        difficulty: "Fácil",
        earnings: "US$0.03 - US$0.10/palavra",
        guide: [
          "Registre-se gratuitamente",
          "Complete seu perfil de tradutor",
          "Navegue por jobs disponíveis",
          "Envie propostas",
          "Entregue traduções de qualidade",
        ],
        tips: [
          "Mantenha glossário pessoal",
          "Use ferramentas CAT",
          "Entregue sempre revisado",
        ],
      },
      {
        name: "Gengo",
        url: "https://gengo.com",
        description: "Tradução em escala com tech",
        difficulty: "Médio",
        earnings: "US$0.03 - US$0.12/palavra",
        guide: [
          "Aplique para o teste",
          "Passe na avaliação de idioma",
          "Comece a aceitar jobs",
          "Mantenha qualidade alta",
          "Suba de nível para jobs melhores",
        ],
        tips: [
          "Teste é rigoroso, prepare-se bem",
          "Consistência é mais importante que velocidade",
          "Foque nos seus melhores pares de idiomas",
        ],
      },
      {
        name: "One Hour Translation",
        url: "https://www.onehourtranslation.com",
        description: "Tradução rápida profissional",
        difficulty: "Médio",
        earnings: "US$0.04 - US$0.08/palavra",
        guide: [
          "Cadastre-se como tradutor",
          "Faça teste de qualificação",
          "Aceite projetos disponíveis",
          "Entregue dentro do prazo",
          "Ganhe por palavra traduzida",
        ],
        tips: [
          "Velocidade é valorizada",
          "Mantenha qualidade consistente",
          "Aceite projetos do seu nível",
        ],
      },
      {
        name: "Unbabel",
        url: "https://unbabel.com",
        description: "Tradução AI + humano",
        difficulty: "Fácil",
        earnings: "US$8 - US$18/hora",
        guide: [
          "Aplique como editor",
          "Passe nos testes de idioma",
          "Revise traduções de AI",
          "Ganhe por tarefa completada",
          "Trabalhe quando quiser",
        ],
        tips: [
          "Foco em correção, não tradução completa",
          "Tarefas são rápidas (5-15 min)",
          "Disponibilidade flexível",
        ],
      },
      {
        name: "Rev",
        url: "https://www.rev.com",
        description: "Transcrição, legendas e tradução",
        difficulty: "Fácil",
        earnings: "US$0.30 - US$1.10/minuto",
        guide: [
          "Aplique para ser freelancer",
          "Passe no teste de gramática",
          "Complete teste prático",
          "Escolha projetos disponíveis",
          "Entregue com precisão",
        ],
        tips: [
          "Áudio de qualidade paga mais",
          "Precisão acima de velocidade",
          "Use atalhos de teclado",
        ],
      },
    ],
  },
  {
    name: "Tarefas e Microjobs",
    icon: <Clock className="w-5 h-5" />,
    platforms: [
      {
        name: "Amazon Mechanical Turk",
        url: "https://www.mturk.com",
        description: "Microtarefas pagas",
        difficulty: "Fácil",
        earnings: "US$3 - US$15/hora",
        guide: [
          "Crie conta Amazon",
          "Aplique para MTurk Worker",
          "Aguarde aprovação (pode demorar)",
          "Aceite HITs (tarefas)",
          "Complete e submeta",
        ],
        tips: [
          "Use scripts para encontrar HITs bons",
          "Mantenha taxa de aprovação >95%",
          "Foque em requesters bem avaliados",
        ],
      },
      {
        name: "Clickworker",
        url: "https://www.clickworker.com",
        description: "Microtarefas diversas",
        difficulty: "Fácil",
        earnings: "US$5 - US$20/hora",
        guide: [
          "Cadastre-se gratuitamente",
          "Complete seu perfil",
          "Faça assessments de qualificação",
          "Aceite tarefas disponíveis",
          "Receba via PayPal",
        ],
        tips: [
          "Mais assessments = mais tarefas",
          "UHRS paga bem (precisa qualificar)",
          "Check-in diário para novas tarefas",
        ],
      },
      {
        name: "Appen",
        url: "https://appen.com",
        description: "Tarefas de AI training",
        difficulty: "Fácil",
        earnings: "US$5 - US$25/hora",
        guide: [
          "Crie perfil completo",
          "Aplique para projetos",
          "Passe nas qualificações",
          "Trabalhe nos projetos aceitos",
          "Pagamento mensal",
        ],
        tips: [
          "Aplique para múltiplos projetos",
          "Mantenha qualidade alta",
          "Projetos de idioma pagam bem",
        ],
      },
      {
        name: "Lionbridge",
        url: "https://www.lionbridge.com",
        description: "Avaliação de busca e AI",
        difficulty: "Médio",
        earnings: "US$10 - US$20/hora",
        guide: [
          "Busque vagas de Rater/Assessor",
          "Aplique online",
          "Passe no teste de qualificação",
          "Trabalhe no mínimo de horas",
          "Pagamento regular",
        ],
        tips: [
          "Estude as guidelines com atenção",
          "Mantenha consistência",
          "Horas mínimas são obrigatórias",
        ],
      },
      {
        name: "UserTesting",
        url: "https://www.usertesting.com",
        description: "Teste de usabilidade de sites",
        difficulty: "Fácil",
        earnings: "US$10/teste (20 min)",
        guide: [
          "Cadastre-se e faça teste de prática",
          "Aguarde testes disponíveis",
          "Complete testes falando em voz alta",
          "Receba US$10 por teste de 20min",
          "Pagamento via PayPal em 7 dias",
        ],
        tips: [
          "Fale claramente e dê opiniões",
          "Mantenha avaliação de 4+ estrelas",
          "Responda screeners rapidamente",
        ],
      },
      {
        name: "Testbirds",
        url: "https://www.testbirds.com",
        description: "Teste de software e apps",
        difficulty: "Fácil",
        earnings: "€10 - €50/teste",
        guide: [
          "Registre-se como tester",
          "Complete seu perfil técnico",
          "Instale app de teste se necessário",
          "Reporte bugs detalhadamente",
          "Ganhe por bug encontrado",
        ],
        tips: [
          "Screenshots e vídeos ajudam",
          "Seja detalhista nos reports",
          "Teste em múltiplos dispositivos",
        ],
      },
    ],
  },
  {
    name: "Ensino e Tutoria",
    icon: <BookOpen className="w-5 h-5" />,
    platforms: [
      {
        name: "Preply",
        url: "https://preply.com",
        description: "Aulas particulares de idiomas",
        difficulty: "Fácil",
        earnings: "US$10 - US$50/hora",
        guide: [
          "Cadastre-se como tutor",
          "Grave vídeo de apresentação",
          "Defina sua disponibilidade",
          "Configure preços por hora",
          "Aguarde alunos te encontrarem",
        ],
        tips: [
          "Vídeo de qualidade atrai alunos",
          "Preço inicial mais baixo ajuda",
          "Responda mensagens rapidamente",
        ],
      },
      {
        name: "Italki",
        url: "https://www.italki.com",
        description: "Professores de idiomas",
        difficulty: "Fácil",
        earnings: "US$10 - US$80/hora",
        guide: [
          "Aplique como professor",
          "Envie documentação se necessário",
          "Crie perfil atrativo",
          "Ofereça aula experimental",
          "Construa base de alunos",
        ],
        tips: [
          "Aulas experimentais convertem bem",
          "Especialize-se (business, conversação, etc)",
          "Seja consistente com horários",
        ],
      },
      {
        name: "Cambly",
        url: "https://www.cambly.com/tutors",
        description: "Conversação em inglês",
        difficulty: "Fácil",
        earnings: "US$10.20/hora",
        guide: [
          "Precisa ser nativo em inglês",
          "Cadastre-se e seja aprovado",
          "Defina horários disponíveis",
          "Converse com alunos",
          "Pagamento semanal",
        ],
        tips: [
          "Seja paciente e amigável",
          "Prepare tópicos de conversa",
          "Horários asiáticos pagam mais",
        ],
      },
      {
        name: "Superprof",
        url: "https://www.superprof.com.br",
        description: "Aulas particulares de tudo",
        difficulty: "Fácil",
        earnings: "R$30 - R$150/hora",
        guide: [
          "Crie perfil de professor",
          "Liste todas suas habilidades",
          "Defina preços por hora",
          "Responda solicitações",
          "Dê aulas online ou presencial",
        ],
        tips: [
          "Primeira aula grátis atrai alunos",
          "Responda em até 24h",
          "Peça avaliações após aulas",
        ],
      },
      {
        name: "Udemy",
        url: "https://www.udemy.com/teaching",
        description: "Crie e venda cursos online",
        difficulty: "Avançado",
        earnings: "US$100 - US$10000/mês (passivo)",
        guide: [
          "Planeje conteúdo do curso",
          "Grave aulas em vídeo",
          "Edite com qualidade profissional",
          "Publique na plataforma",
          "Promova seu curso",
        ],
        tips: [
          "Cursos práticos vendem mais",
          "Faça promoções nos lançamentos",
          "Responda todas as perguntas",
        ],
      },
      {
        name: "Skillshare",
        url: "https://www.skillshare.com/teach",
        description: "Ensine habilidades criativas",
        difficulty: "Médio",
        earnings: "US$0.05 - US$0.10/minuto assistido",
        guide: [
          "Aplique como professor",
          "Crie curso com projeto prático",
          "Grave aulas curtas (5-15 min)",
          "Publique e promova",
          "Ganhe por minutos assistidos",
        ],
        tips: [
          "Projetos engajam alunos",
          "Aulas curtas performam melhor",
          "Promova nas redes sociais",
        ],
      },
    ],
  },
  {
    name: "Vídeo e Áudio",
    icon: <Star className="w-5 h-5" />,
    platforms: [
      {
        name: "Voices.com",
        url: "https://www.voices.com",
        description: "Trabalhos de locução",
        difficulty: "Médio",
        earnings: "US$100 - US$5000/projeto",
        guide: [
          "Crie perfil de talento",
          "Faça upload de demos",
          "Candidate-se a projetos",
          "Envie audições",
          "Negocie contratos",
        ],
        tips: [
          "Qualidade de áudio é crucial",
          "Tenha demos para diferentes estilos",
          "Responda audições rapidamente",
        ],
      },
      {
        name: "ACX",
        url: "https://www.acx.com",
        description: "Narração de audiobooks",
        difficulty: "Avançado",
        earnings: "US$50 - US$400/hora finalizada",
        guide: [
          "Crie perfil de narrador",
          "Faça upload de samples",
          "Candidate-se a títulos",
          "Faça audição (15 min)",
          "Negocie royalty share ou PFH",
        ],
        tips: [
          "Invista em equipamento de áudio",
          "Royalty share pode render muito",
          "Livros de não-ficção são mais fáceis",
        ],
      },
      {
        name: "Bunny Studio",
        url: "https://bunnystudio.com",
        description: "Voz, vídeo e escrita",
        difficulty: "Médio",
        earnings: "US$20 - US$500/projeto",
        guide: [
          "Aplique como talento",
          "Passe no teste de qualidade",
          "Receba projetos via app",
          "Entregue dentro do prazo",
          "Receba pagamento rápido",
        ],
        tips: [
          "Qualidade consistente é chave",
          "Aceite projetos do seu nível",
          "Mantenha perfil atualizado",
        ],
      },
      {
        name: "Pond5",
        url: "https://www.pond5.com",
        description: "Venda vídeos stock",
        difficulty: "Médio",
        earnings: "40-60% por venda",
        guide: [
          "Cadastre-se como artista",
          "Faça upload de vídeos/áudio",
          "Adicione metadados corretos",
          "Defina preços",
          "Ganhe por cada venda",
        ],
        tips: [
          "Vídeos 4K vendem mais",
          "Keywords são essenciais",
          "Crie coleções temáticas",
        ],
      },
      {
        name: "Shutterstock Contributor",
        url: "https://submit.shutterstock.com",
        description: "Venda fotos, vídeos e música",
        difficulty: "Fácil",
        earnings: "15-40% por download",
        guide: [
          "Cadastre-se como contributor",
          "Faça upload de conteúdo",
          "Aguarde aprovação",
          "Ganhe por download",
          "Escale seu portfólio",
        ],
        tips: [
          "Volume importa nesse modelo",
          "Qualidade técnica é obrigatória",
          "Tendências mudam - acompanhe",
        ],
      },
      {
        name: "Envato Elements",
        url: "https://elements.envato.com/contributors",
        description: "Venda recursos criativos",
        difficulty: "Avançado",
        earnings: "50% do pool de assinaturas",
        guide: [
          "Aplique como autor",
          "Passe na revisão de portfólio",
          "Faça upload de items",
          "Mantenha qualidade alta",
          "Ganhe mensalmente",
        ],
        tips: [
          "Qualidade premium é esperada",
          "Categorias populares competem mais",
          "Diversifique seus items",
        ],
      },
    ],
  },
];

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    Fácil: "bg-green-500/20 text-green-400 border-green-500/30",
    Médio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Avançado: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full border ${colors[difficulty as keyof typeof colors]}`}
    >
      {difficulty}
    </span>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg text-foreground flex items-center gap-2">
              {platform.name}
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {platform.description}
            </p>
          </div>
          <DifficultyBadge difficulty={platform.difficulty} />
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1 text-sm text-primary">
            <DollarSign className="w-4 h-4" />
            <span>{platform.earnings}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between text-muted-foreground hover:text-foreground hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Ver guia completo
          </span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>

        {isOpen && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Como Começar
              </h4>
              <ol className="space-y-2">
                {platform.guide.map((step, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary font-medium">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                Dicas de Sucesso
              </h4>
              <ul className="space-y-1">
                {platform.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
            >
              Acessar {platform.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function AcessoPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const totalPlatforms = categories.reduce(
    (acc, cat) => acc + cat.platforms.length,
    0
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="mailto:suporte@exemplo.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                Suporte
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Acesso Liberado
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Bem-vindo! Seu acesso foi{" "}
            <span className="text-primary">liberado</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Você agora tem acesso a {totalPlatforms} plataformas de trabalho
            freelancer com guias completos de como começar em cada uma.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {totalPlatforms}+
              </div>
              <div className="text-sm text-muted-foreground">Plataformas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">
                {categories.length}
              </div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">
                Guias Incluídos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              onClick={() => setActiveCategory(null)}
              className="rounded-full"
            >
              Todas
            </Button>
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={activeCategory === category.name ? "default" : "outline"}
                onClick={() => setActiveCategory(category.name)}
                className="rounded-full"
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {categories
            .filter(
              (category) =>
                activeCategory === null || category.name === activeCategory
            )
            .map((category) => (
              <div key={category.name} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    ({category.platforms.length} plataformas)
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.platforms.map((platform) => (
                    <PlatformCard key={platform.name} platform={platform} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Dúvidas? Entre em contato:{" "}
            <a
              href="mailto:suporte@exemplo.com"
              className="text-primary hover:underline"
            >
              suporte@exemplo.com
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Lista atualizada mensalmente com novas plataformas e oportunidades.
          </p>
        </div>
      </footer>
    </main>
  );
}
