import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import {brandStyles, spacingUnit, layoutUnit, breakpoint} from '../paletteStyles'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import styled from 'styled-components'
import Column from '../components/containers/Column'
import Button from '../components/Button'

const FullWidthImageContainer = styled.div `
    width: 100vw;
    height: 90vh;
    position: relative;
    left: 50%;
    right: 50%;
    margin: 0 -50vw;
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${layoutUnit._05}; 
    @media screen and (min-width: ${breakpoint.md}) {
      margin-bottom: ${layoutUnit._06}; 
    }
    @media screen and (min-width: ${breakpoint.xl}) {
      margin-bottom: ${layoutUnit._07}; 
    }
`;

const TitleContainer = styled.div`
  display: flex;
  height: 150px;
  line-height: 1;
  justify-content: space-around;
  align-items: left;
  flex-direction: column;
      h1, h2, h3 {
        text-align: center;
        font-weight: 700;
        background-color: ${brandStyles.colorBackgroundAccent};
        box-shadow:  ${
          brandStyles.boxShadow
        };
        color: ${brandStyles.colorFontSecondary};
    }
    h1 {
      padding: ${spacingUnit._05};
    }
    h3 {
      line-height: 1;
      padding: ${spacingUnit._03};
    }
`;

const Titles = styled.div`
  h1 {
    color: ${brandStyles.colorFontAccent};
    font-weight: 600;
    line-height: 1.125;
  }
  h2, h3 {
    font-weight: 400;
    line-height: 1.25;
  }
`;

const SectionBlock = styled.section`
  margin-bottom: ${layoutUnit._05}; 
  @media screen and (min-width: ${breakpoint.md}) {
    margin-bottom: ${layoutUnit._06}; 
  }
  @media screen and (min-width: ${breakpoint.xl}) {
    margin-bottom: ${layoutUnit._07}; 
  }
`;

const ColorBlock = styled.div`
  background-color: ${brandStyles.colorBackgroundDark};
  color: ${brandStyles.colorFontSecondary};
  padding: ${layoutUnit._04} 0;
  div {
    width: 60%;
    margin: 0 auto;
    h3 {
    color: ${brandStyles.colorFontAccent};
    }
  }
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <FullWidthImageContainer 
      style={{backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}>
      <TitleContainer>
        <h1>{title}</h1>
        <h3>{subheading}</h3>
      </TitleContainer>
    </FullWidthImageContainer>
    <Column>

      <SectionBlock>
        <Titles>
          <h1>{mainpitch.title}</h1>
        </Titles>
        <Titles>
          <h3>{mainpitch.description}</h3>
        </Titles>
      </SectionBlock>

    </Column>

      <ColorBlock>
        <div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </ColorBlock>

    <Column>

      <SectionBlock>
        <h3>Our Flowers</h3>
        <Features gridItems={intro.blurbs} />
        <Button as={Link} to="/products">
          See all products
        </Button>
      </SectionBlock>

      <SectionBlock>
        <h3>News and Events</h3>
        <BlogRoll />
        <Button as={Link} to="/blog">
          More News and Events
        </Button>
      </SectionBlock>

    </Column>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
