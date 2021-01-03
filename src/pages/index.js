import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reusable/heroSection'
import Infoblock from '../components/reusable/infoblock'
import DualInfoblock from '../components/reusable/DualInfoblock'
//import BackgroundImage from 'gatsby-background-image'



import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <Infoblock heading="About us"/>
    <DualInfoblock heading="Our Team" imgSrc="https://images.pexels.com/photos/1144260/
    pexels-photo-1144260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
