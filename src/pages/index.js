import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Mattaz Web Design</h1>
    <p>This is our future home!!!</p>
    <p>Lets build something wonderful!!.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Carousel />
  </Layout>
)

export default IndexPage
