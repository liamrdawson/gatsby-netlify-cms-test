import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import styled from 'styled-components'
import Section from '../components/containers/Section'
import Container from '../components/containers/Container'
import Columns from '../components/containers/Columns'

const HeadingAndTextLeft = styled.div`
      display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;
    text-align: left;
    @media print, screen and (min-width: 769px) {
        flex: none;
        width: 80.33333%;
        margin: 1.5rem auto;
    }
    h1, h2, h3 {
        font-size: 2.5rem;
        line-height: 1.125;
        font-weight: 600;
        color: #363636;
    }
    h3 {
        margin-bottom: 0.6666em;
        &:not(:first-child) {
          margin-top: 1.3333em;
        }
    }
    h2 {
        margin-bottom: 3rem;
    }
      &:not(:last-child), ul:not(:last-child) {
        margin-bottom: 1em;
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
