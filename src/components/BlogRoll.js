import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import styled from 'styled-components'
import MultilineContainer from './containers/MultilineContainer'

const FeaturedThumbnail = styled.div `
  flex-basis: 35%;
  margin: 0 1.5em 0 0;
`;

const BlogListArticle = styled.article `
  align-items: stretch;
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  margin: 0;
  border-radius: 4px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  header {
    display: flex;
    margin-bottom: 1em;
    p a {
      word-break: break-word;
      font-weight: 600;
      line-height: 1.125;
      font-size: 1.5rem
    }
  }
`;

const DatePostedSpan = styled.span `
  word-break: break-word;
  display: block;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
`;

const Button = styled.button `
    border-color: rgb(219, 219, 219);
    border-radius: 4px;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    -webkit-appearance: none;
    align-items: center;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.5em - 1px);
    padding-left: calc(0.75em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
`;

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <MultilineContainer>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <BlogListArticle style={{backgroundColor: `${post.frontmatter.featuredpost ? 'rgba(214, 64, 0, 0.2)' : ''}`}}>
                <header>
                  {post.frontmatter.featuredimage ? (
                    <FeaturedThumbnail>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </FeaturedThumbnail>
                  ) : null}
                  <p>
                    <Link to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <DatePostedSpan>
                      {post.frontmatter.date}
                    </DatePostedSpan>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link  to={post.fields.slug}>
                    <Button>
                      Keep Reading →
                    </Button>
                  </Link>
                </p>
              </BlogListArticle>
            </div>
          ))}
      </MultilineContainer>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
