import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        I made this simple blog website while learning how to build websites using
        Gatsby. Gatsby is an open-source static website generator that is based
        on React and uses Webpack and GraphQL technology. It can be used to build
        static sites which follow the latest web standards and are optimised for
        speed and security.
      </p>
    </Layout>
  )
}

export default AboutPage
