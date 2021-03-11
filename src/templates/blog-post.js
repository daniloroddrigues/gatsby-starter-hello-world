import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function BlogPost() {
  return (
    <Layout>
      <Header headerText="Blog post single" />
      <p>A single post for us</p>
    </Layout>
  )
}
