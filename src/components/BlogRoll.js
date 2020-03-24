import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {brandStyles, spacingUnit} from '../paletteStyles'

import styled from 'styled-components'
import MultilineContainer from './containers/MultilineContainer'
import Button from './Button'

const FeaturedThumbnail = styled.div `
  flex-basis: 35%;
  margin: 0 ${spacingUnit._06} 0 0;
`;

const BlogListArticle = styled.article `
  align-items: stretch;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: min-content;
  margin: ${spacingUnit._06}  0;
  border-radius: ${brandStyles.borderRadius};
  padding: ${spacingUnit._06} ${spacingUnit._05};
  position: relative;
  box-shadow: ${brandStyles.boxShadow};
  ${'' /* p {margin-bottom: ${spacingUnit._05};} */}
  header, p {
    display: flex;
    flex-direction: column;
    margin-bottom: ${spacingUnit._05};
    p {
      word-break: break-word;
      ${'' /* margin-bottom: ${spacingUnit._05}; */}
    }
  }
`;

const DatePostedSpan = styled.span `
  word-break: break-word;
  display: block;
`;

const PostTitle = styled(Link)`
  margin-bottom: ${spacingUnit._05};
  word-break: break-word;
  font-weight: 600;
  line-height: 1.125;
  font-size: ${brandStyles.fontSizeLarge};
  text-decoration: none;
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
              <BlogListArticle style={{backgroundColor: `${post.frontmatter.featuredpost ? brandStyles.colorBackgroundAccent : ''}`}}>
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
                  
                    <PostTitle to={post.fields.slug}>
                      {post.frontmatter.title}
                    </PostTitle>
                  <p>
                    <DatePostedSpan>
                      Date posted: {post.frontmatter.date}
                    </DatePostedSpan>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                </p>
                  <Link  to={post.fields.slug}>
                    <Button>
                      Keep Reading →
                    </Button>
                  </Link>
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
