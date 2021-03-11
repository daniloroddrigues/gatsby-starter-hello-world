import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import Header from "../components/header"
import Layout from "../components/layout"

export default function Mark({ data }) {
  console.log(data)

  return (
    <Layout>
      <Header headerText="Mark Amazing Pandas" />
      <div>
        <h3
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Pandas Eating Things
        </h3>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
            </h3>
            <span
              css={css`
                color: #bbbbbb;
              `}
            >
              - {node.frontmatter.date}
            </span>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          timeToRead
          excerpt
          html
          id
        }
      }
      totalCount
    }
  }
`
