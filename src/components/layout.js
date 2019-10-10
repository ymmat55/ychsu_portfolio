import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
// import "bootstrap/dist/css/bootstrap.min.css"
import layoutStyle from "./layout.module.scss"

export default function Layout(props) {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
