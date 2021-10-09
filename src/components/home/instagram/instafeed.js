import React from "react"
import _get from "lodash/get"
import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import './instafeed.css'

const InstaFeed = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent {
        edges {
          node {
            localImage {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
  return (
    <div className="insta-feed">
      {arrayOfInstaImages.map((item, i) => {
        return (
          <div key={i} className="insta-item">
            <Img fixed={item.node.localImage.childImageSharp.fixed} />
          </div>
        )
      })}
    </div>
  )
}

export default InstaFeed
