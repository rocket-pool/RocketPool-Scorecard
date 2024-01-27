import Hero from '../components/Hero/Hero'
import Scorecard from '../components/Scorecard/Scorecard'
import DarkModeButton from '../components/DarkModeButton'
import './globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 bg-lightMode dark:bg-darkMode">
      <div className="z-10 max-w-7xl w-full text-sm">
        <Hero />
      </div>
      <div className="z-10 max-w-7xl w-full text-sm">
        <Scorecard />
      </div>
      <div className="mb-10">
        <DarkModeButton />
      </div>
    </main>
  )
}
