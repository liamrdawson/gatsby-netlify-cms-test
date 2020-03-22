import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import {brandStyles, layoutUnit, spacingUnit, breakpoint} from '../paletteStyles'
import styled from 'styled-components' 

import Section from '../components/containers/Section'
import Container from '../components/containers/Container'
import Columns from '../components/containers/Columns'

const TagList = styled.ul `
  list-style: none;
  margin-bottom: 0;
  margin-left: 0;
  margin: ${spacingUnit._06} ${spacingUnit._06} 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  li {
    padding: 0 ${spacingUnit._07} ${spacingUnit._05} 0;
    margin-bottom: ${spacingUnit._06};
  }
`;

const HeadingAndText = styled.div`
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
    p {
      margin: ${layoutUnit._04} 0;
    }
`;

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Section>
      {helmet || ''}
      <Container>
        <Columns>
          <HeadingAndText>
            <h1>
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <TagList>
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </TagList>
              </div>
            ) : null}
          </HeadingAndText>
        </Columns>
      </Container>
    </Section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
