import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import styled from 'styled-components'

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
      font-size: 3rem;
      font-weight: bold;
      boxShadow: 0.5rem 0 0 #f40, -0.5rem 0 0 #f40;
      backgroundColor: #f40;
      color: white;
      padding: 1rem;
    }
`;

const Content = styled.div`
  text-align: center;
  list-style: none;
  margin: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  li {
    padding: 0 2rem 1rem 0;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`;

const Section = styled.div `
  padding: 3rem 1.5rem;
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
