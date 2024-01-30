import Hero from '../components/Hero/Hero'
import Scorecard from '../components/Scorecard/Scorecard'
import DarkModeButton from '../components/DarkModeButton'
import Image from 'next/image'
import AnthiasLogo from '../../public/anthias.svg'
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
      <div className="mb-10">
        <a href="https://www.anthias.xyz" target="_blank" rel="noreferrer" className="dark:text-white/40">
          <span>
            Built by 
            <Image 
              src={AnthiasLogo} 
              alt="Anthias Logo"
              className="inline-block ml-2 mb-0.5 filter invert dark:filter-none"
              unoptimized={true} 
            /> 
          </span>
        </a>
      </div>
    </main>
  )
}
