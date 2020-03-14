import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import {brandStyles, spacingUnit} from '../paletteStyles'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import styled from 'styled-components'
import Section from '../components/containers/Section'
import Container from '../components/containers/Container'
import Columns from '../components/containers/Columns'
import Button from '../components/Button'

const FullWidthImageContainer = styled.div `
    width: 100vw;
    height: 800px;
    position: relative;
    left: 50%;
    right: 50%;
    margin: 2em -50vw;
    background-size: cover;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
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
        margin: 0;
        font-weight: 700;
        background-color: ${brandStyles.colorBackgroundAccent};
        box-shadow:  ${
          brandStyles.boxShadow,
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

const Column = styled.div`
    margin: 0 auto;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ${spacingUnit._04};
    div {
    &(:not-last-child) {
      margin-bottom: ${spacingUnit._06};
    }
  }
`;

const Column10 = styled(Column)`
  flex: none;
  width: 83.33333%;
`;

const Column12 = styled(Column)`
  flex: none;
  width: 100%;
  h3 {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
`;

const Column12Centered = styled(Column12) `
  text-align: center; 
`;

const Titles = styled.div`
  h1 {
    color: ${brandStyles.colorFontAccent};
    font-weight: 600;
    line-height: 1.125;
    margin-bottom: ${spacingUnit._07};
  }
  h2, h3 {
    font-weight: 400;
    line-height: 1.25;
    margin-bottom: ${spacingUnit._06};
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
        <h1>
          {title}
        </h1>
        <h3>
          {subheading}
        </h3>
      </TitleContainer>
    </FullWidthImageContainer>
    <Section>
      <Container>
        <Section>
          <Columns>
            <Column10>
              <div>
                <div>
                  <Titles>
                    <h1>{mainpitch.title}</h1>
                  </Titles>
                  <Titles>
                    <h3>{mainpitch.description}</h3>
                  </Titles>
                </div>
                <Columns>
                  <Column12>
                    <h3>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </Column12>
                </Columns>
                <Features gridItems={intro.blurbs} />
                <Columns>
                  <Column12Centered>
                    <Button as={Link} to="/products">
                      See all products
                    </Button>
                  </Column12Centered>
                </Columns>
                <Column12>
                  <h3>
                    News and Events
                  </h3>
                  <BlogRoll />
                  <Column12Centered>
                    <Button as={Link} to="/blog">
                      Read more
                    </Button>
                  </Column12Centered>
                </Column12>
              </div>
            </Column10>
          </Columns>
        </Section>
      </Container>
    </Section>
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
