import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DevTabsIntro from "../components/DevTabsIntro/devTabsIntro"
import TrackingCard from "../components/TrackingCard"
import MyImage from "../components/myImage"
import DownloadButton from "../components/DownloadButton"

import "../styles/devtabs.css"
import logo from "../images/devTabsLogo.png"
import bookmark from "../images/3d-bookmarks.png"
import github from "../images/github-3d.png"
import devTo from "../images/thepracticaldev.png"
import weather from "../images/theWeather.png"
import screenshot2 from "../images/screenshot2.png"
import qrImg from "../images/screenshot3.png"

const DevTabsPage = () => (
  <Layout>
    <SEO title="Dev Tabs" />
    <div class="main-div">
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
            <h2 className="font-weight-bold m-auto">
              Dev Tabs Browser Extension
            </h2>
          </div>
          <div className="row">
            <MyImage
              divClass={"row bookmark"}
              imgClass={"col-sm-3 bookmark-image"}
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
              divClass={"row github"}
              imgClass={"col-sm-3 bookmark-image"}
              myUrl={github}
              alt={"Bookmarks folder"}
              title={"GitHub:"}
              content={`I have included two different aspects of Github on the Dev Tabs page. First, is the Github commit graph. When you first install the extension, go to the settings page, and on the left, click the option to enter your Github Username. Once entered, click save and when you go back to the Dev Tabs page, your Github commit graph will show up in the middle of the page. When I did the 100 days of code, I tracked my progress using Github and committing something everyday. I liked to see my progress and got used to see the graph, so I included it on here. Also you will see on the right hand side of the page a space for your top 10 Github repos. Again, you will configure this in the settings page by entering your Github username for the Github repos. I left this as two separate options as you may have more than one account and want to see the graph from one account and repos from a different one or vice versa.`}
            />
            <MyImage
              divClass={"row dev-to"}
              imgClass={"col-sm-3 bookmark-image"}
              myUrl={devTo}
              alt={"Bookmarks folder"}
              title={"Developer News:"}
              content={`When I get started in the mornings, I like to read the news and see what is going on around the community and learn a little something. Twitter can be very opinionated and I really just want to read a few articles. I included the article feed from Dev.to. They always have great articles to peruse, and since I do contribute on occasion, I like to keep track of what is going on there. The article title is a link and when clicked on will bring you to the selected article in the same window. They also have a Chrome extension for Twitter. If you check out the Github repo for The Practical Dev, you can look at the extension. I went ahead and borrowed from that and included the important parts of their extension in this one. So now when you visit Twitter, the Dev.to headlines will appear on the right-hand side of your Twitter feed. Not too intrusive, just another way to keep up on the days current headlines.`}
            />
            <MyImage
              divClass={"row weather"}
              imgClass={"col-sm-3 bookmark-image"}
              myUrl={weather}
              alt={"Bookmarks folder"}
              title={"Weather:"}
              content={`The weather is pretty self explanatory. I used the Open Weather Map Api to fetch the current conditions for your location. To set your location, go to the settings page, click the 'Weather' option and just click the button to get your current location. On the first time, it will ask your permission to acquire your location. Also, use the toggle switch to choose your unit of measure (MPH or KPH). Once you click 'ok', it will fetch your coordinates with the HTML Geolocation api and store them in Chrome's local storage. It will then make the api call to Open Weather Map, get your weather, and display it. Just be advised... this extension does not track you in any way. It stores your coordinates in local storage, on your machine and your machine only. Which means, if you move locations and want your weather display to reflect that, you will need to go back into your weather settings and click the button to get your current location. It will then rewrite the data and store your updated coordinates`}
            />
          </div>
        </div>
      </section>
      <section className="evenMore">
        <div className="container">
          <div className="row">
            <h2 className="font-weight-bold m-auto more-heading">
              Check it out... Even More!
            </h2>
            <img
              src={screenshot2}
              className="evenMore-img"
              alt="Dev Tabs Screenshot"
            />
            <h2 className="qr-heading">QR Code Generation</h2>
          </div>
          <div className="row qrCode-info">
            <img
              src={qrImg}
              alt="QR code generator"
              className="img-responsive col-xs-6 col-sm-8 col-md-7 col-lg-6 qr-img"
            />
            <div className="qr-explain col-xs-6 col-sm-8 col-md-7 col-lg-5">
              <h4 className="qr-title">QR Code Generator</h4>
              <p className="qr-text">
                So many times I am in the middle of reading an article or
                watching a tutorial and I have to stop what I am doing and go do
                something else. This was the main inspiration behind this tool.
                I work from home and everyday, at 2:15pm, I have to stop what I
                am doing and go pick up my kids from school. I have to wait on
                line for usually around 30 mins, just sitting, with the car off.
                Now, if I am in the middle of reading something, I can click the
                icon button in the toolbar and copy the url of whatever site I
                am on and create a QR Code that I can scan with my phone and
                take with me. Then while waiting to pick the kids up, I can
                continue to read whatever it was I was working on.
              </p>
            </div>
          </div>
          <div className="row tracking-card">
            <TrackingCard />
          </div>
          <div className="row">
            <h3 className="link-heading">Download Extension</h3>
          </div>
          <div className="row download-links">
            <DownloadButton
              href={
                "https://chrome.google.com/webstore/detail/dev-tabs/ghkccmckjecalghejidolggalehgbcnj"
              }
              name={"Download Chrome Extension"}
            />
            <DownloadButton
              href={
                "https://microsoftedge.microsoft.com/addons/detail/mjnididbffjmpdccgmcbdmondlpafkef?hl=en-US"
              }
              name="Download Edge Extension"
            />
            <DownloadButton
              href={"https://addons.mozilla.org/en-US/firefox/addon/dev-tabs/"}
              name={"Download Firefox Extension"}
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default DevTabsPage
