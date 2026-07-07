export function Transformacao() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)', background: 'linear-gradient(180deg,#08070f,#0d0b1a)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff', textAlign: 'center' }}>A transformação</p>
        <h2 style={{ margin: '0 0 52px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,44px)', lineHeight: '1.12', letterSpacing: '-0.02em', color: '#f2f1f8', textAlign: 'center', maxWidth: '24ch', marginLeft: 'auto', marginRight: 'auto' }}>De desenvolvedor executor para operador de uma fábrica de software com IA</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(255,120,120,0.16)', background: 'rgba(255,90,90,0.04)' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff8a8a' }}>Antes</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, color: '#ff8a8a', fontSize: '18px', lineHeight: '1.3' }}>✕</span><span style={{ fontSize: '15.5px', color: '#c9c6d8', lineHeight: '1.45' }}>Copia e cola prompts o dia inteiro</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, color: '#ff8a8a', fontSize: '18px', lineHeight: '1.3' }}>✕</span><span style={{ fontSize: '15.5px', color: '#c9c6d8', lineHeight: '1.45' }}>Analisa cada demanda manualmente</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, color: '#ff8a8a', fontSize: '18px', lineHeight: '1.3' }}>✕</span><span style={{ fontSize: '15.5px', color: '#c9c6d8', lineHeight: '1.45' }}>Perde contexto entre ferramentas</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, color: '#ff8a8a', fontSize: '18px', lineHeight: '1.3' }}>✕</span><span style={{ fontSize: '15.5px', color: '#c9c6d8', lineHeight: '1.45' }}>Abre Pull Requests na mão</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, color: '#ff8a8a', fontSize: '18px', lineHeight: '1.3' }}>✕</span><span style={{ fontSize: '15.5px', color: '#c9c6d8', lineHeight: '1.45' }}>Não tem rastreabilidade do que foi feito</span></div>
            </div>
          </div>
          <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid rgba(125,155,255,0.28)', background: 'linear-gradient(180deg,rgba(91,140,255,0.08),rgba(160,107,255,0.05))', boxShadow: '0 24px 60px -28px rgba(91,140,255,0.5)' }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aebdff' }}>Depois</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '22px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15.5px', color: '#f2f1f8', lineHeight: '1.45' }}>Define a demanda com clareza</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15.5px', color: '#f2f1f8', lineHeight: '1.45' }}>Agentes analisam e executam por fases</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15.5px', color: '#f2f1f8', lineHeight: '1.45' }}>A plataforma organiza o fluxo</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15.5px', color: '#f2f1f8', lineHeight: '1.45' }}>O código evolui em Pull Requests</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15.5px', color: '#f2f1f8', lineHeight: '1.45' }}>Você atua como arquiteto, revisor e dono</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
