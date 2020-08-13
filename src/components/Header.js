import { Link } from "gatsby"
import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logo from "../images/logo55.png"

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="https://mattaz.com" style={{ color: `#4c9fd8` }}>
      <img src={logo} style={{ maxHeight: `40px` }} alt="Mattaz Logo" />
      attaz Web Design
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
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

export default Header
