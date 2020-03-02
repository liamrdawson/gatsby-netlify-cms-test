import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MultilineContainer from './containers/MultilineContainer'
import styled from 'styled-components'
import Section from '../components/containers/Section'

const MultilineRowContainer = styled(MultilineContainer)`
  flex-direction: row;
`;

const FeatureBlock = styled.div`
    padding: 1rem 0;
    div {
        text-align: center;
        width: 240px;
        display: 'inline-block';
        margin: 1rem auto;
    }
`;

const FeatureGrid = ({ gridItems }) => (
  <MultilineRowContainer>
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
  </MultilineRowContainer>
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
