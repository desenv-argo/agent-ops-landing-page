export function Footer() {
  return (
    <footer style={{ position: 'relative', padding: '48px clamp(20px,4vw,48px)', borderTop: '1px solid rgba(255,255,255,0.07)', background: '#08070f' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
          <img src="/assets/athlas-logo.png" alt="Athlas" style={{ height: '30px', width: 'auto' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '17px', color: '#f2f1f8' }}>Agent<span style={{ color: '#7d9bff' }}>Ops</span></span>
        </div>
        <p style={{ margin: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: '12.5px', color: '#6f6c85', maxWidth: '52ch', textAlign: 'right' }}>Código-fonte em evolução para builders. O humano continua no controle: você aprova PRs, homologações e decisões críticas.</p>
      </div>
    </footer>
  );
}
