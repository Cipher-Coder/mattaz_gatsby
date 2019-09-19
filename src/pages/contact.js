import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <h1 className="text-center pt-5 contact-title">Get in Touch!!</h1>
    <p className="text-center col-sm-4 mx-auto contact-desc">
      For any further information or to get a quote please feel free to reach
      out anytime. We look forward to hearing from you and will get back to you
      as soon as possible.
    </p>
    <div class="container">
      <div className="row contact-form">
        <form method="post" action="/">
          <h1 class="form-title mt-3">Mattaz Web Development</h1>
          <h4 class="form-title mb-5">Have a question or want to chat?</h4>
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name *"
              required="required"
            />
          </div>
          <div>
            <label for="subject">Subject:</label>
            <select name="subject" id="subject">
              <option value="quote">Product Quote</option>
              <option value="inquiry">General Inquiry</option>
              <option value="help">Help</option>
              <option value="bug">Report a Bug</option>
              <option value="devTabs">Dev Tabs Info</option>
            </select>
          </div>
          <div>
            <label for="mail">E-mail:</label>
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Enter Email *"
              required="required"
            />
          </div>
          <div>
            <label for="msg">Message:</label>
            <textarea
              id="msg"
              name="message"
              placeholder="Please Write Message Here *"
              required="required"
            ></textarea>
          </div>
          <div class="send-button">
            <button class="btn btn-primary mb-5">Send</button>
          </div>
        </form>
      </div>
    </div>
    <Link
      to="/"
      style={{ display: `block`, textAlign: `center`, paddingBottom: `30px` }}
    >
      Go back to the Homepage
    </Link>
  </Layout>
)

export default ContactPage
