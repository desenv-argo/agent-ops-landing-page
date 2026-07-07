# AgentOps — Landing (React + Vite)

Landing page do AgentOps migrada do HTML único original para **React 19 + Vite 6 + TypeScript** (port fiel 1:1 do visual). Otimizada para carregamento rápido e para direcionar ao checkout (Kiwify).

## Rodar

```bash
npm install
npm run dev        # desenvolvimento (http://localhost:5173)
npm run build      # gera dist/ para produção (typecheck + build)
npm run preview    # serve o build de produção localmente
```

## Onde mexer

Toda a configuração da oferta fica em [`src/config.ts`](src/config.ts):

- `CHECKOUT_URL` — link do carrinho Kiwify (todos os botões de compra usam este valor).
- `DEADLINE` — data/hora do fim da oferta (alimenta o contador regressivo). **Ajuste para a data real.**
- `PRICE_FROM` / `PRICE_NOW` / `DISCOUNT_LABEL` — preços exibidos.

## Estrutura

- `src/App.tsx` — compõe todas as seções na ordem da página.
- `src/components/*` — uma seção por arquivo (Hero, Oferta, Faq, etc.).
- `src/hooks/useCountdown.ts` — contador regressivo da oferta.
- `src/global.css` — reset, keyframes das animações e `prefers-reduced-motion`.
- `public/assets/*` — imagens, screenshots e vídeo.

## Notas de segurança / performance

- Botões de compra abrem em nova aba com `rel="noopener noreferrer"` (proteção contra tabnabbing).
- Imagens abaixo da dobra usam `loading="lazy"`.
- Vite faz minificação de JS/CSS e code splitting de `react`/`react-dom`.
- Nenhum uso de `dangerouslySetInnerHTML` — sem superfície de XSS no conteúdo.

## Analytics

Cole os scripts de GA4 / Meta Pixel no `<head>` de [`index.html`](index.html) (há um comentário marcando o lugar).
