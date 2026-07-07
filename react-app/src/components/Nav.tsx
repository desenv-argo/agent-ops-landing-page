export function Nav() {
  return (
    <nav style={{ position: 'sticky', top: '0', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '14px clamp(18px,4vw,48px)', background: 'rgba(8,7,15,0.72)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <a href="#topo" style={{ display: 'flex', alignItems: 'center', gap: '11px', textDecoration: 'none' }}>
        <img src="/assets/athlas-logo.png" alt="Athlas" style={{ height: '36px', width: 'auto', filter: 'drop-shadow(0 4px 14px rgba(91,140,255,.55))' }} />
        <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '20px', color: '#f2f1f8', letterSpacing: '-0.01em' }}>Agent<span style={{ color: '#7d9bff' }}>Ops</span></span>
      </a>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <a href="#como" style={{ color: '#a09db5', textDecoration: 'none', fontSize: '14px' }}>Como funciona</a>
        <a href="#oferta" style={{ textDecoration: 'none', padding: '11px 20px', borderRadius: '11px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 600, fontSize: '14px', boxShadow: '0 8px 24px -8px rgba(120,110,255,0.75)' }}>Quero acessar</a>
      </div>
    </nav>
  );
}
