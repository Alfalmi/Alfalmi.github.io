module.exports = {
  pathPrefix: "/alfalmipage",
  siteMetadata: {
    author: "PinoFloyd",
    description: "Alfalmi Tech",
    siteUrl: "https://alfalmi.com/",
    title: "TechJunkie",
    // List of link buttons to include on the landing image. Delete this field
    // and/or all entires if you do not want these links.
    // options: 'contact', 'opportunities', 'people', 'publications', 'research'
    primaryLinks: ["research", "opportunities"],
    // List of PubMed IDs to include on the publication page. Delete this field
    // and/or all entires if you do not want the publication page.
    publications: [31217594, 30554943, 29395067, 24255178],
    // An array of links to display in the page footer. Include as many as you like
    // (not just the ones here). If either the link or text is missing,
    // it will not be shown. Delete this field and/or all entires to disable
    // footer links.
    footerLinks: [
      { text: "GitHub", link: "https://github.com/Alfalmi" },
      { text: "Twitter", link: "https://twitter.com/ipnofly" },
      { text: "LinkedIn", link: "https://www.linkedin.com/in/alfalmi/" },
    ],
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-scientist",
        short_name: "scientist",
        start_url: "/",
        background_color: "#3d8183",
        theme_color: "#3d8183",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: "IGQVJYdVFIWGlQUFZA6UjJIcVFnTU9QUHB0Qk5YdGtfUG1FZA3I5SHp2RnRTWEE2TjNySndTbEhyU0pnN1JJNXRWV0dNVmJ4RzlMTFk5eEItcVdYLUdReDJnay1hLUxlNXV4OXItNXdydzRfRHFRcnRqagZDZD",
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "06dmcn2ukdxu",//process.env.CONTENTFUL_SPACE_ID
        accessToken: "-jDCGsFit3Jy2XTp170LQi87r91YP9EoWZd1FHi2TMw"//process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
  ],
}
