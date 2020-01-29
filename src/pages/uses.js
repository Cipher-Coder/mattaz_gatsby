import React from "react"
import "../styles/index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/uses.css"

const Uses = () => (
  <Layout>
    <SEO title="Uses" />
    <div className="container">
      <div className="row uses-title col-sm-12">
        <h1 className="uses-heading">Uses</h1>
      </div>
      <div className="row col-sm-12">
        <hr width="60%" className="uses-hr" />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <h2 className="category-head">Hardware:</h2>
          <ul>
            <li>
              <b> Main Computer:</b> Dell Inspiron running{" "}
              <a
                href="https://linuxmint.com/"
                target="_blank"
                rel="noopener noreferrer">
                Linux Mint 19.3
              </a>{" "}
              with an Intel i5 processor &amp; 16gb RAM.
            </li>
            <li>
              <b> Laptop Computer:</b> Lenovo T440s running{" "}
              <a
                href="https://linuxmint.com/"
                target="_blank"
                rel="noopener noreferrer">
                Linux Mint 19.3
              </a>{" "}
              with an Intel i5 processor &amp; 8gb RAM.
            </li>
            <li>
              <b> Phone:</b> Samsung Galaxy Note S9 running Android.
            </li>
            <li>
              <b> Home Server:</b> Dell Optiplex running{" "}
              <a
                href="https://ubuntu.com/download/server"
                target="_blank"
                rel="noopener noreferrer">
                Ubuntu 18.04 server
              </a>
              .
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <h2 className="category-head">Software:</h2>
          <ul>
            <li>
              <b> Editor:</b> VS Code with{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Mattaz.dark-cipher"
                target="_blank"
                rel="noopener noreferrer">
                Dark Cipher
              </a>{" "}
              theme. I also play with the{" "}
              <a
                href="https://code.visualstudio.com/insiders/"
                target="_blank"
                rel="noopener noreferrer">
                Insiders Build
              </a>{" "}
              a lot, though it is not as stable.
            </li>
            <li>
              <b> Terminal:</b>{" "}
              <a
                href="https://extraterm.org"
                target="_blank"
                rel="noopener noreferrer">
                Extraterm
              </a>{" "}
              , running{" "}
              <a
                href="https://zsh.org"
                target="_blank"
                rel="noopener noreferrer">
                ZSH shell
              </a>{" "}
              and{" "}
              <a
                href="https://ohmyz.sh/"
                target="_blank"
                rel="noopener noreferrer">
                Oh-My-Zsh
              </a>{" "}
              .
            </li>
            <li>
              <b> Email:</b>{" "}
              <a
                href="https://getmailspring.com/"
                target="_blank"
                rel="noopener noreferrer">
                Mailspring
              </a>{" "}
              for a mail client. I use{" "}
              <a
                href="https://zoho.com"
                target="_blank"
                rel="noopener noreferrer">
                Zoho
              </a>{" "}
              to host my domain's email.
            </li>
            <li>
              <b> Browser:</b>{" "}
              <a
                href="https://www.mozilla.org/en-US/firefox/developer/"
                target="_blank"
                rel="noopener noreferrer">
                Firefox Developer Edition
              </a>{" "}
              is my daily driver. I test on{" "}
              <a
                href="https://www.google.com/chrome/beta/"
                target="_blank"
                rel="noopener noreferrer">
                Chrome Beta Edition
              </a>{" "}
            </li>
            <li>
              <b> Cloud Storage:</b> I run a personal server with{" "}
              <a
                href="https://nextcloud.com"
                target="_blank"
                rel="noopener noreferrer">
                Nextcloud
              </a>
              .
            </li>
            <li>
              <b> Image Manipulation:</b>{" "}
              <a
                href="https://www.gimp.org/"
                target="_blank"
                rel="noopener noreferrer">
                Gimp GNU Image Manipulation
              </a>
              .
            </li>
            <li>
              <b> Fonts:</b>{" "}
              <a
                href="https://www.typography.com/fonts/operator/styles"
                target="_blank"
                rel="noopener noreferrer">
                Operator Mono
              </a>{" "}
              with{" "}
              <a
                href="https://github.com/kiliman/operator-mono-lig"
                target="_blank"
                rel="noopener noreferrer">
                font ligatures
              </a>
              . Lately, I have been using{" "}
              <a
                href="https://dank.sh/"
                target="_blank"
                rel="noopener noreferrer">
                Dank Mono
              </a>{" "}
              and switching back and forth. They are both great fonts.
            </li>
            <li>
              <b> Markdown:</b>{" "}
              <a
                href="https://www.typora.io/"
                target="_blank"
                rel="noopener noreferrer">
                Typora
              </a>
              .
            </li>
            <li>
              <b> Notes:</b>{" "}
              <a
                href="https://joplinapp.org/"
                target="_blank"
                rel="noopener noreferrer">
                Joplin
              </a>
              .
            </li>
            <li>
              <b> Password Management:</b>{" "}
              <a
                href="https://bitwarden.com"
                target="_blank"
                rel="noopener noreferrer">
                Bitwarden
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Uses
