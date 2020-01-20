import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import discord from "../images/discordicon.png"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div
        className="container-fluid"
        style={{ backgroundColor: `rgba(218, 218, 218, 0.651)` }}>
        <h1
          className="text-center pt-5 contact-title"
          style={{ color: `rgb(59, 153, 224)` }}>
          Get in Touch!!
        </h1>
        <p
          className="text-center col-sm-4 mx-auto contact-desc"
          style={{ opacity: `0.8` }}>
          For any further information or to get a quote please feel free to
          reach out anytime.We look forward to hearing from you and will get
          back to you as soon as possible.
        </p>
        <div className="container">
          <div
            className="row contact-form"
            style={{ margin: `35px auto 40px` }}>
            <iframe
              scrolling="no"
              title="Contact Form"
              src="https://forms.zohopublic.com/matthew22/form/MattazWebDevelopment/formperma/w2loiSb_5UWebQDppVGzUSMWZW8ZxwHlFD89gRckIJE"
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                display: `block`,
                height: `850px`,
                width: `70%`,
                border: `none`,
              }}
            />
          </div>
          <div className="discord">
            <p style={{ textAlign: `center` }}>
              You can join me on{" "}
              <a
                href="https://discordapp.com"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={discord}
                  alt="Discord Icon"
                  style={{ height: `1.5rem` }}
                />
              </a>{" "}
              in my own{" "}
              <a
                href="https://discord.gg/YfUFkQw"
                target="_blank"
                rel="noopener noreferrer">
                Chat Room
              </a>{" "}
              to talk to me directly.
            </p>
          </div>
        </div>
        <Link
          to="/"
          style={{
            display: `block`,
            textAlign: `center`,
            paddingBottom: `30px`,
          }}>
          Go back to the Homepage{" "}
        </Link>{" "}
      </div>
    </Layout>
  )
}

export default ContactPage
