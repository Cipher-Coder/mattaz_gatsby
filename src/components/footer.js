import React from "react"
import "./layout.css"

function Footer() {
  return (
    <footer
      style={{
        textAlign: `center`,
        backgroundColor: `#333`,
        color: `white`,
        padding: `.9rem`,
        fontSize: `.75rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>, By:{" "}
      <a href="https://mattaz.com">Mattaz Web Design</a>,
    </footer>
  )
}
export default Footer
