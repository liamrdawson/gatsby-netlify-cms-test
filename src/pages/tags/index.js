import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {brandStyles, spacingUnit, layoutUnit} from '../../paletteStyles'

import styled from 'styled-components' 
import Container from '../../components/containers/Container'
import Columns from '../../components/containers/Columns'
import Section from '../../components/containers/Section'

const TagColumns = styled(Columns)`
  margin: 0 auto;
`;

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
    margin-top: 0;
  }
`;

const TagsHeadingAndText = styled.div`
  flex: none;
  width: 83.33333%;
  display: block;
  padding: ${spacingUnit._04};
  margin-bottom: ${layoutUnit._06};
  h1 {
    margin-bottom: ${spacingUnit._06};
    font-weight: 600;
    line-height: 1.125;
    color: ${brandStyles.colorBodyFont};
    word-break: break-word;
  }
  @media print, screen and (min-width: 769px) {
    flex: none;
    width: 58.33333%;
    margin: ${spacingUnit._06} auto;
  }
`;

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Section>
      <Helmet title={`Tags | ${title}`} />
      <Container>
        <TagColumns>
          <TagsHeadingAndText>
            <h1>Tags</h1>
            <TagList>
              {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
            </TagList>
          </TagsHeadingAndText>
        </TagColumns>
      </Container>
    </Section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
