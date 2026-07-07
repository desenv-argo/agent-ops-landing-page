import { useCountdown } from '../hooks/useCountdown'
import { DEADLINE } from '../config'

export function Urgencia() {
  const countdown = useCountdown(DEADLINE)

  return (
    <section style={{ position: 'relative', padding: 'clamp(70px,10vw,130px) clamp(20px,4vw,48px)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', maxWidth: '120vw', borderRadius: '50%', background: 'radial-gradient(circle,rgba(160,107,255,0.16),transparent 60%)', filter: 'blur(20px)', pointerEvents: 'none', animation: 'pulseGlow 8s ease-in-out infinite' }}></div>
      <div style={{ position: 'relative', maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
        <img src="/assets/athlas-cheer.png" alt="Athlas" style={{ height: '96px', width: 'auto', marginBottom: '24px', filter: 'drop-shadow(0 12px 30px rgba(91,140,255,.5))', animation: 'floaty 5.5s ease-in-out infinite' }} />
        <h2 style={{ margin: '0 0 22px', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,50px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#f4f3fa' }}>Quem aprender a orquestrar agentes agora vai construir com uma <span style={{ background: 'linear-gradient(110deg,#5b8cff,#a06bff 70%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>vantagem absurda</span></h2>
        <p style={{ margin: 0, fontSize: 'clamp(16px,2vw,20px)', lineHeight: 1.6, color: '#b6b3c9', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>Enquanto a maioria ainda usa IA como chat, builders já estão criando fluxos, agentes, pipelines e produtos inteiros em cima de código existente.</p>

        <div style={{ margin: '36px auto 0', display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '18px', padding: '18px 28px', borderRadius: '16px', border: '1px solid rgba(160,107,255,0.3)', background: 'rgba(160,107,255,0.08)' }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13.5px', color: '#cfcddd' }}>Preço de fundador (−60%) encerra em</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: 'clamp(18px,3vw,24px)', letterSpacing: '0.04em', color: '#fff' }}>{countdown}</span>
        </div>
        <p style={{ margin: '14px 0 28px', fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', color: '#8d8aa3' }}>Depois disso, o valor volta para R$997.</p>
        <a href="#oferta" style={{ display: 'inline-block', textDecoration: 'none', padding: '16px 32px', borderRadius: '13px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 600, fontSize: '16px', boxShadow: '0 14px 38px -10px rgba(120,110,255,0.8)' }}>Garantir meu acesso por R$397</a>
      </div>
    </section>
  )
}
