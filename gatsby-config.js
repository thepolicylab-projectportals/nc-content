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
        showDevBanner: true,
      },
    },
    `@thepolicylab-projectportals/project-portal-content-netlify`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-W667ER3CGB"],
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
