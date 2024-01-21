import Image from 'next/image'
import HeroDark from '../../../public/hero-dark.png'

export default function Hero() {
    return (
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-row items-center justify-between">
            <div className="flex-1">
              <div className="space-y-6">
                <h1 className="text-header font-poppins font-bold tracking-tighter whitespace-nowrap sm:text-5xl xl:text-6xl/none">
                  Rocket Pool Scorecard
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  A scorecard of how the Rocket Pool community scores itself on factors including
                  risk, decentralization, security, and more.  
                </p>
              </div>
              <div className="mt-10 bg-gray-100 p-10 rounded-lg dark:bg-slateGray w-5/6">
                <h2 className="text-3xl font-poppins font-bold mb-4">About the Scorecard</h2>
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
            <div className="flex-none">
              <Image
                alt="Happy Customer"
                src={HeroDark}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    )
}
