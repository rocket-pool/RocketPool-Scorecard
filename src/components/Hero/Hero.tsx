import Image from 'next/image'
import HeroDark from '../../../public/hero-dark.png'
import HeroLight from '../../../public/hero-light.png'

export default function Hero() {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex-1">
            <div className="space-y-6">
              <h1 className="text-header font-poppins font-bold tracking-wide whitespace-nowrap sm:text-5xl xl:text-6xl/none">
                Rocket Pool Scorecard
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-white/40">
                A scorecard of how the Rocket Pool community scores itself on factors including
                risk, decentralization, security, and more.  
              </p>
            </div>
            <div className="mt-10 bg-gray-100 p-10 rounded-lg border-2 border-foreground dark:border-none dark:bg-slateGray w-5/6">
              <h2 className="text-3xl font-poppins font-bold mb-4">About the Scorecard</h2>
              <p className="text-md text-gray-500 dark:text-white/40">
                Rocket Pool strives to create the most optimized community-governed
                liquidity staking protocol. 
                <br className="mb-4"></br>
                This is why we created the Rocket Pool Scoreboard. Read our scores
                below and feel free to share your thoughts 
                <a href="https://rocketpool.net" className="text-actionOrange hover:text-orange-600"> here</a>.
              </p>
            </div>
          </div>
          <div className="flex-none">
          <div className="dark:hidden">
            <Image
              alt="Rocket Pool Scorecard Hero Image"
              src={HeroLight}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="rounded-xl"
              priority
            />
          </div>
          <div className="hidden dark:block">
            <Image
              alt="Rocket Pool Scorecard Hero Image"
              src={HeroDark}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="rounded-xl"
              priority
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
