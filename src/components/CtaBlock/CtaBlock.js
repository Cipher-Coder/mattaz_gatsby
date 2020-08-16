import React from "react"
import { Icon } from "@iconify/react"
import noteIcon from "@iconify/icons-simple-line-icons/note"
import screenTablet from "@iconify/icons-simple-line-icons/screen-tablet"
import screenDesktop from "@iconify/icons-simple-line-icons/screen-desktop"
import bookOpen from "@iconify/icons-simple-line-icons/book-open"
import "../CtaBlock/CtaBlock.css"

const CtaBlock = () => {
  return (
    <div className="container">
      <div className="block-heading">
        <h2 className="light-blue text-center">What we can do for you...</h2>
        <p className="sub-info">
          We can design, develop, launch and maintain all different kinds of
          websites. We work with many different frameworks and platforms.
          Contact us for a quote!
        </p>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5 feature-box">
          <Icon icon={screenTablet} className="line-icons icon light-blue" />
          <h4 className="block-title">Static Website</h4>
          <p className="block-text">
            Our most popular choice! Using technologies like HTML, CSS, and
            JavaScript, we build you an eye catching website. Most Economical &
            quickest to get online.&nbsp;
          </p>
        </div>
        <div className="col-md-5 feature-box">
          <Icon icon={screenDesktop} className="line-icons icon light-blue" />
          <h4 className="block-title">Progressive Web Apps</h4>
          <p className="block-text">
            PWA's provide an installable, app-like experience on your desktop
            and mobile. Fast, reliable, and work in any browser.
          </p>
        </div>
        <div className="col-md-5 feature-box">
          <Icon icon={bookOpen} className="line-icons icon light-blue" />
          <h4 className="block-title">Browser Extensions</h4>
          <p className="block-text">
            Browser extensions allow you to extend the use of your browser.
            Helping surf the web, bookmark favorites and more. Extensions can be
            used for web services, internal apps, cloud storage, corporate apps
            & more.
          </p>
        </div>
        <div className="col-md-5 feature-box">
          <Icon icon={noteIcon} className="line-icons icon light-blue" />
          <h4 className="block-title">Dynamic Content</h4>
          <p className="block-text">
            Have content that is always changing? Do you want us to build you a
            blog? With todays technology there are many different ways to get
            you going.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CtaBlock
