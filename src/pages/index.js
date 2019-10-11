import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

const Index = () => {
  return (
    <div>
      <Layout>
        <Head></Head>
        <h1>Hello.</h1>
        <h2>I'm YC</h2>
        <p>
          Need a developer?<Link to="/contact">Contact me.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default Index
