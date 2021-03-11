import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <Header headerText="About Gatsby Hero Title" />
      <Header headerText="It's pretty cool" />
      <h1>About Gatsby</h1>
      <p>Such now. Very React.</p>
    </Layout>
  )
}
