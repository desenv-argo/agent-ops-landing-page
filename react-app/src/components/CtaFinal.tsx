export function CtaFinal() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', overflow: 'hidden', background: 'linear-gradient(180deg,#08070f,#0d0b1a)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '760px', height: '760px', maxWidth: '120vw', borderRadius: '50%', background: 'radial-gradient(circle,rgba(91,140,255,0.16),transparent 60%)', filter: 'blur(20px)', pointerEvents: 'none', animation: 'pulseGlow 9s ease-in-out infinite' }}></div>
      <div style={{ position: 'relative', maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ margin: '0 0 30px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.5vw,52px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#f4f3fa' }}>Pare de usar IA só como assistente. Comece a <span style={{ background: 'linear-gradient(110deg,#5b8cff,#a06bff 70%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>operar uma fábrica de software</span> com agentes.</h2>
        <a href="#oferta" style={{ display: 'inline-block', textDecoration: 'none', padding: '18px 36px', borderRadius: '14px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 600, fontSize: '17px', boxShadow: '0 18px 46px -12px rgba(120,110,255,0.85)' }}>Quero acessar o AgentOps</a>
      </div>
    </section>
  );
}
