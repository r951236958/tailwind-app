/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

//import 'prismjs/components/prism-bash'
//import 'prismjs/components/prism-core'
//import 'prismjs/components/prism-markup'
//import Prism from 'prismjs';
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
//import '../utils/prism';
import Footer from './footer'
//import Header from "./header"
import './layout.css'
import Navbar from './navbar'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Layout = ({ children }) => {
	const myRef = useRef(null)
	const executeScroll = () => scrollToRef(myRef)

	return (
		<div
			className="bg-white dark:bg-gray-800 dark:text-gray-100 bg-contain bg-center bg-fixed bg-no-repeat"
			style={{
				backgroundImage:
					'url("https://github.com/r951236958/nextjs-tailwindcss/blob/main/public/assets/img/register_bg_2.png?raw=true")',
			}}
		>
			<div ref={myRef} />
			{/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
			<Navbar />

			<div className="container min-h-screen pt-20">
				<main>{children}</main>
			</div>

			<div className="fixed lg:hidden overflow-y-auto bottom-2 right-2">
				<button
					onClick={executeScroll}
					className=" inline-flex items-center bg-red-500 text-white active:bg-red-600 p-2 rounded-full shadow hover:shadow-lg focus:outline-none mr-1 mb-1"
					type="button"
				>
					<i className="material-icons">keyboard_arrow_up</i>
				</button>
			</div>
			<Footer absolute />
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
