import { Link } from 'gatsby'
//import Img from "gatsby-image"
import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import { IconBtnOutline } from '../components/IconBtnOutline'
import Layout from '../components/layout'
import LinkList from '../components/linklist'
//import Image from "../components/image"
import MyImage from '../components/myImage'
//import ResponsiveHeader from "../components/responsiveheader"
import SEO from '../components/seo'
import SwitchButton from '../components/switchbutton'
import '../utils/fontawesome'
//import gatsbyAst from "../images/gatsby-astronaut.png"

const TestPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="grid grid-cols-1 gap-10 ">
			<div>
				<h1>Hi! I&apos;m building a fake Gatsby site as part of a tutorial!</h1>
				<p>
					What do I like to do? Lots of course but definitely enjoy building
					websites.
				</p>
				<p>Welcome to your new Gatsby site.</p>
				<p>Now go build something great.</p>
			</div>
			<div className="mx-auto">
				<LinkList />
			</div>
			<div>
				<div className="p-6 my-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div className="flex-shrink-0">
						<svg className="h-12 w-12" viewBox="0 0 40 40">
							<defs>
								<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
									<stop stopColor="#2397B3" offset="0%"></stop>
									<stop stopColor="#13577E" offset="100%"></stop>
								</linearGradient>
								<linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="b">
									<stop stopColor="#73DFF2" offset="0%"></stop>
									<stop stopColor="#47B1EB" offset="100%"></stop>
								</linearGradient>
							</defs>
							<g fill="none" fillRule="evenodd">
								<path
									d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 0 1 1 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0 0 13 14c0 5.523 4.477 10 10 10a9.955 9.955 0 0 0 5.872-1.904z"
									fill="url(#a)"
									transform="translate(1 1)"
								/>
								<path
									d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0 1 23 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
									fill="url(#b)"
									transform="translate(1 1)"
								/>
								<path
									d="M18 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM24 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM30 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
									fill="#FFF"
								/>
							</g>
						</svg>
					</div>
					<div>
						<div className="text-xl font-medium text-black">ChitChat</div>
						<p className="text-gray-500">You have a new message!</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-6 mx-auto">
				<SwitchButton />

				<MyImage />
				<BackgroundImage />
			</div>
			<div>
				<div className="my-4 space-x-2">
					<button className="h-10 px-4 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:ring hover:bg-gray-900 border-2 border-gray-700 hover:text-gray-300">
						Button
					</button>

					<IconBtnOutline href={'/page-2'} text={'The Moon'} icon={'coffee'} />
				</div>
			</div>
			<div>
				<div className="h-full lg:flex items-baseline space-x-4 border border-darkCyan-600 rounded">
					<ul className="flex flex-col lg:flex-row list-none  lg:ml-auto">
						<li className="nav-item py-0 bg-darkcyan-600">
							<a
								className="px-3 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
								href="#pablo"
							>
								<svg
									className="w-4 h-4 fill-current text-white opacity-75"
									viewBox="0 0 448 512"
								>
									<path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
								</svg>

								<span className="ml-2">Share</span>
							</a>
						</li>
						<li className="nav-item bg-ocean-500">
							<a
								className="px-3 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
								href="#pablo"
							>
								<svg
									className="w-4 h-4 fill-current text-white opacity-75"
									viewBox="0 0 448 512"
								>
									<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
								</svg>

								<span className="ml-2">Tweet</span>
							</a>
						</li>
						<li className="nav-item bg-yellow-600">
							<a
								className="px-3 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
								href="#pablo"
							>
								<svg
									className="w-4 h-4 fill-current text-white opacity-75"
									viewBox="0 0 496 512"
								>
									<path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
								</svg>

								<span className="ml-2">Pin</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<Link
					className="py-2 px-4 text-blue-400 hover:text-blue-500 hover:text-opacity-75 hover:underline"
					to="/page-2/"
				>
					Go to page 2
				</Link>{' '}
				<div className="flex items-center space-x-4 my-4">
					<Link
						className="h-10 py-2 px-4 text-teal-400 border-2 border-teal-400 rounded-lg hover:text-teal-200 hover:bg-teal-100 hover:bg-opacity-10 hover:border-teal-500"
						to="/page3/"
					>
						Page3
					</Link>{' '}
					<Link
						className="inline-flex h-10 py-2 px-4 text-teal-400 border-2 border-teal-400 rounded-lg hover:bg-gray-100 hover:bg-opacity-10 hover:text-teal-300 hover:border-teal-500"
						to="/using-typescript/"
					>
						<i className="material-icons">menu</i>
						Go to &quot;Using TypeScript&quot;
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-6 md:grid-cols-12 gap-4">
				<button
					className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
					type="button"
				>
					<i className="material-icons h-4">menu</i>
				</button>
				<button
					type="button"
					className="todo-cancel inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
				>
					<i className="material-icons h-4">menu</i>
				</button>
				<button
					type="button"
					className="todo-cancel inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
				>
					<svg viewBox="0 0 320 512" className="w-4 h-4 fill-current">
						<path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path>
					</svg>
				</button>
				<button
					type="submit"
					className="btn__primary todo-edit inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
				>
					<svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
						<path d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"></path>
					</svg>
				</button>
				<button
					type="button"
					className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
				>
					<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
						<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
					</svg>
				</button>
				<button
					type="button"
					className="inline-flex items-center justify-center w-10 h-10 mr-2 text-gray-200 transition-colors duration-150 bg-gray-700 rounded-full focus:ring hover:bg-gray-200 hover:text-gray-700"
				>
					<svg viewBox="0 0 448 512" className="w-4 h-4 fill-current">
						<path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
					</svg>
				</button>
			</div>
		</div>
	</Layout>
)

export default TestPage
