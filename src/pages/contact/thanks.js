import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Section from '../../components/containers/Section'
import Container from '../../components/containers/Container'
import {brandStyles} from '../../paletteStyles'

const Content = styled.div`
  h1 {
    color: ${brandStyles.colorFontSecondary};
    font-weight: 600;
    line-height: 1.125;
  }
`;

export default () => (
  <Layout>
    <Section>
      <Container>
        <Content>
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </Content>
      </Container>
    </Section>
  </Layout>
)
