const staticText = require("./language.json")

module.exports = {
  siteMetadata: {
    title: "North Carolina Project Portal",
    url: "https://projectportal.nc.gov/",
  },
  plugins: [
    {
      resolve: `@thepolicylab-projectportals/gatsby-theme-project-portal`,
      options: {
        pages: [
          { name: staticText.open.pageName, link: "/", show: true },
          {
            name: staticText.ongoing.pageName,
            link: "/ongoing",
            show: true,
          },
          {
            name: staticText.completed.pageName,
            link: "/completed",
            show: true,
          },
          {
            name: "About",
            link: "/about",
            show: true,
          },
          { name: "Contact", link: "/contact", show: true },
        ],
        tailwindConfig: require("./tailwind.config"),
        staticText: staticText,
        showDevBanner: false,
        recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
        faviconPath: `${__dirname}/content/theme-image/icon.png`,
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
  ],
}
