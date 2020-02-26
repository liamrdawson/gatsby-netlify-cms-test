import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import MultilineContainer from './containers/MultilineContainer'
import styled from 'styled-components'

const MultilineRowContainer = styled(MultilineContainer)`
    flex-direction: row;
`;

const Section = styled.section`
  padding: 3rem 1.5rem;
    div {
      text-align: center;
      div {
        width: 240px;
        display: 'inline-block';
      }
    }
`;

const FeatureGrid = ({ gridItems }) => (
  <MultilineRowContainer>
    {gridItems.map(item => (
      <div key={item.text}>
        <Section>
          <div>
            <div>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
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
