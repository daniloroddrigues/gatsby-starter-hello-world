import React from "react"
import Container from "../components/container"
import Nav from "../components/nav"

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Container>{children}</Container>
    </div>
  )
}
