import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Layout>
  )
}
