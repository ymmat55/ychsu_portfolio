import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Notfound() {
  return (
    <div>
      <Layout>
        <h1>Page not found</h1>
        <p>
          <Link to="/">Head Home</Link>
        </p>
      </Layout>
    </div>
  )
}
