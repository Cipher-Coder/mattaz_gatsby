module.exports = {
  siteMetadata: {
    title: `Mattaz Web Design`,
    description: `Using Gatsby to build Mattaz Web Design Website.`,
    keywords: `Mattaz, Gatsby, React, Web, Design`,
    author: `@MRebehn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      resolve: `gatsby-transformer-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 90,
      },
    },
    `gatsby-plugin-sharp`,
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
    "gatsby-transformer-remark",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
