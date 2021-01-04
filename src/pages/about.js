import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/reusable/heroSection'
import Infoblock from '../components/reusable/infoblock'
import DualInfoblock from '../components/reusable/DualInfoblock'
import TeamPhotoSection from '../components/About/TeamPhotoSection'
import Layout from "../components/layout"
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
    <DualInfoblock heading="A message from CEO"/>
    <Infoblock heading="About Vision"/>
    <TeamPhotoSection/>
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
