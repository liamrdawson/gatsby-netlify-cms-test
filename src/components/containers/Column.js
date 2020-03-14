import styled from 'styled-components'
import {breakpoint, spacingUnit} from '../../paletteStyles'

const Column = styled.div`
    width: auto;
    flex: none;
    display: block;
    padding: ${spacingUnit._04};
    @media screen and (min-width: ${breakpoint.lg}) {
        width: 250px;
    }
`;

export default Column;