module.exports = {
  siteMetadata: {
    title: "Nisha",
    description: "A Minimilistic Theme.",
    author: "@youngmahesh",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
