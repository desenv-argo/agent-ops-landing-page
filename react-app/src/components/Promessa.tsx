export function Promessa() {
  return (
    <section style={{ position: 'relative', padding: 'clamp(64px,9vw,120px) clamp(20px,4vw,48px)', background: 'linear-gradient(180deg,#08070f,#0d0b1a)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
        <div style={{ flex: '1 1 380px', minWidth: '300px' }}>
          <p style={{ margin: '0 0 14px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d9bff' }}>A virada</p>
          <h2 style={{ margin: '0 0 28px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4vw,44px)', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#f2f1f8' }}>AgentOps transforma uma demanda em um fluxo de engenharia operado por agentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Recebe work items</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Demandas técnicas entram por webhook ou API.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Cria execuções rastreáveis</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Cada demanda vira um Agent Run com estado e histórico.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Aciona agentes especializados</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — PM, Arquiteto, Engenheiro, QA e Review por fase.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Trabalha sobre repos reais</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Atua sobre código existente, não sobre exemplos.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Gera fases, logs e evidências</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Tudo registrado e auditável do início ao fim.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Prepara Pull Requests</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Branches e PRs prontos para a sua revisão.</span></div></div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}><span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', marginTop: '1px' }}>✓</span><div><span style={{ fontWeight: 600, color: '#f2f1f8', fontSize: '16px' }}>Mantém você no controle</span><span style={{ color: '#8d8aa3', fontSize: '15px' }}> — Aprovações e decisões críticas continuam suas.</span></div></div>
          </div>
        </div>
        <div style={{ flex: '1 1 380px', minWidth: '300px' }}>
          <div style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', background: 'linear-gradient(180deg,rgba(20,18,34,0.96),rgba(12,11,22,0.96))', boxShadow: '0 30px 80px -30px rgba(60,40,160,0.55)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff6058' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }}></span>
              <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#28c840' }}></span>
              <span style={{ marginLeft: '10px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8d8aa3' }}>pull-request · #142</span>
            </div>
            <div style={{ padding: '18px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12.5px', lineHeight: '1.9' }}>
              <div style={{ color: '#dfe0f0', fontSize: '14px', marginBottom: '10px', fontWeight: 600 }}>feat: implementa novo fluxo de autenticação</div>
              <div style={{ color: '#6f6c85' }}>agentops/auth/<span style={{ color: '#cfd0e2' }}>service.py</span></div>
              <div style={{ background: 'rgba(40,200,64,0.1)', borderLeft: '2px solid #28c840', padding: '1px 10px', color: '#7fe39b' }}>+ def issue_refresh_token(user):</div>
              <div style={{ background: 'rgba(40,200,64,0.1)', borderLeft: '2px solid #28c840', padding: '1px 10px', color: '#7fe39b' }}>+     return sign(user, ttl=REFRESH_TTL)</div>
              <div style={{ background: 'rgba(255,90,90,0.1)', borderLeft: '2px solid #ff6058', padding: '1px 10px', color: '#ff9b9b' }}>- # TODO: implementar refresh</div>
              <div style={{ marginTop: '14px', display: 'flex', gap: '16px', color: '#8d8aa3' }}>
                <span style={{ color: '#5be0a0' }}>✓ 12 testes</span>
                <span style={{ color: '#aebdff' }}>✓ QA aprovado</span>
                <span style={{ color: '#ffbd2e' }}>⧖ aguardando você</span>
              </div>
              <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '10px' }}>
                <span style={{ padding: '8px 16px', borderRadius: '9px', background: 'linear-gradient(135deg,#5b8cff,#a06bff)', color: '#fff' }}>Aprovar &amp; mergear</span>
                <span style={{ padding: '8px 16px', borderRadius: '9px', border: '1px solid rgba(255,255,255,0.15)', color: '#cfd0e2' }}>Pedir ajustes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
