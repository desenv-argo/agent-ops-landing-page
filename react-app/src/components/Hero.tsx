export function Hero() {
  return (
    <section id="heroB" style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(56px,7vw,96px) clamp(20px,4vw,48px)' }}>
      <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.14, pointerEvents: 'none' }}>
        <source src="/assets/argo-agentes.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,7,15,0.6), rgba(8,7,15,0.94))', pointerEvents: 'none' }}></div>

      <div style={{ position: 'relative', maxWidth: '1180px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(32px,5vw,64px)' }}>
        <div style={{ flex: '1 1 420px', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 16px', borderRadius: '999px', border: '1px solid rgba(125,155,255,0.3)', background: 'rgba(91,140,255,0.08)', fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', color: '#aebdff', width: 'fit-content' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5b8cff', boxShadow: '0 0 12px #5b8cff' }}></span>
            Código-fonte em evolução para builders
          </div>
          <h1 style={{ margin: 0, fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5vw,62px)', lineHeight: '1.04', letterSpacing: '-0.02em', color: '#f4f3fa' }}>
            Uma demanda entra. Um <span style={{ background: 'linear-gradient(110deg,#5b8cff,#a06bff 70%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Pull Request</span> sai.
          </h1>
          <p style={{ margin: 0, maxWidth: '54ch', fontSize: 'clamp(16px,2vw,19px)', lineHeight: '1.6', color: '#b6b3c9' }}>
            Você recebe o <strong style={{ color: '#e2e1ee' }}>código-fonte completo</strong> de uma plataforma que recebe demandas, aciona agentes (PM, arquiteto, dev, QA) e entrega Pull Requests prontos pra sua revisão. Pronto pra estudar, customizar, vender ou virar seu próprio produto.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '4px' }}>
            <a href="#oferta" style={{ textDecoration: 'none', padding: '16px 30px', borderRadius: '13px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff', fontWeight: 600, fontSize: '16px', boxShadow: '0 14px 38px -10px rgba(120,110,255,0.8)' }}>Quero o código-fonte — R$397</a>
            <a href="#como" style={{ textDecoration: 'none', padding: '16px 30px', borderRadius: '13px', border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.04)', color: '#e8e7f2', fontWeight: 600, fontSize: '16px' }}>Ver como funciona</a>
          </div>
          <p style={{ margin: '2px 0 0', fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', color: '#8d8aa3' }}><span style={{ color: '#5be0a0' }}>✓</span> 7 dias de garantia &nbsp;·&nbsp; <span style={{ color: '#5be0a0' }}>✓</span> Pagamento único &nbsp;·&nbsp; <span style={{ color: '#5be0a0' }}>✓</span> Acesso imediato</p>
          <p style={{ margin: '6px 0 0', fontFamily: "'JetBrains Mono',monospace", fontSize: '12.5px', color: '#6f6c85' }}>Next.js + FastAPI · Arquitetura modular · Humano no controle</p>
        </div>

        <div style={{ flex: '1 1 420px', minWidth: '300px' }}>
          <div style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(180deg,rgba(20,18,34,0.95),rgba(12,11,22,0.95))', boxShadow: '0 30px 80px -30px rgba(60,40,160,0.6)', overflow: 'hidden', animation: 'floaty 7s ease-in-out infinite' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '13px', color: '#dfe0f0' }}>AgentRun #AR-2381</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', color: '#5be0a0' }}><span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5be0a0', boxShadow: '0 0 10px #5be0a0', animation: 'blink 1.4s infinite' }}></span>em execução</span>
            </div>
            <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#5b8cff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#fff' }}>✓</span><span style={{ fontSize: '14px', color: '#cfd0e2' }}>PM Analysis</span><span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#6f6c85' }}>concluído</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#5b8cff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#fff' }}>✓</span><span style={{ fontSize: '14px', color: '#cfd0e2' }}>Architecture</span><span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#6f6c85' }}>concluído</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff', animation: 'blink 1.4s infinite' }}>●</span><span style={{ fontSize: '14px', color: '#f2f1f8', fontWeight: 600 }}>Software Engineer</span><span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#a06bff' }}>rodando…</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: .5 }}><span style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1px solid #6f6c85' }}></span><span style={{ fontSize: '14px', color: '#9a97b0' }}>QA Agent</span><span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#6f6c85' }}>na fila</span></div>
              <div style={{ marginTop: '6px', borderRadius: '11px', border: '1px solid rgba(255,255,255,0.07)', background: '#0a0913', padding: '12px 14px', fontFamily: "'JetBrains Mono',monospace", fontSize: '11.5px', lineHeight: '1.7', color: '#8d8aa3' }}>
                <div><span style={{ color: '#5b8cff' }}>→</span> aplicando patch em <span style={{ color: '#cfd0e2' }}>auth/service.py</span></div>
                <div><span style={{ color: '#5be0a0' }}>✓</span> 12 testes passando</div>
                <div>preparando PR<span style={{ animation: 'blink 1s infinite' }}>▌</span></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '11px', border: '1px solid rgba(125,155,255,0.25)', background: 'rgba(91,140,255,0.07)', padding: '11px 14px' }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '12px', color: '#aebdff' }}>PR #142</span>
                <span style={{ fontSize: '13px', color: '#cfd0e2' }}>feat: novo fluxo de auth</span>
                <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono',monospace", fontSize: '11px', color: '#5be0a0' }}>+248 −31</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
