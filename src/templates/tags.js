import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

import styled from 'styled-components' 
import Section from '../components/containers/Section'
import Columns from '../components/containers/Columns'
import Container from '../components/containers/Container'
import HeadingAndTextBlock from '../components/HeadingAndTextBlock'
import {spacingUnit} from '../paletteStyles'

const TagList = styled.ul `
  list-style: none;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: ${spacingUnit._06};
  margin-top: ${spacingUnit._06};
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  li {
    padding: 0 ${spacingUnit._07} ${spacingUnit._05} 0;
    margin-bottom: ${spacingUnit._06};
  }
`;

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <Section>
          <Helmet title={`${tag} | ${title}`} />
          <Container>
            <Columns>
              <HeadingAndTextBlock>
                <h3>{tagHeader}</h3>
                <TagList>{postLinks}</TagList>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </HeadingAndTextBlock>
            </Columns>
          </Container>
        </Section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
