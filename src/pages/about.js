import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reusable/heroSection'
import Infoblock from '../components/reusable/infoblock'
import DualInfoblock from '../components/reusable/DualInfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'
//import BackgroundImage from 'gatsby-background-image'



import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background"
    />
    <Infoblock heading="How can we help?"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "about.png"}){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
