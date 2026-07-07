import { useState } from 'react';

const items = [
  {
    q: 'O AgentOps já está 100% pronto?',
    a: 'Não. É um projeto em evolução — uma base real de produto, não um SaaS finalizado plug-and-play. Você recebe o código-fonte funcional e em desenvolvimento ativo.',
  },
  {
    q: 'Preciso saber programar?',
    a: 'Sim. O AgentOps é feito para desenvolvedores e builders. Você vai rodar, configurar, customizar e evoluir o projeto no seu ambiente.',
  },
  {
    q: 'Posso vender projetos usando essa base?',
    a: 'Sim. A ideia é exatamente essa: usar como base para entregar projetos, montar sua fábrica de software individual ou construir seu próprio produto.',
  },
  {
    q: 'Posso customizar para minha empresa?',
    a: 'Sim. A arquitetura é modular e desacoplada, pensada para você adaptar agentes, fluxos e integrações ao seu contexto.',
  },
  {
    q: 'Ele substitui desenvolvedores?',
    a: 'Não. Os agentes analisam, planejam e implementam fases — mas você continua aprovando PRs, homologações e decisões críticas. O humano segue no controle.',
  },
  {
    q: 'Funciona com qualquer repositório?',
    a: 'A integração com GitHub é o caminho principal. Azure DevOps está estruturado e previsto. Como você tem o código-fonte, pode estender para outros fluxos.',
  },
  {
    q: 'Quais integrações existem ou estão previstas?',
    a: 'GitHub (branches, commits e PRs), webhooks/API para work items e um harness desacoplado para múltiplos providers de IA: Mock, Claude, OpenAI, Gemini e Ollama. Azure DevOps previsto.',
  },
  {
    q: 'Vou receber o código-fonte?',
    a: 'Sim. Front-end em Next.js 13 + PrimeReact e back-end em FastAPI, com a estrutura de orquestração, base de agentes e modelagem de dados.',
  },
  {
    q: 'É uma imersão ao vivo?',
    a: 'Não. Não é curso nem aula ao vivo. É acesso ao código-fonte em evolução, mais uma comunidade de builders construindo em cima dele.',
  },
  {
    q: 'Posso transformar isso em um SaaS meu?',
    a: 'Sim. É uma base real para você construir em cima, customizar e transformar no seu próprio produto comercial.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff', textAlign: 'center' }}>Perguntas frequentes</p>
        <h2 style={{ margin: '0 0 44px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', color: '#f2f1f8', textAlign: 'center' }}>Ainda em dúvida?</h2>
        <div id="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.025)', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '20px 22px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', color: '#f2f1f8', fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(15px,2vw,17.5px)', fontWeight: 600 }}
              >
                <span>{item.q}</span>
                <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px' }}>
                  {open === i
                    ? <span style={{ fontSize: '24px', color: '#a06bff', lineHeight: 1 }}>−</span>
                    : <span style={{ fontSize: '22px', color: '#7d9bff', lineHeight: 1 }}>+</span>}
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 22px 22px', fontSize: '15px', lineHeight: 1.65, color: '#a09db5' }}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
