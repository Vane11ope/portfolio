module.exports = {
  siteMetadata: {
    title: `ヴァネロピのポートフォリオっ`,
    description: `Just a portfolio of Vane11ope`,
    author: `Vane11ope`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/vane11ope.png`, // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: "/portfolio",
}
