import styled from 'styled-components'
import {breakpoint, spacingUnit} from '../../paletteStyles'

const Columns = styled.div`
    margin-left: ${spacingUnit._04};
    margin-right: ${spacingUnit._04};
    margin-top: ${spacingUnit._04};
    @media screen and (min-width: ${breakpoint.lg}) {
        display: flex; 
    }
    &:last-child {
        margin-bottom: ${spacingUnit._04};
    }
`;

export default Columns;