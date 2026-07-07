import { AmbientOrbs } from './components/AmbientOrbs'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Dor } from './components/Dor'
import { Promessa } from './components/Promessa'
import { Agentes } from './components/Agentes'
import { ComoFunciona } from './components/ComoFunciona'
import { Preview } from './components/Preview'
import { Features } from './components/Features'
import { Recebe } from './components/Recebe'
import { Transformacao } from './components/Transformacao'
import { ParaQuem } from './components/ParaQuem'
import { Prova } from './components/Prova'
import { Urgencia } from './components/Urgencia'
import { Oferta } from './components/Oferta'
import { Faq } from './components/Faq'
import { CtaFinal } from './components/CtaFinal'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div id="topo" style={{ position: 'relative', background: '#08070f' }}>
      <AmbientOrbs />
      <Nav />
      <Hero />
      <Dor />
      <Promessa />
      <Agentes />
      <ComoFunciona />
      <Preview />
      <Features />
      <Recebe />
      <Transformacao />
      <ParaQuem />
      <Prova />
      <Urgencia />
      <Oferta />
      <Faq />
      <CtaFinal />
      <Footer />
    </div>
  )
}
