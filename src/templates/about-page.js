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

const AboutImageBlock = styled(AboutColumn)`
  width: 100%;
  height: 50%;
`;

export const AboutPageTemplate = ({ title, content, test, contentComponent, image }) => {
  const PageContent = contentComponent || Content
  console.log(content);
  return (
    <Section>
      <AboutContainer>
        <div>
          <AboutImageBlock>
            <h1> A New Column</h1>
            <PreviewCompatibleImage imageInfo={image} />
          </AboutImageBlock>
          <AboutImageBlock style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          }}>
            <h1> A New Column</h1>
          </AboutImageBlock>
        </div>
        
        <AboutColumn>
              <h2>
                {title}
              </h2>
              <PageContent content={content} />
        </AboutColumn>
      </AboutContainer>
    </Section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  test: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  // const frontmatter = data.markdownRemark
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        test={post.frontmatter.test}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        test
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
