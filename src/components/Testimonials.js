import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'

const Message = styled.article`
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  background-color: white;
  border-radius: 4px;
  font-size: 1rem;
  div {
    border-color: #dbdbdb;
    border-radius: 4px;
    border-style: solid;
    border-width: 0 0 0 4px;
    color: #4a4a4a;
    padding: 1.25em 1.5em;
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
