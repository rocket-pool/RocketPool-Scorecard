import Image from 'next/image'
import HeroDark from '../../../public/hero-dark.png'

export default function Hero() {
    return (
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-2 lg:grid-cols-[30%_300px] lg:gap-4 xl:grid-cols-[50%_400px]">
            <Image
              alt="Happy Customer"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              src={HeroDark}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-header font-poppins font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Rocket Pool Scorecard
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  A scorecard of how the Rocket Pool community scores itself on factors including
                  risk, decentralization, security, and more.  
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800 w-1/2">
                <h2 className="text-lg font-semibold">About the Scorecard</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rocket Pool strives to create the most optimized community-governed
                  liquidity staking protocol. 
                  <br className="mb-4"></br>
                  This is why we created the Rocket Pool Scoreboard. Read our scores
                  below and feel free to share your thoughts 
                  <a href="https://rocketpool.net" className="text-actionOrange hover:text-orange-600"> here</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  