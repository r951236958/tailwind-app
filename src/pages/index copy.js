//import { Link } from "gatsby"
//import Img from "gatsby-image"
import React from 'react'
//import Image from "../components/image"
//import MyImage from "../components/myImage"
//import BackgroundImage from "../components/BackgroundImage"
import Layout from '../components/layout'
import LinkList from '../components/linklist'
//import { IconBtnOutline } from "../components/IconBtnOutline"
//import ResponsiveHeader from "../components/responsiveheader"
import SEO from '../components/seo'
import '../utils/fontawesome'
//import gatsbyAst from "../images/gatsby-astronaut.png"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="grid grid-cols-1 gap-10 ">
			<div className="mx-auto pt-16">
				<LinkList />
			</div>
		</div>
	</Layout>
)

export default IndexPage
