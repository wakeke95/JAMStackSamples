/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};