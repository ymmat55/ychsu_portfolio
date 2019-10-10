import React from "react"
import { Link } from "gatsby"
//import "./header.module.scss"
import headerStyle from "./header.module.scss"

export default function Header() {
  return (
    <header className={headerStyle.header}>
      <h1>
        <Link className={headerStyle.title} to="/">
          YC Hsu
        </Link>
      </h1>
      <nav>
        <ul className={headerStyle.navList}>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyle.navItem}
              activeClassName={headerStyle.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
