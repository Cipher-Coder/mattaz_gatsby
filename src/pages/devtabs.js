import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTabsIntro from "../components/DevTabsIntro/devTabsIntro"
import "../styles/devtabs.css"
import logo from "../images/devTabsLogo.png"
import bookmark from "../images/3d-bookmarks.png"

const DevTabsPage = () => (
  <Layout>
    <SEO title="Dev Tabs" />
    <section className="intro-devtabs">
      <div className="container">
        <div className="row">
          <img
            className="devTabsLogo"
            src={logo}
            alt="Dev Tabs Extension Logo"
          />
        </div>
        <DevTabsIntro />
      </div>
    </section>
    <section className="info-section">
      <div className="container">
        <div className="row">
          <h3 className="font-weight-bold m-auto">
            Dev Tabs Browser Extension
          </h3>
        </div>
        <img src={bookmark} alt="Bookmarks description" />
      </div>
    </section>
  </Layout>
)

export default DevTabsPage
