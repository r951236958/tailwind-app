import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'
import SimpleCard from '../components/simpleCard'

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<div className="my-4 mx-auto">
			<div className="components">
				<div className="w-full mx-auto py-16">
					<h1 className="text-3xl text-center font-bold mb-6">
						Hi from the second page
					</h1>
					<p className="text-center">Welcome to page 2</p>
					<div className="px-6 py-4 my-3 w-full mx-auto border border-lightYellow-300 rounded-lg flex items-center">
						<div className="w-full text-center mx-auto">
							<Link
								className="bg-transparent hover:bg-ocean-500 hover:bg-opacity-10 text-gray-100 font-semibold hover:text-gray-300 py-2 px-4 border border-blue-500 hover:border-ocean-400 hover:border-opacity-30 rounded mx-2"
								to="/"
							>
								Go back to the homepage
							</Link>

							<button className="bg-blue-500 hover:bg-blue-400 text-gray-100 font-bold py-2 px-4 rounded mx-2">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="border-2 border-lightBlue-300 rounded-md py-6 px-4 space-x-4">
				<FontAwesomeIcon icon={['fab', 'apple']} />
				<FontAwesomeIcon icon={['fab', 'microsoft']} />
				<FontAwesomeIcon icon={['fab', 'google']} />
				<FontAwesomeIcon icon={['fab', 'github']} />
				<FontAwesomeIcon icon={['fab', 'pinterest']} />
				<FontAwesomeIcon icon={['fab', 'twitter-square']} />
				<FontAwesomeIcon icon={['fab', 'facebook-square']} />
				<FontAwesomeIcon icon="coffee" />
				<FontAwesomeIcon icon="check-square" />
				<FontAwesomeIcon icon="list-ul" />
				<FontAwesomeIcon icon="pen" />
				<FontAwesomeIcon icon="bars" />
				<FontAwesomeIcon icon="trash" />
				<FontAwesomeIcon icon="times" />
				<FontAwesomeIcon icon="check" />
				<FontAwesomeIcon icon="chevron-down" />
				<FontAwesomeIcon icon="chevron-up" />
				<FontAwesomeIcon icon="book" />
				<FontAwesomeIcon icon="code" />
				<FontAwesomeIcon icon="heart" />
				<FontAwesomeIcon icon="trash-alt" />
				<FontAwesomeIcon icon={['far', 'heart']} />
				<FontAwesomeIcon icon={['far', 'trash-alt']} />
			</div>
			<div className="flex flex-col-12 gap-6 my-6">
				<FontAwesomeIcon className="text-lime-300" icon="coffee" />
				<FontAwesomeIcon
					className="text-lightBlue-300"
					icon={['fas', 'coffee']}
				/>
				<FontAwesomeIcon className="text-rose-300" icon={['far', 'heart']} />
				<FontAwesomeIcon
					className="text-lightYellow-300"
					icon={['far', 'trash-alt']}
				/>
			</div>
		</div>
		<Container className="my-4">
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Row>
				<Col className="border border-blue-400" xs={12} md={8}>
					xs=12 md=8
					<SimpleCard />
				</Col>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col>
			</Row>

			{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
			<Row>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col>
				<Col xs={6} md={4}>
					xs=6 md=4
				</Col>
			</Row>

			{/* Columns are always 50% wide, on mobile and desktop */}
			<Row>
				<Col xs={6}>xs=6</Col>
				<Col xs={6}>xs=6</Col>
			</Row>
		</Container>
		<div className="components">
			<div className="w-full mx-auto py-16">
				{/* Title */}
				<h1 className="text-3xl text-center font-bold mb-6">
					Button Component (Default)
				</h1>
				{/* End Title */}
				{/* Default */}
				<div className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
					<div className="w-full text-center mx-auto">
						<button
							type="button"
							className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
						>
							Primary
						</button>
						<button
							type="button"
							className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
						>
							Success
						</button>
						<button
							type="button"
							className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
						>
							Error
						</button>
						<button
							type="button"
							className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
						>
							Warning
						</button>
						<button
							type="button"
							className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
						>
							Info
						</button>
						<button
							type="button"
							className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
						>
							Dark
						</button>
						<button
							type="button"
							className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
						>
							Light
						</button>
					</div>
				</div>
				{/* End Default */}
			</div>

			<div className="w-full mx-auto py-16">
				{/* Title */}
				<h1 className="text-3xl text-center font-bold mb-6">
					Button Component (Outline)
				</h1>
				{/* End Title */}
				{/* Outline */}
				<div className="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
					<div className="w-full text-center mx-auto">
						<button
							type="button"
							className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
						>
							Primary
						</button>
						<button
							type="button"
							className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
						>
							Success
						</button>
						<button
							type="button"
							className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
						>
							Error
						</button>
						<button
							type="button"
							className="border border-yellow-500 text-yellow-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
						>
							Warning
						</button>
						<button
							type="button"
							className="border border-teal-500 text-teal-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-teal-600 focus:outline-none focus:shadow-outline"
						>
							Info
						</button>
						<button
							type="button"
							className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline"
						>
							Dark
						</button>
						<button
							type="button"
							className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
						>
							Light
						</button>
					</div>
				</div>
				{/* End Outline */}
			</div>
			<div className="w-full mx-auto py-16">
				{/* Title */}
				<h1 className="text-3xl text-center font-bold mb-6">
					Button Component (Outline)
				</h1>
				{/* End Title */}
				{/* Outline */}
				<div className=" px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md border border-gray-200 flex items-center">
					<div className="w-full text-center mx-auto">
						<div className="flex flex-wrap flex-col-1 items-center">
							<div className="grid gap-4 grid-cols-1 md:grid-cols-4 mx-auto my-2">
								<button className=" text-gray-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-gray-600 hover:bg-opacity-10 border border-gray-400 hover:border-gray-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-blue-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-blue-600 hover:bg-opacity-10 border border-blue-400 hover:border-blue-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-teal-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-teal-600 hover:bg-opacity-10 border border-teal-400 hover:border-teal-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-green-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-green-600 hover:bg-opacity-10 border border-green-400 hover:border-green-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-yellow-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-yellow-600 hover:bg-opacity-10 border border-yellow-400 hover:border-yellow-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-orange-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-orange-600 hover:bg-opacity-10 border border-orange-400 hover:border-orange-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-red-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-red-600 hover:bg-opacity-10 border border-red-400 hover:border-red-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
								<button className=" text-pink-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-pink-600 hover:bg-opacity-10 border border-pink-400 hover:border-pink-300 hover:border-opacity-30 rounded-xl">
									Button
								</button>
							</div>
						</div>

						<div className="flex flex-wrap flex-col-1 items-center">
							<div className="grid gap-4 grid-cols-1 md:grid-cols-4 mx-auto my-2">
								<button className=" text-gray-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-gray-600 hover:bg-opacity-10 border border-gray-400 hover:border-gray-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-blue-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-blue-600 hover:bg-opacity-10 border border-blue-400 hover:border-blue-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-teal-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-teal-600 hover:bg-opacity-10 border border-teal-400 hover:border-teal-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-green-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-green-600 hover:bg-opacity-10 border border-green-400 hover:border-green-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-yellow-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-yellow-600 hover:bg-opacity-10 border border-yellow-400 hover:border-yellow-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-orange-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-orange-600 hover:bg-opacity-10 border border-orange-400 hover:border-orange-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-red-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-red-600 hover:bg-opacity-10 border border-red-400 hover:border-red-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
								<button className=" text-pink-400 font-semibold hover:text-gray-200 py-2 px-3 bg-transparent hover:bg-pink-600 hover:bg-opacity-10 border border-pink-400 hover:border-pink-300 hover:border-opacity-30 rounded-full">
									Button
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default SecondPage
