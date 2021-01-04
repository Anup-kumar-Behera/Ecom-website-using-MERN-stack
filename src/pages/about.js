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
<<<<<<< HEAD
    <DualInfoblock heading="A message from CEO"/>
    <Infoblock heading="About Vision"/>
    <TeamPhotoSection/>
=======
    <Infoblock heading="How can we help?"/>
>>>>>>> e4299562f3925a13b256e9b90020304a30436bf0
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
