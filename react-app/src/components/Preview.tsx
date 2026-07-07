export function Preview() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(56px,8vw,100px) clamp(20px,4vw,48px)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '42px' }}>
          <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff' }}>Por dentro</p>
          <h2 style={{ margin: '0 0 10px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(26px,3.5vw,40px)', color: '#f2f1f8' }}>Um produto real. Não slides.</h2>
          <p style={{ margin: 0, fontSize: '16px', color: '#a09db5', maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>Dashboard, Kanban por fases, escritório de agentes, catálogo de modelos — tudo isso já existe no código que você recebe.</p>
        </div>

        {/* VÍDEO-DEMO — placeholder clicável até haver um vídeo real */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#12101e', boxShadow: '0 44px 110px -45px rgba(91,140,255,0.6)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff6058' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }}></span>
            <span style={{ marginLeft: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8d8aa3' }}>agentops · Demonstração — uma demanda vira um Pull Request</span>
          </div>
          <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', background: 'radial-gradient(ellipse at 50% 40%, rgba(91,140,255,0.18), transparent 60%), #0a0913' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '14px', textAlign: 'center', padding: '20px' }}>
              <span style={{ width: '74px', height: '74px', borderRadius: '50%', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 16px 40px -10px rgba(120,110,255,0.85)' }}><span style={{ marginLeft: '5px', borderLeft: '22px solid #fff', borderTop: '14px solid transparent', borderBottom: '14px solid transparent' }}></span></span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(16px,2.4vw,20px)', color: '#f2f1f8' }}>Veja o AgentOps rodando de verdade</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8d8aa3' }}>[ placeholder — insira aqui o vídeo-demo de 60-120s ]</span>
            </div>
          </div>
        </div>

        {/* featured screenshot */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', background: '#12101e', boxShadow: '0 44px 110px -45px rgba(91,140,255,0.6)', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff6058' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></span>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }}></span>
            <span style={{ marginLeft: '12px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8d8aa3' }}>agentops · Dashboard de execuções</span>
          </div>
          <img src="/assets/screens/dashboard.png" alt="Dashboard do AgentOps" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
        </div>
        {/* grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '18px' }}>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)', background: '#12101e', boxShadow: '0 24px 60px -30px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 13px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6058' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></span>
              <span style={{ marginLeft: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8d8aa3' }}>Kanban por fases</span>
            </div>
            <img src="/assets/screens/kanban.png" alt="Kanban Board por fases" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)', background: '#12101e', boxShadow: '0 24px 60px -30px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 13px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6058' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></span>
              <span style={{ marginLeft: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8d8aa3' }}>Escritório de agentes</span>
            </div>
            <img src="/assets/screens/escritorio.png" alt="Escritório de agentes" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)', background: '#12101e', boxShadow: '0 24px 60px -30px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 13px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6058' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></span>
              <span style={{ marginLeft: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8d8aa3' }}>Catálogo de agentes</span>
            </div>
            <img src="/assets/screens/agents.png" alt="Catálogo de agentes" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)', background: '#12101e', boxShadow: '0 24px 60px -30px rgba(0,0,0,0.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '9px 13px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6058' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></span><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }}></span>
              <span style={{ marginLeft: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: '#8d8aa3' }}>Catálogo de modelos de IA</span>
            </div>
            <img src="/assets/screens/modelos.png" alt="Catálogo de modelos de IA" loading="lazy" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
