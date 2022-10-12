import Lottie from 'lottie-react'
import animationData from './girl-studying-on-laptop.json'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="py-20 md:py-32">
      <section className="container md:flex mx-auto">
        <div className="w-full mt-10 md:w-1/2">
          <Lottie animationData={animationData} loop={true} autoPlay={true} />
        </div>

        <div className="w-full mt-10 md:w-1/2">
          <h2 className="text-6xl text-center leading-normal md:leading-relaxed md:text-[4rem] lg:text-[5rem]">
            <span>学习、实战、总结、</span>
            <span className="relative inline-block overflow-visible">
              <span className="font-black z-10 relative">分享</span>
              <svg
                className="text-primary absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 h-[calc(100%)] w-[calc(100%+2rem)]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="9"
                  d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"
                ></path>
              </svg>
            </span>
          </h2>

          <div className="text-center mt-16">
            <Link href="#tutorial-hero" passHref>
              <a className="inline-block py-4 px-14 rounded-md bg-primary transform duration-500  hover:scale-110 motion-reduce:transform-none">
                <span className="flex text-xl text-white font-bold">
                  <svg
                    className="w-4 mr-2 fill-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M381.2 172.8C377.1 164.9 368.9 160 360 160h-156.6l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0h-176C43.97 0 33.81 8.906 32.22 20.84l-32 240C-.7179 267.7 1.376 274.6 5.938 279.8C10.5 285 17.09 288 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09C145.6 511.4 148.8 512 152 512c7.719 0 15.22-3.75 19.81-10.44l208-304C384.8 190.2 385.4 180.7 381.2 172.8z" />
                  </svg>
                  <span>开始学习</span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
