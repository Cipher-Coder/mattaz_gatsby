import React from "react"

import "../styles/index.css"
import Layout from "../components/layout"
import supportImage from "../images/computerVector.jpg"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Hero from "../components/Hero/hero"
import CtaBlock from "../components/CtaBlock/CtaBlock"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      classes="hero-image"
      h1Text="Mattaz Web Design"
      h3Text="Because Every Detail 'Mattaz'"
    />
    <section className="intro-section">
      <div className="intro">
        <h1 className="light-blue">What we do...</h1>
        <p className="intro-text">
          At Mattaz Web Design/Development, we specialize in local, small
          business websites. We turn ideas into eye catching, user friendly
          websites.
        </p>
      </div>
      <div className="row clean-block align-items-center">
        <img
          className="col-md-6 image-thumbnail"
          src={supportImage}
          alt="Computer Drawing"
        />
        <div className="col-md-6 more-text-block">
          <h2 className="light-blue">More...</h2>
          <p className="support-text">
            A website is important because it helps you establish credibility as
            a business. In addition to credibility, a website is a great digital
            marketing platform to increase your business revenue.
          </p>
          <p className="support-text">
            We no longer pull a phone book out, we look at our phones or other
            electronic devices and search. Without an online presence, you are
            at a disadvantage.
          </p>
          <p className="support-text">
            We design cleanly coded, responsive websites to aid in your
            business's discovery, credibility, and long term marketing strategy.
          </p>
          <Link to="/contact/" className="button btn btn-primary">
            Contact Us!
          </Link>
        </div>
      </div>
    </section>
    <section className="clean-block cta-section">
      <CtaBlock />
    </section>
    <section className="carousel-section">
      <div className="carousel-info">
        <h2 className="light-blue pb-5">Check out some of our work...</h2>
        <Carousel />
      </div>
    </section>
  </Layout>
)

export default IndexPage
