import { Fragment, useEffect, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import Link from 'next/link'

export function Header() {
	const [open, setOpen] = useState(false)

	return (
		<div className="relative bg-white">
			<header className="border-b-2 border-gray-100 w-full fixed bg-white top-0 z-30">
				<div className="max-w-7xl mx-auto px-6 md:px-4">
					<div className="flex justify-between items-center py-4 lg:py-6 lg:justify-start lg:space-x-10">
						<div className="flex justify-start items-center lg:w-0 lg:flex-1">
							<img width={64} height={64} src="/assert/images/logo.png" className="inline-block w-auto h-12 md:h-14 transition-transform hover:animate-spin" alt="没事造轮子" />
							<span className="sr-only">没事造轮子</span>
							<h1 className="inline-block ml-2 text-3xl md:text-4xl">
								<Link href="/" passHref>
									<a rel="home" aria-current="page">没事造轮子</a>
								</Link>
							</h1>
						</div>

						<div className="-mr-2 -my-2 lg:hidden">
							<button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" aria-expanded="false" onClick={() => setOpen(true)}>
								<span className="sr-only">打开菜单</span>
								<svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>
						</div>


						<Popover.Group className="hidden lg:flex space-x-10">
							<Popover className="relative">
								<Popover.Button className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary" aria-expanded="false">
									<span>教程</span>
									<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</Popover.Button>

								<Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-[28rem] sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
									<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
										<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															Win32 入门教程
														</p>
														<p className="mt-1 text-sm text-gray-500">
															Windows 操作系统的核心操作接口，独领风骚二十年。
														</p>
													</div>
												</a>
											</Link>
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															HTML 入门教程
														</p>
														<p className="mt-1 text-sm text-gray-500">
															超文本标记语言，前端网页的骨架，强调语义化。
														</p>
													</div>
												</a>
											</Link>
										</div>
									</div>
								</Popover.Panel>
							</Popover>

							<Popover className="relative">
								<Popover.Button className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary" aria-expanded="false">
									<span>项目</span>
									<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</Popover.Button>

								<Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-60 sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
									<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
										<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															俄罗斯方块
														</p>
														<p className="mt-1 text-sm text-gray-500">
														</p>
													</div>
												</a>
											</Link>
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															方块赛车
														</p>
														<p className="mt-1 text-sm text-gray-500">
														</p>
													</div>
												</a>
											</Link>
										</div>
									</div>
								</Popover.Panel>
							</Popover>

							<Popover className="relative">
								<Popover.Button className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary" aria-expanded="false">
									<span>码读</span>
									<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</Popover.Button>

								<Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-60 sm:px-0 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
									<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
										<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															Express 源码刨析
														</p>
														<p className="mt-1 text-sm text-gray-500">

														</p>
													</div>
												</a>
											</Link>
										</div>
									</div>
								</Popover.Panel>
							</Popover>

							<Popover className="relative">
								<Popover.Button className="text-gray-600 group rounded-md inline-flex items-center text-xl font-medium hover:text-primary" aria-expanded="false">
									<span>更多</span>
									<svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</Popover.Button>

								<Popover.Panel className="absolute z-10 -ml-4 transform px-2 max-w-md pt-10 w-[28rem] sm:px-0 lg:right-0 lg:ml-0">
									<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-t-4 border-primary">
										<div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															下载
														</p>
														<p className="mt-1 text-sm text-gray-500">
															博客文章中提到的一些第三方资源、演示程序等内容。
														</p>
													</div>
												</a>
											</Link>
											<Link href="#" passHref>
												<a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 hover:text-primary">
													<div className="ml-4">
														<p className="text-base font-medium">
															关于
														</p>
														<p className="mt-1 text-sm text-gray-500">
															关于博主、博客的一些基本信息。
														</p>
													</div>
												</a>
											</Link>
										</div>
									</div>
								</Popover.Panel>
							</Popover>
						</Popover.Group>
					</div>
				</div>

			</header>
		</div>
	)
}
