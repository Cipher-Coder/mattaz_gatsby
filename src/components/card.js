import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import gitHubIcon from "../images/GitHubIcon.png"

const TrackingCard = () => {
  return (
    <Card
      className="text-center"
      style={{ marginTop: `70px`, marginBottom: `70px` }}>
      <Card.Header style={{ backgroundColor: `#fda5a5` }}>
        Dev Tabs Privacy Policy
      </Card.Header>
      <Card.Body style={{ backgroundColor: `#eae7e7` }}>
        <Card.Title>
          Extension Tracking &amp; Personal Identifiable Information:
        </Card.Title>
        <Card.Text>
          This extension does not track you in any way. Any information gathered
          about you, is stored on <b>your</b> machine. I made a point to not
          track users in any way. I even left off Google Analytics. This too,
          was one of the motivations for creating this extension. Every single
          one I looked at, had some kind of tracking and/or ads. This has
          neither. This is a Free, Open Source extension that I built and wanted
          to share. You are welcome to check out the{" "}
          <a
            href="https://github.com/Cipher-Coder/chromeExtension"
            target="_blank"
            rel="noopener noreferrer">
            source code
          </a>{" "}
          and contribute. If you get any use out of this and want to buy me a
          coffee... It would be greatly appreciated.
        </Card.Text>
        <Button
          variant="primary"
          size="sm"
          href="https://paypal.me/CipherCoder?locale.x=en_US"
          target="_blank"
          rel="noopener noreferrer">
          Buy Me a{" "}
          <span role="img" aria-label="Coffee Cup">
            &#9749;
          </span>
        </Button>
      </Card.Body>
      <Card.Footer
        className="text-center"
        style={{ backgroundColor: `#fda5a5` }}>
        <a
          href="https://github.com/Cipher-Coder"
          target="_blank"
          rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub Icon" />
        </a>
      </Card.Footer>
    </Card>
  )
}

export default TrackingCard
