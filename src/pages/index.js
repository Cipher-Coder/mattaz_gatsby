import React from "react"

import "../styles/index.css"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Hero from "../components/Hero/hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      classes="hero-image"
      h1Text="Mattaz Web Design"
      h3Text="Because Every Detail 'Mattaz'"
    />
    <section className="first-section">
    <div className="intro">
      <h1 className="light-blue">
        What we do...
      </h1>
      <p className="intro-text">
        At Mattaz Web Design/Development, we specialize in local, small business
        websites. We turn ideas into eye catching, user friendly websites.
      </p>
    </div>
    <div className="row clean-block align-items-center">
      <Image />
      <div className="col-md-6 pl-5">
        <h2 className="light-blue">More...</h2>
        <p className="support-text">
          A website is important because it helps you establish credibility as a
          business. In addition to credibility, a website is a great digital
          marketing platform to increase your business revenue.
        </p>
        <p className="support-text">
          We no longer pull a phone book out, we look at our phones or other
          electronic devices and search. Without an online presence, you are at
          a disadvantage.
        </p>
        <p className="support-text">
          We design cleanly coded, responsive websites to aid in your business's
          discovery, credibility, and long term marketing strategy.
        </p>
      </div>
    </div>
    </section>
    <section className="carousel-section">
      <h2 className="light-blue pb-5">Check out some of our work...</h2>
      <Carousel />
    </section>
  </Layout>
)

export default IndexPage
