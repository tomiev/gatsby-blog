module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://www.awesome-gatsby-blog.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
