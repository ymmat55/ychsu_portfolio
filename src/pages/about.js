import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

export default function About() {
  return (
    <div>
      <Layout>
        <Head></Head>
        <h1>About YC</h1>
        <div>
          <h5>
            Full stack web developer with 5+ years in marketing and public
            relations. Professional experience in tech startups, educational
            institute and news publishing houses. Enjoys collaborating with all
            levels to gather information, solve problems and make impact.
          </h5>
          <p>
            Need a developer?<Link to="/contact">Contact me.</Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}
