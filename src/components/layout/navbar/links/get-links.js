import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faIdCardAlt } from "@fortawesome/free-solid-svg-icons"

import Link from "../../../link/link"

const getLinks = links => {
  const linkComponents = {
    people: (
      <Link key="blog" to="/blog">
        <FontAwesomeIcon icon={faCode} />
        Blog
      </Link>
    ),
    publications: (
      <Link key="about" to="https://page-portfolio.netlify.app/">
        <FontAwesomeIcon icon={faIdCardAlt} />
        Contacto
      </Link>
    ),
  }

  return <>{links.map(link => linkComponents[link])}</>
}

export default getLinks
