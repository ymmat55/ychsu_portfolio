import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                Title
                Date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <Layout>
        <Head></Head>
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.Title}</h2>
                  <p>{edge.node.frontmatter.Date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default BlogPage
