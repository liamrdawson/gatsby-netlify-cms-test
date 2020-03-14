import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {brandStyles, spacingUnit, breakpoint} from '../paletteStyles'
import styled from 'styled-components'
import Section from '../components/containers/Section'
import Container from '../components/containers/Container'
import Columns from '../components/containers/Columns'

const HeadingAndTextLeft = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ${spacingUnit._04};
    text-align: left;
    @media print, screen and (min-width: ${breakpoint.md}) {
        flex: none;
        width: 80.33333%;
        margin: ${spacingUnit._06} auto;
    }
    h1, h2, h3 {
        line-height: 1.125;
        font-weight: 600;
        color: ${brandStyles.colorBodyFont};
    }
    h3 {
        margin-bottom: ${spacingUnit._03};
        &:not(:first-child) {
          margin-top: ${spacingUnit._06};
        }
    }
    h2 {
        margin-bottom: ${spacingUnit._09};
    }
      &:not(:last-child), ul:not(:last-child) {
        margin-bottom: ${spacingUnit._05};
      }
    }
`;


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <Container>
        <Columns>
          <HeadingAndTextLeft>
              <h2>
                {title}
              </h2>
              <PageContent content={content} />
          </HeadingAndTextLeft>
        </Columns>
      </Container>
    </Section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
