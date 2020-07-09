import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.css"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="container-fluid main-div">
        <h1 className="text-center pt-5 contact-title">Get in Touch!!</h1>
        <p className="text-center col-sm-8 col-md-6 col-lg-4 mx-auto contact-desc">
          For any further information, or to get a quote, please feel free to
          reach out anytime. We do excellent freelance work at very affordable
          prices! We look forward to hearing from you, and will get back to you
          as soon as possible.
        </p>
        <div className="container">
          <div className="row contact-form">
            <iframe
              className="contact-iframe"
              scrolling="no"
              title="Contact Form"
              src="https://forms.zohopublic.com/matthew22/form/MattazWebDevelopment/formperma/w2loiSb_5UWebQDppVGzUSMWZW8ZxwHlFD89gRckIJE"
            />
          </div>
        </div>
        <Link className="link-home" to="/">
          Go back to the Homepage{" "}
        </Link>{" "}
      </div>
    </Layout>
  )
}

export default ContactPage
