import React from "react"
import "../styles/index.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Uses = () => (
  <Layout>
    <SEO title="Uses" />
    <div className="container">
      <h1 className="uses-heading">Uses</h1>
      <hr />
    </div>
    <div className="container">
      <h2>Hardware:</h2>
      <p>
        &#x25B8;<b> Main Computer:</b> Dell Inspiron running{" "}
        <a
          href="https://linuxmint.com/"
          target="_blank"
          rel="noopener noreferrer">
          Linux Mint 19.3
        </a>{" "}
        with an Intel i5 processor &amp; 16gb RAM.
      </p>
      <p>
        &#x25B8;<b> Laptop Computer:</b> Lenovo T440 running{" "}
        <a
          href="https://linuxmint.com/"
          target="_blank"
          rel="noopener noreferrer">
          Linux Mint 19.3
        </a>{" "}
        with an Intel i5 processor &amp; 8gb RAM.
      </p>
      <p>
        &#x25B8;<b> Phone:</b> Samsung Galaxy S9 Note running Android.
      </p>
      <p>
        &#x25B8;<b> Home Server:</b> Dell Optiplex running{" "}
        <a
          href="https://ubuntu.com/download/server"
          target="_blank"
          rel="noopener noreferrer">
          Ubuntu 18.04 server
        </a>
        .
      </p>
    </div>
    <div className="container">
      <h2>Software:</h2>
      <p>
        &#x25B8;<b> Editor:</b> VS Code with{" "}
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
      </p>
      <p>
        &#x25B8;<b> Terminal:</b>{" "}
        <a href="https://hyper.is/" target="_blank" rel="noopener noreferrer">
          Hyper Terminal
        </a>{" "}
        , running{" "}
        <a href="https://zsh.org" target="_blank" rel="noopener noreferrer">
          ZSH shell
        </a>{" "}
        and{" "}
        <a href="https://ohmyz.sh/" target="_blank" rel="noopener noreferrer">
          Oh-My-Zsh
        </a>{" "}
        .
      </p>
      <p>
        &#x25B8;<b> Email:</b>{" "}
        <a
          href="https://getmailspring.com/"
          target="_blank"
          rel="noopener noreferrer">
          Mailspring
        </a>{" "}
        for a mail client. I use{" "}
        <a href="https://zoho.com" target="_blank" rel="noopener noreferrer">
          Zoho
        </a>{" "}
        to host my domain's email.
      </p>
      <p>
        &#x25B8;<b> Browser:</b>{" "}
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
      </p>
      <p>
        &#x25B8;<b> Cloud Storage:</b> I run a personal server with{" "}
        <a
          href="https://nextcloud.com"
          target="_blank"
          rel="noopener noreferrer">
          Nextcloud
        </a>
        .
      </p>
      <p>
        &#x25B8;<b> Image Manipulation:</b>{" "}
        <a
          href="https://www.gimp.org/"
          target="_blank"
          rel="noopener noreferrer">
          Gimp GNU Image Manipulation
        </a>
        .
      </p>
      <p>
        &#x25B8;<b> Fonts:</b>{" "}
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
        <a href="https://dank.sh/" target="_blank" rel="noopener noreferrer">
          Dank Mono
        </a>{" "}
        and switching back and forth. They are both great fonts.
      </p>
      <p>
        &#x25B8;<b> Markdown:</b>{" "}
        <a
          href="https://www.typora.io/"
          target="_blank"
          rel="noopener noreferrer">
          Typora
        </a>
        .
      </p>
      <p>
        &#x25B8;<b> Notes:</b>{" "}
        <a
          href="https://joplinapp.org/"
          target="_blank"
          rel="noopener noreferrer">
          Joplin
        </a>
        .
      </p>
      <p>
        &#x25B8;<b> Password Management:</b>{" "}
        <a
          href="https://bitwarden.com"
          target="_blank"
          rel="noopener noreferrer">
          Bitwarden
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default Uses
