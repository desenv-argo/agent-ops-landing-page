import { CHECKOUT_URL } from '../config'

export function Oferta() {
  return (
    <section id="oferta" style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)', background: 'linear-gradient(180deg,#0d0b1a,#08070f)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '920px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '42px' }}>
          <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff' }}>A oferta de lançamento</p>
          <h2 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,46px)', color: '#f2f1f8' }}>Leve o código-fonte completo do AgentOps</h2>
        </div>

        <div id="offerA" style={{ position: 'relative', borderRadius: '24px', border: '1px solid rgba(125,155,255,0.3)', background: 'linear-gradient(180deg,rgba(20,18,34,0.95),rgba(12,11,22,0.98))', boxShadow: '0 40px 100px -40px rgba(91,140,255,0.55)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#5b8cff,#a06bff)' }}></div>
          <div style={{ padding: 'clamp(28px,5vw,52px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(91,140,255,0.14)', border: '1px solid rgba(125,155,255,0.3)', fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#aebdff' }}>Oferta de lançamento <span style={{ padding: '2px 8px', borderRadius: '999px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 700 }}>−60%</span></span>
              <p style={{ margin: '18px 0 8px', fontSize: '15px', color: '#a09db5' }}>Garanta seu acesso pelo preço de fundador, com <strong style={{ color: '#cfcddd' }}>60% de desconto</strong> no lançamento.</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(20px,3vw,26px)', color: '#6f6c85', textDecoration: 'line-through' }}>R$997</span>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(44px,7vw,68px)', lineHeight: 1, background: 'linear-gradient(110deg,#5b8cff,#a06bff)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>R$397</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', color: '#6f6c85' }}>acesso founder</span>
              </div>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '26px', textDecoration: 'none', padding: '17px 30px', borderRadius: '13px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 600, fontSize: '16.5px', boxShadow: '0 16px 40px -12px rgba(120,110,255,0.85)' }}>Quero comprar o código-fonte</a>
              <a href="#comunidade" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', color: '#aebdff', textDecoration: 'none' }}>+ acesso à comunidade de builders</a>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#8d8aa3' }}><span style={{ color: '#5be0a0' }}>✓</span> 7 dias de garantia · pagamento único · acesso imediato</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Código-fonte completo (Next.js + FastAPI)</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Acesso garantido ao lançamento</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Comunidade de builders — atualizações e dicas</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Arquitetura modular pronta para customizar</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Base de agentes e orquestração</span></div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '12px' }}>✓</span><span style={{ fontSize: '15px', color: '#e2e1ee', lineHeight: 1.45 }}>Documentação técnica inicial</span></div>
            </div>
          </div>
          <div style={{ padding: '18px clamp(28px,5vw,52px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)', fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', color: '#aebdff', textAlign: 'center' }}>Para builders que querem construir em cima, não apenas assistir aula.</div>
        </div>
      </div>
    </section>
  )
}
