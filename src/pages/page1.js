import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../templates/layout"

export default () => (
  <Layout>
    <Helmet>
      <title>Page1</title>
    </Helmet>
    <h2>This is Page 1.</h2>
  </Layout>
)
