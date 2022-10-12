export function Footer({trans}) {
  return (
    <footer className="py-8 border-t">
      <p className="text-left text-base max-w-7xl px-6 mx-auto">
        {/* <span>{`Copyright © 2020 - ${new Date().getFullYear()} ${trans.Title} | `}</span> */}
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow noreferrer noopener">
          浙ICP备2021026646号 |{' '}
        </a>
        <span>
          {/* <img
            className="inline-block"
            alt="beiantubiao"
            width="16"
            height="16"
            src="/assert/images/1631844241-beiantubiao.png"
          /> */}
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33078202001694"
            target="_blank"
            rel="nofollow noreferrer noopener"
          >
            浙公网安备 33078202001694号
          </a>
        </span>
      </p>
    </footer>
  )
}
