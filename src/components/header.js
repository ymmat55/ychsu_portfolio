import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <h5>
        <Link to="/about">About</Link>
      </h5>
      <h5>
        <Link to="/blog">Blog</Link>
      </h5>
      <h5>
        <Link to="/contact">Contact</Link>
      </h5>
    </header>
  )
}
