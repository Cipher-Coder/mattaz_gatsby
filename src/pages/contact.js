import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1 className="text-center pt-5" style={{ color: `rgb(59, 153, 224)` }}>
      Get in Touch!!
    </h1>
    <p className="text-center col-sm-4 mx-auto" style={{ opacity: 0.8 }}>
      For any further information or to get a quote please feel free to reach
      out anytime. We look forward to hearing from you and will get back to you
      as soon as possible.
    </p>
    <div
      className="col-sm-6"
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: "20px",
      }}
    >
      <iframe
        title="Contact Form"
        src="https://forms.zohopublic.com/matthew22/form/MattazWebDevelopment/formperma/w2loiSb_5UWebQDppVGzUSMWZW8ZxwHlFD89gRckIJE"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          display: `block`,
          height: `850px`,
          width: `80%`,
          border: `none`,
        }}
      />
    </div>
    <Link
      to="/"
      style={{ display: `block`, textAlign: `center`, paddingBottom: `20px` }}
    >
      Go back to the Homepage
    </Link>
  </Layout>
)

export default ContactPage
