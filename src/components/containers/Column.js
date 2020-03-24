import styled from 'styled-components'
import {spacingUnit, layoutUnit} from '../../paletteStyles'

const Column = styled.div`
    margin: 0 auto;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ${layoutUnit._02} ${layoutUnit._01};
    max-width: 800px;
    div {
    &(:not-last-child) {
      margin-bottom: ${spacingUnit._06};
    }
  }
`;

export default Column;