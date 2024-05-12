import {
  Comparison,
  Connectivity,
  Faq,
  Features,
  Footer,
  Hero,
  Hivebot,
  Protecting,
  Roadmap,
} from './Components'

export const App = () => {
  return (
    <div>
      <Hero />
      <Protecting />
      <Features />
      <Connectivity />
      <Hivebot />
      <Comparison />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  )
}
