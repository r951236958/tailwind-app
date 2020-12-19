//import Prism from 'prismjs'
import React from 'react'
//import Hero from "../components/Hero"
import Layout from '../components/layout'
import SEO from '../components/seo'
import catAndHumanIllustration from '../images/cat-and-human-illustration.svg'

export const CodeZone = () => (
	<div className="my-6 rounded-xl overflow-hidden bg-gray-800">
		<pre className="language-shell">
			<code className="language-shell">
				<span className="token function">npm</span>{' '}
				<span className="token function">install</span> tailwindcss postcss
				autoprefixer
			</code>
		</pre>
	</div>
)

//const htmlCode = `<pre><code class="language-pug" data-dependencies="less">
//:less
//	foo {
//		color: @red;
//	}
//</code><pre>
//`

//const npminstallCode = `npm install tailwindcss postcss autoprefixer`

//const markdownCode = `The C# code will be highlighted __after__ the rest of this document.

//\`\`\`csharp
//public class Foo : IBar<int> {
//	public string Baz { get; set; } = "foo";
//}
//\`\`\`

//The CSS code will be highlighted with this document because CSS has already been loaded.

//\`\`\`css
//a:hover {
//	color: green !important;
//}
//\`\`\`
//`

const About = () => {
	//React.useEffect(() => {
	//  Prism.highlightAll()
	//}, [])

	return (
		<Layout>
			<SEO
				keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
				title="About"
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

export default About
