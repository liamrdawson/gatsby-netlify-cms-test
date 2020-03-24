import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import MultilineContainer from './containers/MultilineContainer'
import styled from 'styled-components'
import Section from '../components/containers/Section'
import {spacingUnit, layoutUnit, breakpoint} from '../paletteStyles'

const FeatureGridBlock = styled.div`
  display: grid;
  ${'' /* width: 120%; */}
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  margin-bottom: ${layoutUnit._03};
  @media screen and (min-width: ${breakpoint.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${layoutUnit._02};
  }
  @media screen and (min-width: ${breakpoint.md}) {
    grid-gap: ${layoutUnit._03};
  }
  @media screen and (min-width: ${breakpoint.lg}) {
    grid-gap: ${layoutUnit._04};
  }
  @media screen and (min-width: ${breakpoint.xl}) {
    grid-gap: ${layoutUnit._05};
  }
`;

const FeatureBlock = styled.div`
  padding: ${spacingUnit._05} 0;
  div {
    text-align: center;
    min-width: 240px;
    display: 'inline-block';
    margin: ${spacingUnit._05} auto;
  }
`;

const FeatureGrid = ({ gridItems }) => (
  <FeatureGridBlock>
    {gridItems.map(item => (
      <div key={item.text}>
        <Section>
            <FeatureBlock>
              <PreviewCompatibleImage imageInfo={item} />
            </FeatureBlock>
          <p>{item.text}</p>
        </Section>
      </div>
    ))}
  </FeatureGridBlock>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
