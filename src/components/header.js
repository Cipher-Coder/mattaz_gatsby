import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#333`,
      marginBottom: `0`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          float: `right`,
          marginTop: -30,
          listStyleType: `none`,
        }}
      >
        <li
          style={{
            display: `inline`,
            paddingRight: 10,
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: `none`,
            }}
            activeStyle={{ color: "#92b6db" }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            display: `inline`,
            paddingRight: 7,
          }}
        >
          <Link
            to="/devtabs/"
            style={{
              textDecoration: `none`,
            }}
            activeStyle={{ color: "#92b6db" }}
          >
            Dev Tabs
          </Link>
        </li>
        <li
          style={{
            display: `inline`,
            paddingLeft: 7,
          }}
        >
          <Link
            to="/contact/"
            style={{
              textDecoration: `none`,
            }}
            activeStyle={{ color: "#92b6db" }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
