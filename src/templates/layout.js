import React, { useState } from "react"
import "./layout.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import MenuButton from "./menuButton"

const Layout = ({ children }) => {
  const [hidden, changeHidden] = useState(true)

  const activeLink = {
    color: "white",
    backgroundColor: "#1f8dd6",
  }

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="gatsby">
      <nav className={hidden ? "hideNav" : "showNav"}>
        <div className="nav-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>

        <div className="nav-list">
          <Link to="/page1" activeStyle={activeLink}>
            Page1
          </Link>
          <Link to="/page2" activeStyle={activeLink}>
            Page2
          </Link>
          <Link to="/page3" activeStyle={activeLink}>
            Page3
          </Link>
          <Link to="/page4" activeStyle={activeLink}>
            Page4
          </Link>
        </div>
      </nav>

      <div className="main">{children}</div>

      <MenuButton onClick={() => changeHidden(!hidden)} hiddenMenu={hidden} />
    </div>
  )
}

export default Layout
