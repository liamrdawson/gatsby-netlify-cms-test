import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import { createGlobalStyle } from "styled-components"
import {brandStyles, spacingUnit, breakpoint} from '../paletteStyles'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: ${brandStyles.fontSizeBase}
  }
  html {
    font-size: 14px;
    @media screen and (min-width: ${breakpoint.sm}) {
      font-size: 16px;
    }
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
    margin-top: ${spacingUnit._07};
    margin-bottom: ${spacingUnit._06};
    @media screen and (min-width: ${breakpoint.sm}) {
      margin-top: ${spacingUnit._09};
      margin-bottom: ${spacingUnit._08};
    }
  }
  h2 {
    font-size: ${brandStyles.fontSizeLargest};
    margin-top: ${spacingUnit._06};
    margin-bottom: ${spacingUnit._05};
    @media screen and (min-width: ${breakpoint.sm}) {
      margin-top: ${spacingUnit._08};
      margin-bottom: ${spacingUnit._07};
    }
  }
  h3 {
    font-size: ${brandStyles.fontSizeLarger};
    margin-top: ${spacingUnit._05};
    margin-bottom: ${spacingUnit._04};
    @media screen and (min-width: ${breakpoint.sm}) {
      margin-top: ${spacingUnit._07};
      margin-bottom: ${spacingUnit._06};
    }
  }
  h4 {
    font-size: ${brandStyles.fontSizeLarge};
    margin-top: ${spacingUnit._03};
    margin-bottom: ${spacingUnit._02};
    @media screen and (min-width: ${breakpoint.sm}) {
      margin-top: ${spacingUnit._06};
      margin-bottom: ${spacingUnit._05};
    }
  }
  h5 {
    font-size: ${brandStyles.fontSizeBody};
    margin-top: ${spacingUnit._02};
    margin-bottom: ${spacingUnit._01};
    @media screen and (min-width: ${breakpoint.sm}) {
      margin-top: ${spacingUnit._05};
      margin-bottom: ${spacingUnit._04};
    }
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
