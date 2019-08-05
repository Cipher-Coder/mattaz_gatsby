import React from "react"
import "../DevTabsIntro/devTabsIntro.css"
import screenshot from "../../images/screenshot.png"
import Modal from "react-bootstrap/Modal"

const DevTabsIntro = () => {
  const [show, setShow] = React.useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="row intro-container">
      <div className="devTabs-intro col-md-6 col-lg-4">
        <h2>Mattaz Web Development's</h2>
        <h3>Dev Tabs Chrome Extension</h3>
        <p className="devtabs-intro-text">
          I was having trouble finding a new tab/homepage extension that suited
          my needs for my Chrome installation. I wanted a landing page and 'new
          tab' page that was geared towards my work, and went even further by
          helping me with my work. I could not find one, so I set out to build
          one. That is how Dev Tabs came to life. A landing page and new tab
          page for your Google Chrome and Firefox browser.
        </p>
        <p className="devtabs-intro-text">
          This New Tab page has a few different things it does. I tried to make
          a mix of business and pleasure. I like to see what is going on in the
          industry when I first log on in the mornings, then quickly transition
          into work mode.{" "}
        </p>
      </div>
      <div className="intro-image col-md-6 col-lg-8">
        <img
          className="img-responsive intro-screenshot"
          src={screenshot}
          alt="Screenshot of the Dev Tabs Extension"
          onClick={handleShow}
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body onClick={handleClose}>
          <img src={screenshot} alt="Dev Tabs extension" />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DevTabsIntro
