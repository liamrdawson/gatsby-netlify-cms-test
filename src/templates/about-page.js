import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Content, { HTMLContent } from '../components/Content'
import Section from '../components/containers/Section'
import Container from '../components/containers/Container'
import Column from '../components/containers/Column'
import styled from 'styled-components'
import {layoutUnit} from '../paletteStyles'

const AboutContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const AboutColumn = styled(Column)`
  padding: ${layoutUnit._03};
  border: solid red 4px;
  width: 48%;
  margin-left: 0;
  margin-right: 0;
  h2, p {
    margin-bottom: ${layoutUnit._04};
  }
`;

export const AboutPageTemplate = ({ image, main, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <Section>
      <Container 
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        }}
      >
        <AboutColumn>
              <h2>
                {title}
              </h2>
              <PageContent content={content} />
        </AboutColumn>
      </Container>
    </Section>
  )
}

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  test: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  main: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  })
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        image={frontmatter.image}
        main={frontmatter.main}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
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
        }
      }
    }
  }
`
