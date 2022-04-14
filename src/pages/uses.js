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
              <b> Main Computer:</b>2020 Apple MacBook Pro M1 running{" "}
              <a
                href="https://www.apple.com/macos/monterey/"
                target="_blank"
                rel="noopener noreferrer">
                Monterey
              </a>{" "}
              with 16gb RAM and 1TB SSD.
            </li>
            <li>
              <b> Backup Computer:</b> MacBook Pro (Late 2013) running{" "}
              <a
                href="https://www.apple.com/macos/big-sur/"
                target="_blank"
                rel="noopener noreferrer">
                Big Sur
              </a>{" "}
              with an Intel i5 processor &amp; 8gb RAM.
            </li>
            <li>
              <b> Phone:</b> Apple iPhone 13 Pro Max
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
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag"
                  target="_blank"
                  rel="noopener noreferrer">
                  Auto Close Tag:{" "}
                </a>
              </b>{" "}
              Automatically add HTML/XML close tag.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-autoprefixer"
                  target="_blank"
                  rel="noopener noreferrer">
                  Autoprefixer:{" "}
                </a>{" "}
              </b>{" "}
              Parse CSS and add vendor prefixes automatically.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments"
                  target="_blank"
                  rel="noopener noreferrer">
                  Better Comments:{" "}
                </a>{" "}
              </b>{" "}
              Friendly comments for your code. Makes it easier to see and track
              comments and todo's in your code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks"
                  target="_blank"
                  rel="noopener noreferrer">
                  Bookmarks:{" "}
                </a>{" "}
              </b>{" "}
              Mark lines and jump to them.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2"
                  target="_blank"
                  rel="noopener noreferrer">
                  Bracket Pair Colorizer 2:{" "}
                </a>{" "}
              </b>{" "}
              A customizable extension for colorizing matching brackets.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                  target="_blank"
                  rel="noopener noreferrer">
                  Code Spell Check:{" "}
                </a>{" "}
              </b>{" "}
              Spelling checker for source code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Mattaz.dark-cipher"
                  target="_blank"
                  rel="noopener noreferrer">
                  Dark Cipher:{" "}
                </a>{" "}
              </b>{" "}
              Dark theme for VS Code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
                  target="_blank"
                  rel="noopener noreferrer">
                  ES7 React/Redux/GraphQL/React-Native Snippets:{" "}
                </a>{" "}
              </b>{" "}
              Simple Extension for React, Redux and Graphql in JS/TS with ES7
              syntax.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
                  target="_blank"
                  rel="noopener noreferrer">
                  GitLens:{" "}
                </a>{" "}
              </b>{" "}
              Supercharge the Git capabilities built into VS Code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag"
                  target="_blank"
                  rel="noopener noreferrer">
                  Highlight Matching Tag:{" "}
                </a>{" "}
              </b>{" "}
              Highlights matching, closing, or opening tag.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css"
                  target="_blank"
                  rel="noopener noreferrer">
                  HTML CSS Support:{" "}
                </a>{" "}
              </b>{" "}
              Support CSS for HTML documents.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint"
                  target="_blank"
                  rel="noopener noreferrer">
                  HTMLHint:{" "}
                </a>{" "}
              </b>{" "}
              A Static Code Analysis tool for HTML.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost"
                  target="_blank"
                  rel="noopener noreferrer">
                  Import Cost:{" "}
                </a>{" "}
              </b>{" "}
              Display import/require package size in the editor.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion"
                  target="_blank"
                  rel="noopener noreferrer">
                  IntelliSense for CSS Class names in HTML:{" "}
                </a>{" "}
              </b>{" "}
              CSS class name completion for the HTML class attribute based on
              the definitions found in your workspace.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
                  target="_blank"
                  rel="noopener noreferrer">
                  Live Server:{" "}
                </a>{" "}
              </b>{" "}
              Launch a development local server with live reload feature for
              static &amp; dynamic pages.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"
                  target="_blank"
                  rel="noopener noreferrer">
                  Markdown All In One:{" "}
                </a>{" "}
              </b>{" "}
              Markdown Tools, keyboard shortcuts, table of contents, auto
              preview, and more.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script"
                  target="_blank"
                  rel="noopener noreferrer">
                  NPM:{" "}
                </a>{" "}
              </b>{" "}
              NPM support for VS Code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
                  target="_blank"
                  rel="noopener noreferrer">
                  NPM IntelliSense:{" "}
                </a>{" "}
              </b>{" "}
              VS Code plugin that autocompletes npm modules in import
              statements.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
                  target="_blank"
                  rel="noopener noreferrer">
                  Path IntelliSense:{" "}
                </a>{" "}
              </b>{" "}
              VS Code plugin that autocompletes filenames.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                  target="_blank"
                  rel="noopener noreferrer">
                  Prettier - Code Formatter:{" "}
                </a>{" "}
              </b>{" "}
              Code formatter using prettier.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=JamesBirtles.svelte-vscode"
                  target="_blank"
                  rel="noopener noreferrer">
                  Svelte:{" "}
                </a>{" "}
              </b>{" "}
              Svelte language support for VS Code.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=ardenivanov.svelte-intellisense"
                  target="_blank"
                  rel="noopener noreferrer">
                  Svelte IntelliSense:{" "}
                </a>{" "}
              </b>{" "}
              Provides IntelliSense for data, events, slots, etc. in components.
            </li>
            <li>
              <b>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree"
                  target="_blank"
                  rel="noopener noreferrer">
                  Todo Tree:{" "}
                </a>{" "}
              </b>{" "}
              Quickly searches your workspace for comment tags like TODO and
              FIXME, and displays them in a tree view in the activity bar.
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
              theme. I mostly use the{" "}
              <a
                href="https://code.visualstudio.com/insiders/"
                target="_blank"
                rel="noopener noreferrer">
                Insiders Build
              </a>{" "}
              , though it can be not as stable.
            </li>
            <li>
              <b> Terminal:</b>{" "}
              <a
                href="https://iterm2.com/"
                target="_blank"
                rel="noopener noreferrer">
                iTerm2
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
                href="https://canarymail.io/"
                target="_blank"
                rel="noopener noreferrer">
                Canary Mail
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
                href="https://www.microsoft.com/en-us/edge"
                target="_blank"
                rel="noopener noreferrer">
                Microsoft Edge
              </a>{" "}
              is my daily driver. I test on{" "}
              <a
                href="https://www.google.com/chrome/canary/"
                target="_blank"
                rel="noopener noreferrer">
                Chrome Canary
              </a>{" "}
              as well as{" "}
              <a
                href="https://www.mozilla.org/en-US/firefox/developer/"
                target="_blank"
                rel="noopener noreferrer">
                Firefox Developer Edition
              </a>{" "}
              and{" "}
              <a
                href="https://www.apple.com/safari/"
                target="_blank"
                rel="noopener noreferrer">
                Safari
              </a>
            </li>
            <li>
              <b> Cloud Storage:</b> I run a personal server with{" "}
              <a
                href="https://nextcloud.com"
                target="_blank"
                rel="noopener noreferrer">
                Nextcloud
              </a>{" "}
              and use{" "}
              <a
                href="https://mega.nz"
                target="_blank"
                rel="noopener noreferrer">
                Mega Cloud Storage
              </a>
              .
            </li>
            <li>
              <b> Image Manipulation:</b>{" "}
              <a
                href="https://affinity.serif.com/en-us/photo/"
                target="_blank"
                rel="noopener noreferrer">
                Affinity Photo
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
                href="https://obsidian.md/"
                target="_blank"
                rel="noopener noreferrer">
                Obsidian
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
          <h2 className="category-head">Browser Extensions:</h2>
          <ul>
            <li>
              <b>
                <a
                  href="https://mattaz.com/devTabs"
                  target="_blank"
                  rel="noopener noreferrer">
                  Dev Tabs
                </a>{" "}
              </b>{" "}
              New Tab extension for developers. Lets me see my commit graph and
              top GitHub Repo's on every new tab.
            </li>
            <li>
              <b>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/"
                  target="_blank"
                  rel="noopener noreferrer">
                  uBlock Origin:
                </a>{" "}
              </b>{" "}
              An{" "}
              <a
                href="https://github.com/gorhill/uBlock"
                target="_blank"
                rel="noopener noreferrer">
                Open source
              </a>{" "}
              efficient ad blocker. Easy on CPU and memory.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://github.com/sienori/Tab-Session-Manager"
                  target="_blank"
                  rel="noopener noreferrer">
                  Tab Session Manager:
                </a>{" "}
              </b>{" "}
              WebExtensions for saving and restoring sessions{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://www.mrfdev.com/enhancer-for-youtube"
                  target="_blank"
                  rel="noopener noreferrer">
                  Enhancer for YouTube&trade;:
                </a>{" "}
              </b>{" "}
              Highly customizable and easy-to-use extension that allows you to
              do so much!{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://github.com/RedHatter/svelte-devtools"
                  target="_blank"
                  rel="noopener noreferrer">
                  Svelte Dev Tools:
                </a>{" "}
              </b>{" "}
              An extension that allows inspection of Svelte component hierarchy
              and state in the Firefox and Chrome developer tools.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"
                  target="_blank"
                  rel="noopener noreferrer">
                  React Developer Tools:
                </a>{" "}
              </b>{" "}
              React Developer Tools is a tool that allows you to inspect a React
              tree, including the component hierarchy, props, state, and more.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://www.wappalyzer.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Wappalyzer:
                </a>{" "}
              </b>{" "}
              A cross-platform utility that uncovers the tech used on websites.
              It detects CMS, ecommerce platforms and web frameworks server
              software, analytics and much more.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://microsoftedge.microsoft.com/addons/detail/json-formatter-for-edge/njpoigijhgbionbfdbaopheedbpdoddi"
                  target="_blank"
                  rel="noopener noreferrer">
                  JSON Formatter
                </a>{" "}
              </b>{" "}
              Simple JSON formatter for when you are doing a quick API call or
              something. It will automatically format the data in your browser.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://chrome.google.com/webstore/detail/page-load-time/fploionmjgeclbkemipmkogoaohcdbig"
                  target="_blank"
                  rel="noopener noreferrer">
                  Page Load Timer
                </a>{" "}
              </b>{" "}
              Dispays page load time in toolbar.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://chrome.google.com/webstore/detail/awesome-cookie-manager/hcpidejphgpcgfnpiehkcckkkemgneif"
                  target="_blank"
                  rel="noopener noreferrer">
                  Awesome Cookie Manager
                </a>{" "}
              </b>{" "}
              Displays a list of Cookies and allows for searching, viewing,
              editing, saving, restoring, and deleting cookies.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/wave-accessibility-tool/"
                  target="_blank"
                  rel="noopener noreferrer">
                  WAVE accessibility tool:
                </a>{" "}
              </b>{" "}
              Evaluate web accessibility within the Firefox browser. When
              activated, the WAVE extension injects icons and indicators into
              your page to give feedback about accessibility and to facilitate
              manual evaluation.{" "}
            </li>
            <li>
              <b>
                <a
                  href="https://chrome.google.com/webstore/detail/page-ruler-redux/giejhjebcalaheckengmchjekofhhmal"
                  target="_blank"
                  rel="noopener noreferrer">
                  Page Ruler Redux
                </a>{" "}
              </b>{" "}
              Developer/Designer ruler to get pixel perfect dimensions,
              positioning, and measuring of elements on a page.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Uses
