import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function PageNotFound() {
  return (
    <Layout>
      <Header headerText="404" style={{ fontSize: `72px`, textAling: `center` }} />
      <p>Ooops page not found</p>
    </Layout>
  )
}
