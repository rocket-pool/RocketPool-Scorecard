import Hero from '../components/Hero/Hero'
import Scorecard from '../components/Scorecard/Scorecard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <Hero />
      </div>
      <div className="z-10 w-full font-mono text-sm">
        <Scorecard />
      </div>
    </main>
  )
}
