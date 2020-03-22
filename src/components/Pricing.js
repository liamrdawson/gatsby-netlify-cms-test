import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {brandStyles, spacingUnit} from '../paletteStyles'

const PricingColumns = styled.div`
  display: flex;
  margin-left: -${spacingUnit._04};
  margin-right: -${spacingUnit._04};
  &:last-child {
    margin-bottom: -${spacingUnit._04};
  }
`;

const PricingColumn = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${spacingUnit._04} 0;
`;

const PricingSection = styled.section`
  padding: ${spacingUnit._09} 0;
    h2 {
      font-size: ${brandStyles.fontSizeLargest};
    }
    h2, h4 {
      padding: ${spacingUnit._09} 0;
      text-align: center;
      font-weight: 700;
    }
    p {
      padding: ${spacingUnit._06} 0;
      font-weight: 600;
    }
`;

const Pricing = ({ data }) => (
  <PricingColumns>
    {data.map(price => (
      <PricingColumn>
        <PricingSection>
          <h4 >
            {price.plan}
          </h4>
          <h2 >
            £{price.price}
          </h2>
          <p>{price.description}</p>
          <ul>
            {price.items.map(item => (
              <li key={item} >
                {item}
              </li>
            ))}
          </ul>
        </PricingSection>
      </PricingColumn>
    ))}
  </PricingColumns>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
