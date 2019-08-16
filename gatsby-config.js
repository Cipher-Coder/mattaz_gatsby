module.exports = {
  siteMetadata: {
    title: `Mattaz Web Design`,
    description: `Mattaz Web Design. Small business websites at affordable prices.`,
    keywords: `Mattaz, Gatsby, React, Web, Design`,
    author: `@MRebehn`,
    siteUrl: `https://www.mattaz.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-copy-linked-files`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 960,
        linkImagesToOriginal: false,
        sizeByPixelDensity: true,
        showCaptions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118247855-2",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mattaz Web Design`,
        short_name: `Mattaz`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/mattaz-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
