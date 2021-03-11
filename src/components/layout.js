import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from "../components/container"

const LinkList = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
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
    <Container>
      <div style={{ padding: `0` }}>
        <header>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline-block` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
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
      {children}
    </Container>
  )
}
