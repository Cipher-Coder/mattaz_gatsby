import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTabsIntro from "../components/DevTabsIntro/devTabsIntro"
import "../styles/devtabs.css"
import logo from "../images/devTabsLogo.png"
import bookmark from "../images/3d-bookmarks.png"
import MyImage from "../components/myImage"

const DevTabsPage = () => (
  <Layout>
    <SEO title="Dev Tabs" />
    <section className="intro-devtabs">
      <div className="container">
        <div className="row">
          <img
            className="devTabsLogo"
            src={logo}
            alt="Dev Tabs Extension Logo"
          />
        </div>
        <DevTabsIntro />
      </div>
    </section>
    <section className="info-section">
      <div className="container-fluid">
        <div className="row">
          <h3 className="font-weight-bold m-auto">
            Dev Tabs Browser Extension
          </h3>
        </div>
        <div className="row">
          <MyImage
            myClass={"col-sm-3 bookmark-image"}
            myUrl={bookmark}
            alt={"Bookmarks folder"}
            title={"Bookmarks:"}
            content={`On the left side of the page are your commonly used bookmarks.
              These are sites that you visit everyday and don't want to be
              hunting through all of your folders for. These will be entered
              separately, and do not impact your browser bookmarks. For the
              initial setup, click on the settings cog in the middle of the
              page, you will be brought to the settings page. Using Markdown
              format, enter all of the sites you want to show up in that column,
              each separated by a comma, and click save. When you go back to the
              landing page, they will be there. I also included an input on the
              landing page to enter individual links, so you can continue to add
              on as you find new sites you visit often. The individual links
              will be appended to the end of the list. The bookmarks column will
              scroll independently. All of these are stored in Chrome's local
              storage. Again, they do not have anything to do with your normal
              bookmarks.`}
          />
          <MyImage
            myClass={"col-sm-3 bookmark-image"}
            myUrl={bookmark}
            alt={"Bookmarks folder"}
            title={"GitHub:"}
            content={`I have included two different aspects of Github on the Dev Tabs page. First, is the Github commit graph.
                When you first install the extension, go to the settings page, and on the left, click the option to
                enter your Github Username. Once entered, click save and when you go back to the Dev Tabs page, your
                Github commit graph will show up in the middle of the page. When I did the 100 days of code, I tracked
                my progress using Github and commiting something everyday. I liked to see my progress and got used to
                see the graph, so I included it on here. Also you will see on the right hand side of the page a space
                for your top 10 Github repos. Again, you will configure this in the settings page by entering your
                Github username for the Github repos. I left this as two separate options as you may have more than one
                account and want to see the graph from one account and repos from a different one or vice versa.`}
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default DevTabsPage
