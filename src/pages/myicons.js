//import Prism from 'prismjs'
import React from 'react'
//import Hero from "../components/Hero"
import Layout from '../components/layout'
import Icons from '../components/icons'
import SEO from '../components/seo'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'

const MyIcons = () => {
	//React.useEffect(() => {
	//  Prism.highlightAll()
	//}, [])

	return (
		<Layout>
			<SEO
				keywords={[`material icon`, `material`]}
				title="Material Icon Example"
			/>

			<section className="text-center">
				<img
					alt="Cat and human sitting on a couch"
					className="block w-1/2 mx-auto mb-8"
					src={catAndHumanIllustration}
				/>

				<h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
					Hey there! Welcome to your first Gatsby site.
				</h2>
				<div className="flix inline-flex mx-auto py-2">
					<i className="material-icons">
						<span className="text-8xl text-red-500">move_to_inbox</span>
					</i>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-10 gap-4 w-full lg:w-2/3 p-4 my-6 bg-gray-600 bg-opacity-50 justify-center text-center mx-auto text-xl">
					<Icons iconstyle="text-3xl text-green-600" icon="move_to_inbox" />
					<Icons icon="palette" />
					<Icons iconstyle="text-5xl text-yellow-400" icon="description" />
					<Icons icon="get_app" />
					<Icons iconstyle="text-2xl text-blue-400" icon="favorite_border" />
					<Icons icon="favorite" />
					<Icons icon="delete" />
					<Icons icon="edit" />
					<Icons icon="done" />
					<Icons icon="close" />
					<Icons icon="add" />
					<Icons icon="keyboard_arrow_up" />
					<Icons icon="login" />
					<Icons icon="format_list_bulleted" />
					<Icons icon="toggle_off" />
					<Icons icon="toggle_on" />
					<Icons icon="security" />

					<Icons iconstyle="w-6 h-6 text-blue-400" icon="info" />
				</div>
				<p className="leading-loose">
					This is a barebones starter for Gatsby styled using{` `}
					<a
						className="font-bold text-gray-900 no-underline"
						href="https://tailwindcss.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tailwind CSS
					</a>
					, a utility-first CSS framework.
				</p>
			</section>
		</Layout>
	)
}

export default MyIcons
