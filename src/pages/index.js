import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div
      style={{
        paddingTop: `20px`,
        textAlign: `center`,
      }}
    >
      <h1
        style={{
          color: `rgb(59, 153, 224)`,
        }}
      >
        What we do...
      </h1>
      <p
        style={{
          maxWidth: `420px`,
          margin: `auto`,
          opacity: 0.7,
          fontSize: `1.2rem`,
        }}
      >
        At Mattaz Web Design/Development, we specialize in local, small business
        websites. We turn ideas into eye catching, user friendly websites.
      </p>
    </div>
    <div
      className="row clean-block align-items-center"
      style={{ marginBottom: `1.45rem` }}
    >
      <Image />
      <p className="col-md-6">Lets build something wonderful!!.</p>
    </div>
    <div
      style={{
        display: `block`,
        marginRight: `auto`,
        marginLeft: `auto`,
        maxWidth: `960px`,
        textAlign: `center`,
      }}
    >
      <Carousel />
    </div>
  </Layout>
)

export default IndexPage
