import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import * as navStyles from "./nav.module.css"

const LinkList = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Nav() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className={navStyles.navgation}>
      <header>
        <Link to="/">
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <ul>
          <LinkList to="/">Home</LinkList>
          <LinkList to="/about/">About</LinkList>
          <LinkList to="/pandas/">Pandas</LinkList>
          <LinkList to="/my-files/">My Files</LinkList>
          <LinkList to="/about-css-modules/">CSS Modules</LinkList>
          <LinkList to="/mark/">Markdown Remark</LinkList>
          <LinkList to="/contact/">Contact</LinkList>
        </ul>
      </header>
    </div>
  )
}
