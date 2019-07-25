import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 className="text-center pt-5">Get in Touch!!</h1>
    <p className="text-center col-sm-4 mx-auto">
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
      }}
    >
      <iframe
        title="Contact Form"
        src="https://forms.zohopublic.com/matthew22/form/MattazWebDevelopment/formperma/w2loiSb_5UWebQDppVGzUSMWZW8ZxwHlFD89gRckIJE"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          display: `block`,
          height: `880px`,
          width: `80%`,
          border: `none`,
          padding: `30px 0 0 65px`,
        }}
      ></iframe>
    </div>

    <Link to="/" style={{ display: `block`, textAlign: `center` }}>
      Go back to the homepage
    </Link>
  </Layout>
)

export default SecondPage
