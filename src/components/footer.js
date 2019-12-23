import React from "react"
import "./layout.css"

function Footer() {
  return (
    <footer
      style={{
        textAlign: `center`,
        backgroundColor: `#333`,
        color: `#e2e2e2`,
        padding: `.9rem`,
        fontSize: `.75rem`,
      }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>, By:{" "}
      <a href="https://mattaz.com">Mattaz Web Design</a>
    </footer>
  )
}
export default Footer
