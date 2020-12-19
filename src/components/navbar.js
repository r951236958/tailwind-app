import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './navbar.module.css'

const navLinks = [
	{
		linkTitle: 'Page 2',
		href: '/page-2',
	},
	{
		linkTitle: 'Page 3',
		href: '/page-3',
	},
	{
		linkTitle: 'Buttons',
		href: '/buttons',
	},
	{
		linkTitle: 'Login',
		href: '/login',
	},
]

function Navbar({ siteTitle }) {
	const [isExpanded, toggleExpansion] = React.useState(false)

	return (
		<nav className="top-0 fixed z-50 w-full flex items-center justify-between flex-wrap bg-blueGray-600 p-3">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<svg
					className="fill-current h-8 w-8 mr-2"
					width="54"
					height="54"
					viewBox="0 0 54 54"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
				</svg>
				<Link className="font-semibold text-sm tracking-tight" to="/">
					{siteTitle}
				</Link>
			</div>
			<div className="block lg:hidden">
				<button
					onClick={() => toggleExpansion(!isExpanded)}
					className="flex items-center px-3 py-2 border rounded text-gray-200 border-darkcyan-400 hover:text-white hover:border-white"
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				className={`${
					isExpanded ? `block` : `hidden`
				} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
			>
				<div className="text-sm lg:flex-grow">
					{navLinks.map(({ href, linkTitle }) => (
						<Link
							key={linkTitle}
							to={href}
							className="block px-3 py-2 my-0 lg:inline-block text-gray-200 hover:text-white lg:mr-4 lg:my-2"
						>
							{linkTitle}
						</Link>
					))}
				</div>

				<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
					<li className="nav-item">
						<Link
							className="px-3 py-2 inline-flex items-center text-xs uppercase font-bold text-white hover:text-darkcyan-200 hover:opacity-75"
							to="/landing"
						>
							<svg
								className="w-4 h-4 fill-current text-white opacity-75"
								viewBox="0 0 448 512"
							>
								<path d="M400 32H48A48 48 0 000 80v352a48 48 0 0048 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0048-48V80a48 48 0 00-48-48z" />
							</svg>

							<span className="ml-2">Landing</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link
							className="px-3 py-2 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
							to="/colors"
						>
							<svg
								className="w-4 h-4 fill-current text-white opacity-75"
								viewBox="0 0 448 512"
							>
								<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 01-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
							</svg>

							<span className="ml-2">Colors</span>
						</Link>
					</li>
					<li className="nav-item">
						<a
							className="px-3 py-2 inline-flex items-center text-xs uppercase font-bold text-white hover:opacity-75"
							href="/myicons"
						>
							<svg
								className="w-4 h-4 fill-current text-white opacity-75"
								viewBox="0 0 496 512"
							>
								<path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
							</svg>

							<span className="ml-2">icons</span>
						</a>
					</li>
					<li className="nav-item">
						<a
							href="#download"
							className="px-3 py-2 inline-flex items-center text-xs border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white"
						>
							Download
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

Navbar.propTypes = {
	siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
	siteTitle: `DefaultTitle`,
}

export default Navbar
