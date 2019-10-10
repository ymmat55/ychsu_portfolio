import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              Title
              Date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h2>{edge.node.frontmatter.Title}</h2>
                <p>{edge.node.frontmatter.Date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
