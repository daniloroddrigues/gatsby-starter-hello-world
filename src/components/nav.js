import React from "react"
import { Link } from "gatsby"
import * as navStyles from "./nav.module.css"

export default function Nav() {
  return (
    <nav className={navStyles.navgation}>
      <ul>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/about-css-modules/">About Css Modules</Link>
        </li>
      </ul>
    </nav>
  )
}
