const {
    loadProjectPortalThemeOptions,
} = require("@thepolicylab-projectportals/project-portal-content-netlify/utils/theme-options")
const { siteMetadata, themeOptions } = loadProjectPortalThemeOptions()

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        ...themeOptions,
        tailwindConfig: require("./tailwind.config"),
        faviconPath: `${__dirname}/content/theme-image/icon.png`,
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
      },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TAG],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
  ],
}
