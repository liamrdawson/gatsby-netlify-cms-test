import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'
import {brandStyles, spacingUnit} from '../paletteStyles'

const Message = styled.article`
  :not(:last-child) {
    margin-bottom: ${spacingUnit._06};
  }
  border-radius: ${brandStyles.borderRadius};
  div {
    border-color: ${brandStyles.borderColorBase};
    border-radius: ${brandStyles.borderRadius};
    border-style: solid;
    border-width: 0 0 0 4px;
    padding: ${spacingUnit._05} ${spacingUnit._06};
  }
`;

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <Message key={v4()} >
        <div>
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </Message>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
