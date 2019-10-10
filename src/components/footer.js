import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
        }
      }
    }
  `)
  return (
    <footer>
      <p>Created by {data.site.siteMetadata.name}, © 2019</p>
    </footer>
  )
}
