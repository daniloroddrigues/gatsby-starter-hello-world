import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout style={{ color: `purple` }}>
      <Header headerText="Contact" />
      <p>My Contacts</p>
      <p>
        <a href="mailto:contato@gatsby.com">contato@gatsby.com</a>
      </p>
      <p>
        <a href="mailto:contato@gatsby.com">+555 9999-99994</a>
      </p>
    </Layout>
  )
}
