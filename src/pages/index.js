import React from "react"
import _get from "lodash/get"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Home from "../components/home/home"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
