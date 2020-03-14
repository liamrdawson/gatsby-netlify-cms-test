import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { createGlobalStyle } from "styled-components"
import {brandStyles, spacingUnit} from '../paletteStyles'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${brandStyles.fontSizeBase}
  }
  body {
    font-family: ${brandStyles.fontFamilyPrimary};
    color: ${brandStyles.colorBodyFont};
    background-color: ${brandStyles.colorBackgroundLight};
  }
  h1, h2, h3 {
    font-family: ${brandStyles.fontFamilySecondary};
  }
  p {
    font-size: ${brandStyles.fontSizeBody};
  }
  a {
    color: ${brandStyles.colorFontLink};
  }
  h1 {
    font-size: ${brandStyles.fontSizeHeader};
    margin-bottom: ${spacingUnit._09};
  }
  h2 {
    font-size: ${brandStyles.fontSizeLargest};
    margin-bottom: ${spacingUnit._08};
  }
  h3 {
    font-size: ${brandStyles.fontSizeLarger};
    margin-bottom: ${spacingUnit._07};
  }
  h4 {
    font-size: ${brandStyles.fontSizeLarge};
    margin-bottom: ${spacingUnit._06};
  }
  h5 {
    font-size: ${brandStyles.fontSizeBody};
    margin-bottom: ${spacingUnit._06};
  }
`

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
        <GlobalStyle/>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/wild-ivy-icon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/wild-ivy-icon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/wild-ivy-icon.png`}
          color="#ff4400"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway&display=swap" rel="stylesheet"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/wild-ivy-icon.png`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
