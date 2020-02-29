import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PricingColumns = styled.div`
  display: flex;
  margin-left: -.75rem;
  margin-right: -.75rem;
  margin-top: -.75rem;
  &:last-child {
    margin-bottom: -.75rem;
  }
`;

const PricingColumn = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;
`;

const PricingSection = styled.section`
  padding: 3rem 1.5rem;
    h2 {
      font-size: 3rem;
      color: 
    }
    h2, h4 {
      text-align: center;
      font-weight: 700;
    }
    p {
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
