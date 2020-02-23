import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="wild-ivy-logo"
          sizes="180x180"
          href={`${withPrefix('/')}img/wild-ivy-logo.svg`}
        />
        <link
          rel="wild-ivy-logo"
          type="image/svg"
          href={`${withPrefix('/')}img/wild-ivy-logo.svg`}
          sizes="32x32"
        />
        <link
          rel="wild-ivy-logo"
          type="image/svg"
          href={`${withPrefix('/')}img/wild-ivy-logo.svg`}
          sizes="16x16"
        />

        <link
          rel="wild-ivy-logo"
          href={`${withPrefix('/')}img/wild-ivy-logo.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/wild-ivy-logo.svg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
