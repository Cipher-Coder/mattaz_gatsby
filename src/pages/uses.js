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
          <h2 className="category-head">VS Code Extensions:</h2>
          <ul>
            <li>
              <b> Auto Close Tag:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
                target="_blank"
                rel="noopener noreferrer">
                Automatically{" "}
              </a>
              add HTML/XML close tag.
            </li>
            <li>
              <b> Auto Rename Tag:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
                target="_blank"
                rel="noopener noreferrer">
                Auto rename{" "}
              </a>
              paired HTML/XML tag.
            </li>
            <li>
              <b> Autoprefixer:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer"
                target="_blank"
                rel="noopener noreferrer">
                Parse CSS{" "}
              </a>
              and add vendor prefixes automatically.
            </li>
            <li>
              <b> Bookmarks:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
                target="_blank"
                rel="noopener noreferrer">
                Mark lines{" "}
              </a>
              and jump to them.
            </li>
            <li>
              <b> Bracket Pair Colorizer 2:</b> A{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                target="_blank"
                rel="noopener noreferrer">
                customizable extension{" "}
              </a>
              for colorizing matching brackets.
            </li>
            <li>
              <b> Code Runner:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner"
                target="_blank"
                rel="noopener noreferrer">
                Run code{" "}
              </a>
              snippet or code file for multiple languages.
            </li>
            <li>
              <b> Code spell checker:</b> Spelling{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                target="_blank"
                rel="noopener noreferrer">
                checker{" "}
              </a>
              for source code.
            </li>
            <li>
              <b> Debugger for Chrome:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                target="_blank"
                rel="noopener noreferrer">
                Debug{" "}
              </a>
              your JavaScript code in the Chrome Browser.
            </li>
            <li>
              <b> ES7 React/Redux/GraphQL/React-Native Snippets:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                target="_blank"
                rel="noopener noreferrer">
                Simple Extension{" "}
              </a>
              for React, Redux and Graphql in JS/TS with ES7 syntax.
            </li>
            <li>
              <b> GitLens:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
                target="_blank"
                rel="noopener noreferrer">
                Supercharge{" "}
              </a>
              the Git capabilities built into VS Code.
            </li>
            <li>
              <b> Highlight Matching Tag:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag"
                target="_blank"
                rel="noopener noreferrer">
                Highlights{" "}
              </a>
              matching closing or opening tag.
            </li>
            <li>
              <b> HTML CSS Support:</b> CSS{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css"
                target="_blank"
                rel="noopener noreferrer">
                support{" "}
              </a>
              for HTML documents.
            </li>
            <li>
              <b> HTMLHint:</b> A Static Code{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint"
                target="_blank"
                rel="noopener noreferrer">
                Analysis{" "}
              </a>
              tool for HTML.
            </li>
            <li>
              <b> Import Cost:</b>{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
                target="_blank"
                rel="noopener noreferrer">
                Display{" "}
              </a>
              import/require package size in the editor.
            </li>
            <li>
              <b> IntelliSense for CSS Class names in HTML:</b> CSS class name{" "}
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"
                target="_blank"
                rel="noopener noreferrer">
                completion{" "}
              </a>
              for the HTML class attribute based on the definitions found in
              your workspace.
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
