import React from 'react'
import { Helmet } from 'react-helmet'
import { setStaticQuery, graphql, useStaticQuery } from 'gatsby'

const Head = ({ title }) => {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <Helmet title={`${title}`} />
    )
}

export default Head