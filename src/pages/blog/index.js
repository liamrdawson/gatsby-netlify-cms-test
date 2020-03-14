import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import styled from 'styled-components'
import {brandStyles, spacingUnit, layoutUnit} from '../../paletteStyles'

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
    h1 {
      font-weight: bold;
      boxShadow: ${brandStyles.boxShadow};
      backgroundColor: ${brandStyles.colorBackgroundAccent};
      color: ${brandStyles.colorFontSecondary};
      padding: ${spacingUnit._05};
    }
`;

const Content = styled.div`
  text-align: center;
  list-style: none;
  margin: ${spacingUnit._06};
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

const Section = styled.div `
  padding: ${layoutUnit._04} ${layoutUnit._02};
`;

const Container = styled.div `
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
`;

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <FullWidthImageContainer style={{backgroundImage: `url(/img/1920x1080.png)`}}>
          <h1>
              News and Events
          </h1>
        </FullWidthImageContainer>
        <Section>
          <Container>
            <Content>
              <BlogRoll/>
            </Content>
          </Container>
        </Section>
      </Layout>
    )
  }
}
