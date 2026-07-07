export function Prova() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)', background: 'linear-gradient(180deg,#0d0b1a,#08070f)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff', textAlign: 'center' }}>Quem já está construindo</p>
        <h2 style={{ margin: '0 0 44px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(26px,4vw,42px)', lineHeight: 1.12, letterSpacing: '-0.02em', color: '#f2f1f8', textAlign: 'center' }}>O que builders dizem sobre o AgentOps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '18px', marginBottom: '44px' }}>
          <div style={{ padding: '26px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.6, color: '#e2e1ee' }}>"[Depoimento real — o que a pessoa conseguiu fazer/economizar com o AgentOps. Seja específico: tempo, projeto entregue, etc.]"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)' }}></span><div><div style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '14.5px' }}>Nome do builder</div><div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#8d8aa3' }}>@usuario · cargo/empresa</div></div></div>
          </div>
          <div style={{ padding: '26px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.6, color: '#e2e1ee' }}>"[Depoimento real — foque na transformação: antes eu fazia X na mão, agora os agentes fazem Y.]"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)' }}></span><div><div style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '14.5px' }}>Nome do builder</div><div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#8d8aa3' }}>@usuario · cargo/empresa</div></div></div>
          </div>
          <div style={{ padding: '26px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0, fontSize: '15.5px', lineHeight: 1.6, color: '#e2e1ee' }}>"[Depoimento real — por que valeu a pena comprar o código-fonte em vez de começar do zero.]"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)' }}></span><div><div style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '14.5px' }}>Nome do builder</div><div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#8d8aa3' }}>@usuario · cargo/empresa</div></div></div>
          </div>
        </div>

        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', padding: '28px', borderRadius: '20px', border: '1px solid rgba(125,155,255,0.22)', background: 'linear-gradient(180deg,rgba(91,140,255,0.07),rgba(160,107,255,0.04))' }}>
          <span style={{ flexShrink: 0, width: '84px', height: '84px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)' }}></span>
          <div style={{ flex: '1 1 320px' }}>
            <p style={{ margin: '0 0 6px', fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aebdff' }}>Quem construiu</p>
            <h3 style={{ margin: '0 0 8px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: '20px', color: '#f2f1f8' }}>[Seu nome]</h3>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#a09db5' }}>[Sua credencial em 2-3 linhas: anos de experiência, o que você já construiu/entregou, por que você criou o AgentOps. Isso responde "por que confiar em quem está vendendo".]</p>
          </div>
        </div>
      </div>
    </section>
  )
}
