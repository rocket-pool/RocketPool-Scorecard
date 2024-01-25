import Image from 'next/image'
import HeroDark from '../../../public/hero-dark.png'
import HeroLight from '../../../public/hero-light.png'
import InputIcon from '../../../public/input.svg'

export default function Hero() {
  return (
    <section className="w-full py-12">
      <div className="px-4 md:px-6">
        <div className="flex flex-col-reverse items-center justify-between lg:flex-row">
          <div className="flex-1">
            <div className="space-y-6">
              <h1 className="font-poppins font-bold text-center text-5xl tracking-wide lg:whitespace-nowrap lg:text-header lg:text-left">
                Rocket Pool Scorecard
              </h1>
              <p className="w-full text-center lg:text-left lg:max-w-[700px] text-gray-500 md:text-xl dark:text-white/40">
                A scorecard of how the Rocket Pool community scores itself on factors including
                risk, decentralization, security, and more.  
              </p>
            </div>
            <div className="mt-10 bg-gray-100 p-10 rounded-lg border-2 border-slateGray w-full dark:border-none dark:bg-slateGray lg:w-5/6">
              <h2 className="text-center text-3xl font-poppins font-bold mb-4 lg:text-left">About the Scorecard</h2>
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
            <div className="w-full flex justify-center items-center h-full dark:hidden">
              <Image
                alt="Rocket Pool Scorecard Hero Image"
                src={HeroLight}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="rounded-xl mb-4 w-3/4 md:w-1/2 lg:mb-0 lg:w-full lg:h-auto"
                priority={true}
              />
            </div>
            <div className="w-full hidden dark:flex dark:justify-center dark:items-center dark:h-full">
              <Image
                alt="Rocket Pool Scorecard Hero Image"
                src={HeroDark}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="rounded-xl mb-4 w-3/4 md:w-1/2 lg:mb-0 lg:w-full lg:h-auto"
                priority={true}
              />
            </div>
        </div>
      </div>
      <div className="w-full px-4 lg:mt-32">
        <div className="w-full mt-10 bg-gray-100 p-8 rounded-lg border-2 border-slateGray lg:w-[45%] lg:ml-auto dark:border-none dark:bg-slateGray">
          <h2 className="text-center text-xl font-poppins font-bold mb-2 lg:text-left">Want to provide a comment / make a change?</h2>
          <p className="text-md text-gray-500 dark:text-white/40">
            Click the 
            <Image
              alt="Forum Input Link"
              src={InputIcon}
              className="inline-block mx-1 lg:mx-2"
            />
            next to each Comments section to be directed to a forum thread
            specifically tailored to that section.
          </p>
        </div>
      </div>
    </section>
  )
}
