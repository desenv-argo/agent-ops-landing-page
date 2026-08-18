export function Prova() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)', background: 'linear-gradient(180deg,#0d0b1a,#08070f)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff' }}>Quem desenvolveu</p>
        <h2 style={{ margin: '0 0 36px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,42px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#f2f1f8' }}>Construído pela Argo Tecnologia</h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '28px', padding: 'clamp(28px,5vw,48px)', borderRadius: '22px', border: '1px solid rgba(125,155,255,0.24)', background: 'linear-gradient(180deg,rgba(91,140,255,0.08),rgba(160,107,255,0.04))', textAlign: 'left' }}>
          <img src="/assets/athlas-logo.png" alt="Athlas, mascote da Argo Tecnologia" style={{ flexShrink: 0, width: '112px', height: '112px', objectFit: 'contain', filter: 'drop-shadow(0 14px 34px rgba(91,140,255,.45))' }} />
          <div style={{ flex: '1 1 420px' }}>
            <h3 style={{ margin: '0 0 10px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '24px', color: '#f2f1f8' }}>Argo Tecnologia</h3>
            <p style={{ margin: '0 0 18px', fontSize: '16px', lineHeight: 1.65, color: '#b6b3c9' }}>A Argo Tecnologia desenvolveu o AgentOps para transformar o uso de IA em um fluxo real de engenharia de software: da demanda ao Pull Request, com agentes especializados, rastreabilidade e revisão humana.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Código-fonte real e evolutivo', 'Next.js + FastAPI', 'Humano no controle'].map((item) => (
                <span key={item} style={{ padding: '7px 12px', borderRadius: '999px', border: '1px solid rgba(125,155,255,0.22)', background: 'rgba(91,140,255,0.08)', fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', color: '#aebdff' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
