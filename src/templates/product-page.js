import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import styled from 'styled-components'
import Columns from '../components/containers/Columns'
import ProductTiles from '../components/ProductTiles'
import Section from '../components/containers/Section'
import {brandStyles, spacingUnit, breakpoint} from '../paletteStyles'

const FullWidthImageContainer = styled.div `
    width: 100vw;
    height: 400px;
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
    h1, h2 {
      font-weight: bold;
      boxShadow: ${brandStyles.boxShadow};
      backgroundColor: ${brandStyles.colorBackgroundAccent};
      color: ${brandStyles.colorFontSecondary};
      padding: ${spacingUnit._05};
    }
`;

const SectionContainer = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
  @media screen and (min-width: ${breakpoint.lg}) {
    max-width: 960px;
  }
  section {
    padding: ${spacingUnit._09} ${spacingUnit._06};
  }
`;

const HeadingAndText = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${spacingUnit._04};
  text-align: center;
  @media print, screen and (min-width: ${breakpoint.md}) {
    flex: none;
    width: 58.33333%;
    margin: ${spacingUnit._06} auto;
  }
  h3 {
    margin-bottom: ${spacingUnit._04};
    color: ${brandStyles.colorBodyFont};;
    font-weight: 600;
    line-height: 1.125;
  }
`;

const PricingBlock = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${spacingUnit._04};
  margin: 0 auto;
  @media screen and (min-width: ${breakpoint.md}) {
    flex: none;
    width: 83.33333%;
  }
  h2 {
    font-weight: 600;
  }
  p {
    font-size: ${brandStyles.fontSizeLarge};
  }
`;


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div>
    <FullWidthImageContainer
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2>
        {title}
      </h2>
    </FullWidthImageContainer>
    <Section>
      <SectionContainer>
        <section>
          <Columns>
            <HeadingAndText>
              <h3>{heading}</h3>
              <p>{description}</p>
            </HeadingAndText>
          </Columns>
          <Columns>
            <div>
              <Features gridItems={intro.blurbs} />
              <Columns>
                <HeadingAndText>
                  <h3>
                    {main.heading}
                  </h3>
                  <p>{main.description}</p>
                </HeadingAndText>
              </Columns>
              <ProductTiles imageInfo={main} />
              <Testimonials testimonials={testimonials} />
              </div>
          </Columns>
        </section>
      </SectionContainer>
      <FullWidthImageContainer
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      />
      <SectionContainer>
        <section>
          <Columns>
            <HeadingAndText>
              <h3>{heading}</h3>
              <p>{description}</p>
            </HeadingAndText>
          </Columns>
          <Columns>
            <PricingBlock>
              <h2>
                {pricing.heading}
              </h2>
              <p>{pricing.description}</p>
              <Pricing data={pricing.plans} />
            </PricingBlock>
          </Columns>
        </section>
      </SectionContainer>
    </Section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
