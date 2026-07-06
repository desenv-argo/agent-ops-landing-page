# AgentOps — Landing Page

Landing page estática de vendas do **AgentOps**: plataforma que conecta ao seu código, entende demandas, orquestra agentes de IA especializados e transforma requisitos em análise, arquitetura, implementação, testes e pull requests.

> Uma demanda entra. Um Pull Request sai.

**Repositório:** [github.com/desenv-argo/agent-ops-landing-page](https://github.com/desenv-argo/agent-ops-landing-page)

---

## Sobre o AgentOps

O AgentOps é uma **fábrica de software operada por agentes** — uma base de produto em evolução para builders que querem ir além de usar IA como chat e passar a operar pipelines reais de engenharia.

| Etapa | O que acontece |
|-------|----------------|
| Demanda | Você descreve o que precisa |
| Análise | Agentes de PM e arquitetura estruturam o trabalho |
| Implementação | Devs-agentes codificam no seu repositório |
| Qualidade | Testes e revisões automatizadas |
| Entrega | Pull Request pronto para sua aprovação |

**Stack do produto (código-fonte vendido):** Next.js + FastAPI · arquitetura modular · humano no controle.

---

## O que tem neste repositório

Este repo contém apenas a **página de apresentação e conversão** — não o código da plataforma AgentOps em si.

| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Versão principal da landing (HTML estático, pronta para deploy) |
| `AgentOps Landing.dc.html` | Versão em [Design Component](https://github.com/desenv-argo/agent-ops-landing-page) (`.dc.html`) para edição visual |
| `support.js` | Runtime que renderiza arquivos `.dc.html` com React |
| `assets/` | Imagens, vídeos e screenshots usados na página |

### Seções da landing

- Hero (duas variantes A/B)
- Dor e promessa
- Catálogo de agentes
- Como funciona (passo a passo)
- Preview / demo (vídeo + screenshots)
- Features e o que você recebe
- Público-alvo e prova social
- Urgência e oferta de lançamento
- FAQ com accordion
- CTA final e rodapé

---

## Rodar localmente

Não há build nem dependências. Qualquer servidor estático serve.

### Opção 1 — Python

```bash
cd agent-ops-landing-page
python -m http.server 8080
```

Abra [http://localhost:8080](http://localhost:8080).

### Opção 2 — Node.js (npx)

```bash
npx serve .
```

### Opção 3 — VS Code / Cursor

Use a extensão **Live Server** e abra `index.html`.

> **Importante:** abra via servidor HTTP (`http://`), não como `file://`, para que vídeos e assets carreguem corretamente.

---

## Deploy

A página é 100% estática. Opções comuns:

| Plataforma | Como |
|------------|------|
| **GitHub Pages** | Settings → Pages → branch `main`, pasta `/ (root)` |
| **Netlify** | Arraste a pasta ou conecte o repo; publish directory = `.` |
| **Vercel** | Import do GitHub; framework = Other; output = `.` |
| **Cloudflare Pages** | Conecte o repo; build command vazio; output = `.` |

Após o deploy, aponte seu domínio (ex.: `agentops.seudominio.com`) nas configurações DNS da plataforma escolhida.

---

## Personalizar

### Conteúdo e copy

Edite diretamente o `index.html`. As seções têm o atributo `data-screen-label` para facilitar a localização (ex.: `Hero B`, `Oferta`, `FAQ`).

### Checkout / link de compra

O botão de compra aponta para a Kiwify. Troque a URL em `#oferta`:

```html
<a href="https://pay.kiwify.com.br/SEU_LINK" ...>
```

### Contagem regressiva

No final do `index.html`, ajuste a data da oferta:

```javascript
var DEADLINE = '2026-07-07T23:59:59-03:00';
```

### Analytics

Há um bloco comentado no `<head>` do `index.html` para colar GA4, Meta Pixel ou outro script de rastreamento.

### Vídeo de demo

Substitua `SEU_VIDEO_ID` no iframe da seção Preview pelo ID do YouTube, ou troque por um `<video>` local apontando para `assets/demo.mp4`.

### Variante Hero A vs B

Por padrão, o **Hero B** está visível e o **Hero A** fica com `display:none`. Para inverter, altere o `style` das seções `#heroA` e `#heroB`.

### Assets esperados

Coloque os arquivos abaixo em `assets/`:

```
assets/
├── athlas-logo.png
├── athlas-sherlock.png
├── athlas-cheer.png
├── argo-agentes.mp4          # vídeo de fundo do hero
└── screens/
    ├── dashboard.png
    ├── kanban.png
    ├── escritorio.png
    ├── agents.png
    └── modelos.png
```

---

## Versão Design Component (`.dc.html`)

O arquivo `AgentOps Landing.dc.html` é a mesma landing em formato **Design Component**, usada em ferramentas de edição visual. Para visualizar:

1. Sirva a pasta com um servidor HTTP
2. Abra `AgentOps Landing.dc.html` no navegador

O `support.js` carrega React via CDN e compila o template em tempo de execução. **Não edite** o `support.js` manualmente — ele é gerado pelo `dc-runtime`.

Para deploy em produção, use preferencialmente o `index.html` (mais leve, sem runtime extra).

---

## Estrutura do projeto

```
agent-ops-landing-page/
├── index.html                  # Landing principal (deploy)
├── AgentOps Landing.dc.html    # Versão editável (Design Component)
├── support.js                  # Runtime dc-runtime
├── assets/                     # Mídia estática
└── README.md
```

---

## Licença

O conteúdo desta landing page é propriedade do projeto **AgentOps / Desenv Argo**. Uso, redistribuição ou fork sem autorização não é permitido.

---

## Links

- **Comprar o código-fonte do AgentOps:** [Kiwify — Oferta Founder](https://pay.kiwify.com.br/jL4ieR0)
- **Repositório:** [desenv-argo/agent-ops-landing-page](https://github.com/desenv-argo/agent-ops-landing-page)
