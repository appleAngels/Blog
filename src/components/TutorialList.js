import Link from 'next/link'

export function TutorialList() {
    return (
      <>
        <div className="text-center py-5 text-gray-600">
          <h2 id="tutorial-hero" className="text-5xl md:text-6xl">
            技术教程
          </h2>
          <p className="text-xl p-5">专注于某项技术的系统性课程，从零开始，深入简出。</p>
        </div>

        <section className="text-center">
          <div className="flex flex-col max-w-6xl mx-auto justify-center px-4 md:space-x-8 md:flex-row ">
            <div className="shadow-lg my-8 py-8 px-4 rounded-lg md:w-1/3">
              <div className="flex flex-col text-gray-600 px-4 space-y-8">
                <h3 className="text-5xl font-semibold">Win32</h3>
                <p className="text-xl">Windows 系统的核心操作接口，独领风骚二十年。</p>
                <svg
                  className="h-36 mx-auto text-primary"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="windows"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"
                  ></path>
                </svg>
                <div className="mx-auto">
                  <Link href="/windows-bian-cheng-kai-fa" passHref>
                    <a className="inline-block py-4 px-10 rounded-md bg-primary hover:shadow-xl">
                      <span className="flex text-xl font-bold text-white ">
                        <span>开始学习</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="shadow-lg my-8 py-8 px-4 rounded-lg md:w-1/3">
              <div className="flex flex-col text-gray-600 px-4 space-y-8">
                <h3 className="text-5xl font-semibold">SDL2</h3>
                <p className="text-xl">开源的多媒体跨平台开发库，纯 C 接口，易于上手。</p>
                <svg
                  className="h-36 mx-auto text-primary"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="dice-d20"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M20.04 317.3C18 317.3 16 315.8 16 313.3V150.5c0-2.351 1.91-4.012 4.001-4.012c.6882 0 1.396 .18 2.062 .5748l76.62 45.1l-75.28 122.3C22.59 316.8 21.31 317.3 20.04 317.3zM231.4 405.2l-208.2-22.06c-4.27-.4821-7.123-4.117-7.123-7.995c0-1.401 .3725-2.834 1.185-4.161L122.7 215.1L231.4 405.2zM31.1 420.1c0-2.039 1.508-4.068 3.93-4.068c.1654 0 .3351 .0095 .5089 .0291l203.6 22.31v65.66C239.1 508.6 236.2 512 232 512c-1.113 0-2.255-.2387-3.363-.7565L34.25 423.6C32.69 422.8 31.1 421.4 31.1 420.1zM33.94 117.1c-1.289-.7641-1.938-2.088-1.938-3.417c0-1.281 .6019-2.567 1.813-3.364l150.8-98.59C185.1 10.98 187.3 10.64 188.6 10.64c4.32 0 8.003 3.721 8.003 8.022c0 1.379-.3788 2.818-1.237 4.214L115.5 165.8L33.94 117.1zM146.8 175.1l95.59-168.4C245.5 2.53 250.7 0 255.1 0s10.5 2.53 13.62 7.624l95.59 168.4H146.8zM356.4 207.1l-100.4 175.7L155.6 207.1H356.4zM476.1 415.1c2.422 0 3.93 2.029 3.93 4.068c0 1.378-.6893 2.761-2.252 3.524l-194.4 87.66c-1.103 .5092-2.241 .7443-3.35 .7443c-4.2 0-7.994-3.371-7.994-7.994v-65.69l203.6-22.28C475.7 416 475.9 415.1 476.1 415.1zM494.8 370.9C495.6 372.3 496 373.7 496 375.1c0 3.872-2.841 7.499-7.128 7.98l-208.2 22.06l108.6-190.1L494.8 370.9zM316.6 22.87c-.8581-1.395-1.237-2.834-1.237-4.214c0-4.301 3.683-8.022 8.003-8.022c1.308 0 2.675 .3411 4.015 1.11l150.8 98.59c1.211 .7973 1.813 2.076 1.813 3.353c0 1.325-.6488 2.649-1.938 3.429L396.5 165.8L316.6 22.87zM491.1 146.5c2.091 0 4.001 1.661 4.001 4.012v162.8c0 2.483-2.016 4.006-4.053 4.006c-1.27 0-2.549-.5919-3.353-1.912l-75.28-122.3l76.62-45.1C490.6 146.7 491.3 146.5 491.1 146.5z"
                  ></path>
                </svg>
                <div className="mx-auto">
                  <Link href="/sdl2-you-xi-kai-fa-zui-xiao-zhi-shi-zhan" passHref>
                    <a className="inline-block py-4 px-10 rounded-md bg-primary hover:shadow-xl">
                      <span className="flex text-xl font-bold text-white">
                        <span>开始学习</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="shadow-lg my-8 py-8 px-4 rounded-lg md:w-1/3">
              <div className="flex flex-col text-gray-600 px-4 space-y-8">
                <h3 className="text-5xl font-semibold">CSS</h3>
                <p className="text-xl">前端学习的必备知识，控制网站样式的专用语言。</p>
                <svg
                  className="h-36 mx-auto text-primary"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="css3-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                  ></path>
                </svg>
                <div className="mx-auto">
                  <a href="#" className="inline-block py-4 px-10 rounded-md bg-primary hover:shadow-xl">
                    <span className="flex text-xl font-bold text-white">
                      <span>开始学习</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}
