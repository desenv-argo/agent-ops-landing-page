import { useEffect, useState } from 'react'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

/**
 * Contagem regressiva até `deadline` (ISO string).
 * Retorna o texto formatado, ex.: "2d 04:31:09" ou "oferta encerrada".
 */
export function useCountdown(deadline: string): string {
  const [label, setLabel] = useState<string>(() => format(deadline))

  useEffect(() => {
    // Atualiza imediatamente (caso o deadline tenha mudado) e a cada segundo.
    setLabel(format(deadline))
    const id = setInterval(() => setLabel(format(deadline)), 1000)
    return () => clearInterval(id)
  }, [deadline])

  return label
}

function format(deadline: string): string {
  const diff = new Date(deadline).getTime() - Date.now()
  if (diff <= 0) return 'oferta encerrada'
  const d = Math.floor(diff / 86400000)
  const h = Math.floor(diff / 3600000) % 24
  const m = Math.floor(diff / 60000) % 60
  const s = Math.floor(diff / 1000) % 60
  return (d > 0 ? d + 'd ' : '') + pad(h) + ':' + pad(m) + ':' + pad(s)
}
