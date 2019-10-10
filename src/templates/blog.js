import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        Title
        Date
      }
      html
    }
  }
`

export default function Blog(props) {
  return (
    <div>
      <Layout>
        <h1>{props.data.markdownRemark.frontmatter.Title}</h1>
        <p>{props.data.markdownRemark.frontmatter.Date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </Layout>
    </div>
  )
}
