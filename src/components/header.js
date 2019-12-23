import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="https://mattaz.com">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Link
          to="/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            paddingRight: `12px`,
          }}
          activeStyle={{ color: "#007bff" }}>
          Home
        </Link>
        <Link
          to="/devtabs/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            paddingRight: `12px`,
          }}
          activeStyle={{ color: "#007bff" }}>
          Dev Tabs
        </Link>
        <Link
          to="/blog/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            paddingRight: `12px`,
          }}
          activeStyle={{ color: "#007bff" }}>
          Blog
        </Link>
        <Link
          to="/contact/"
          style={{
            color: `#fff`,
            textDecoration: `none`,
            paddingRight: `15px`,
          }}
          activeStyle={{ color: "#007bff" }}>
          Contact
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
