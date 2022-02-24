import React from "react"
import _get from "lodash/get"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Home from "../components/home/home"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import { ParallaxProvider } from 'react-scroll-parallax';

const IndexPage = () => {
  return (
    <ParallaxProvider>
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
