import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const Index = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm YC</h2>
      <p>
        Need a developer?<Link to="/contact">Contact me.</Link>
      </p>
      <Footer />
    </div>
  )
}

export default Index
