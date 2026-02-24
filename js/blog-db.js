// js/blog-db.js

const blogPosts = [
    // --- ARTIGOS ORIGINAIS (MANTIDOS) ---
    {
        id: "site-vs-saas",
        slug: "site-institucional-landing-page-ou-saas-qual-escolher",
        title: "Site Institucional, Landing Page ou SaaS: Qual a solução ideal?",
        date: "09 Fev 2026",
        category: "Estratégia Digital",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        excerpt: "Descubra a diferença técnica e estratégica entre ter um site vitrine, uma página de vendas agressiva ou um sistema de gestão completo.",
        content: `
            <p class="intro">Muitos empreendedores chegam até a <strong>EG Empório Digital</strong> com a dúvida: "Preciso de um site ou de um sistema?". A resposta define o sucesso do seu digital.</p>
            
            <h2>1. Landing Page: A Máquina de Vendas</h2>
            <p>Se o objetivo é vender <strong>um produto específico</strong> ou capturar leads, você precisa de uma Landing Page. O foco é Copywriting e Design Persuasivo (CRO). É tiro curto: o cliente entra e compra.</p>
            
            <h2>2. Site Institucional: Sua Vitrine</h2>
            <p>Para empresas de serviço, o site institucional constrói autoridade. É onde mostramos seus projetos e passamos a credibilidade necessária para fechar contratos. É a sua sede na internet.</p>
            
            <h2>3. Sistemas SaaS: O Jogo de Gente Grande</h2>
            <p>Se você quer automatizar processos (como nosso projeto <strong>Kairós</strong>), você precisa de um SaaS. Transformamos planilhas em sistemas web, criamos áreas de membros e painéis administrativos.</p>
            
            <div class="cta-box">
                <h3>Qual o seu momento atual?</h3>
                <p>Não gaste dinheiro na ferramenta errada. Fale com a gente para definir sua estratégia.</p>
                <a href="https://wa.me/5511916053292?text=Li o artigo sobre Site vs SaaS e quero uma consultoria." target="_blank" class="btn-cta">Falar com Consultor</a>
            </div>
        `
    },
    {
        id: "como-criar-saas",
        slug: "como-criar-saas-do-zero-guia-completo",
        title: "Como transformar sua ideia em um SaaS Lucrativo: Do MVP ao Produto",
        date: "08 Fev 2026",
        category: "SaaS & Startups",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", 
        excerpt: "Tem uma ideia de aplicativo? Entenda como a EG tira projetos do papel com desenvolvimento ágil e escalável.",
        content: `
            <p class="intro">O mercado de SaaS no Brasil está explodindo. Mas criar software exige mais do que código, exige visão de negócio.</p>
            
            <h2>O Que é um MVP?</h2>
            <p>MVP (Mínimo Produto Viável) é a versão mais simples do sistema para testar o mercado. Na EG, somos especialistas em lançar MVPs rápidos para você validar sua ideia sem gastar uma fortuna.</p>
            
            <h2>Código Proprietário vs Low-Code</h2>
            <p>Nossos sistemas são feitos "na unha" (Code), garantindo:</p>
            <ul>
                <li>Segurança bancária de dados;</li>
                <li>Velocidade extrema;</li>
                <li>Escalabilidade total (seu sistema cresce com sua empresa).</li>
            </ul>

             <div class="cta-box">
                <h3>Tire sua ideia do papel</h3>
                <a href="https://wa.me/5511916053292?text=Li o artigo sobre SaaS e tenho uma ideia." target="_blank" class="btn-cta">Orçar meu Sistema</a>
            </div>
        `
    },
    {
        id: "landing-page-vendas",
        slug: "importancia-landing-page-alta-conversao",
        title: "Landing Page que Vende: Por que seu tráfego pago não funciona?",
        date: "07 Fev 2026",
        category: "Marketing & Vendas",
        image: "assets/images/capa-financeiro.jpg",
        excerpt: "Jogar dinheiro em anúncios para um site lento é queimar dinheiro. Veja como nossas Landing Pages aumentam seu ROI.",
        content: `
            <p class="intro">Você configura o anúncio, gasta dinheiro, mas o cliente não chama. O problema quase sempre é a <strong>Página de Destino</strong>.</p>
            
            <h2>Velocidade é Dinheiro</h2>
            <p>A cada segundo de demora no carregamento, você perde 20% das conversões. Nossas páginas na EG carregam em milissegundos.</p>
            
            <h2>Mobile First</h2>
            <p>80% dos acessos são pelo celular. Se seu site não é perfeito no mobile, você está fora do jogo. Nossas LPs são desenhadas para o dedo do usuário.</p>
            
            <div class="cta-box">
                <h3>Pare de perder leads</h3>
                <a href="https://wa.me/5511916053292?text=Preciso de uma Landing Page que venda." target="_blank" class="btn-cta">Criar Página de Vendas</a>
            </div>
        `
    },

    // --- NOVOS ARTIGOS ADICIONADOS ---

    // 1. SEO (Novo Tema) - IMAGEM CORRIGIDA
    {
        id: "seo-tecnico-google",
        slug: "seo-tecnico-topo-do-google",
        title: "SEO Técnico: O código secreto para chegar no topo do Google",
        date: "10 Fev 2026",
        category: "SEO & Posicionamento",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop", // Imagem de Código/Programação
        excerpt: "Não adianta ter conteúdo se o Google não consegue ler seu site. Entenda como a estrutura de código define seu rankeamento.",
        content: `
            <p class="intro">Muitos focam apenas em palavras-chave, mas esquecem que o Google é um robô. Se o seu código não for otimizado, você é invisível.</p>
            
            <h2>Core Web Vitals</h2>
            <p>O Google penaliza sites lentos. Nossos projetos na <strong>EG Empório Digital</strong> focam nos 'Core Web Vitals': velocidade de renderização, estabilidade visual e interatividade. Usamos tecnologias modernas para garantir notas máximas no PageSpeed Insights.</p>
            
            <h2>Estrutura Semântica</h2>
            <p>O uso correto de tags HTML (H1, H2, Article, Section) diz ao Google exatamente sobre o que é o seu site. Um site desorganizado no código é ignorado pelos motores de busca.</p>
            
            <div class="cta-box">
                <h3>Seu site não aparece no Google?</h3>
                <p>Podemos fazer uma auditoria técnica completa.</p>
                <a href="https://wa.me/5511916053292?text=Quero melhorar o SEO do meu site." target="_blank" class="btn-cta">Auditoria de SEO</a>
            </div>
        `
    },

    // 2. Gestão de Tráfego (Novo Tema) - IMAGEM ALTERADA PARA EVITAR DUPLICIDADE
    {
        id: "trafego-pago-roi",
        slug: "trafego-pago-gestao-roi",
        title: "Gestão de Tráfego: Pare de doar dinheiro para o Mark Zuckerberg",
        date: "11 Fev 2026",
        category: "Gestão de Tráfego",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop", // Imagem de Gráficos/Growth
        excerpt: "Tráfego pago não é mágica, é matemática. Descubra como otimizar suas campanhas para ter ROI positivo real.",
        content: `
            <p class="intro">Clicar no botão 'Impulsionar' é a forma mais rápida de perder dinheiro. Gestão de Tráfego profissional exige análise de dados.</p>
            
            <h2>O Segredo do Pixel</h2>
            <p>Sem o Pixel do Facebook ou a Tag do Google configurados corretamente no seu site, você voa às cegas. Nós integramos seu site com as ferramentas de anúncios para rastrear cada clique e conversão.</p>
            
            <h2>Público Frio vs Público Quente</h2>
            <p>Uma estratégia vencedora separa quem nunca te viu de quem já quase comprou. Criamos funis de remarketing que perseguem o cliente até a compra, aumentando drasticamente sua conversão.</p>
            
            <div class="cta-box">
                <h3>Quer vender mais com anúncios?</h3>
                <a href="https://wa.me/5511916053292?text=Preciso de ajuda com Tráfego Pago." target="_blank" class="btn-cta">Consultoria de Tráfego</a>
            </div>
        `
    },

    // 3. Site Institucional (Adicional)
    {
        id: "site-lento-performance",
        slug: "site-lento-perde-clientes",
        title: "Site Lento? Você está perdendo clientes invisíveis todos os dias",
        date: "12 Fev 2026",
        category: "Estratégia Digital",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
        excerpt: "Estudos mostram que 53% dos usuários abandonam sites que demoram mais de 3 segundos para carregar. E o seu?",
        content: `
            <p class="intro">A paciência do usuário na internet é zero. Se seu site demora, seu concorrente ganha o clique.</p>
            
            <h2>Otimização de Imagens e Código</h2>
            <p>Muitos sites usam imagens pesadas que travam o carregamento 4G. Na EG, utilizamos formatos de próxima geração (WebP) e minificação de código para garantir carregamento instantâneo.</p>
            
            <h2>Hospedagem Faz Diferença</h2>
            <p>Hospedagens baratas compartilhadas colocam seu site em servidores lotados. Nós orientamos o uso de servidores VPS e CDNs globais para que seu site voe baixo.</p>
            
            <div class="cta-box">
                <h3>Teste a velocidade do seu site</h3>
                <a href="https://wa.me/5511916053292?text=Meu site está lento, preciso de ajuda." target="_blank" class="btn-cta">Otimizar Meu Site</a>
            </div>
        `
    },

    // 4. Landing Page (Adicional)
    {
        id: "copywriting-landing-page",
        slug: "copywriting-texto-que-vende",
        title: "Copywriting: As palavras certas para sua Landing Page vender sozinha",
        date: "13 Fev 2026",
        category: "Marketing & Vendas",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
        excerpt: "Design bonito atrai, mas é o texto que vende. Entenda a estrutura de persuasão que usamos nas páginas da EG.",
        content: `
            <p class="intro">Não adianta ter uma página linda se o texto não conecta com a dor do cliente. Copywriting é a arte de vender com palavras.</p>
            
            <h2>A Estrutura AIDA</h2>
            <p>Utilizamos a técnica Atenção, Interesse, Desejo e Ação. Cada seção da sua Landing Page deve ter um objetivo claro. Títulos magnéticos mantêm o leitor na página, e chamadas para ação (CTAs) claras garantem o clique.</p>
            
            <h2>Quebra de Objeções</h2>
            <p>Seu cliente tem dúvidas: 'Será que funciona?', 'É confiável?'. Nós mapeamos essas dúvidas e as respondemos no texto antes mesmo dele perguntar, aumentando a confiança e a conversão.</p>
            
            <div class="cta-box">
                <h3>Precisa de um texto que vende?</h3>
                <a href="https://wa.me/5511916053292?text=Preciso de Copywriting para minha página." target="_blank" class="btn-cta">Melhorar minha Conversão</a>
            </div>
        `
    },

    // 5. SaaS (Adicional)
    {
        id: "escalando-saas",
        slug: "escalabilidade-software-nuvem",
        title: "Escalando seu SaaS: Preparando a casa para 10 mil usuários",
        date: "14 Fev 2026",
        category: "SaaS & Startups",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
        excerpt: "O pesadelo de toda startup é o sistema cair no dia do lançamento. Veja como a arquitetura em nuvem previne isso.",
        content: `
            <p class="intro">Imagine que seu marketing funcionou e 5.000 pessoas entraram no seu sistema. Ele aguenta ou sai do ar? A escalabilidade é vital.</p>
            
            <h2>Arquitetura Serverless e Microserviços</h2>
            <p>Abandonamos servidores monolíticos antigos. Na <strong>EG Empório Digital</strong>, construímos sistemas modulares. Se uma parte do sistema recebe muita carga, só ela cresce, economizando custos e garantindo estabilidade.</p>
            
            <h2>Banco de Dados Otimizado</h2>
            <p>Uma consulta mal feita pode travar todo o sistema. Projetamos bancos de dados relacionais e não-relacionais prontos para Big Data, garantindo que relatórios e dashboards carreguem em tempo real.</p>
            
            <div class="cta-box">
                <h3>Seu sistema está pronto para crescer?</h3>
                <a href="https://wa.me/5511916053292?text=Tenho um projeto de SaaS e quero escalar." target="_blank" class="btn-cta">Falar com Arquiteto de Software</a>
            </div>
        `
    }
];