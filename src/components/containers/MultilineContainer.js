import styled from 'styled-components'
import {breakpoint, spacingUnit} from '../../paletteStyles'

const MultilineContainer = styled.div `
    max-width: 800px;
    display: flex;    
    flex-direction: column;
    margin: -${spacingUnit._04} auto;
    flex-wrap: wrap;
    div {
        flex: none;
        width: 100%;
        display: block;
        padding: ${spacingUnit._04};
        flex-basis: 35%;
        flex-grow: 1;
        flex-shrink: 1;
    }
    @media screen and (max-width: ${breakpoint.sm}) {
        padding: 0;
        div {
            margin: 0;
            padding: 0;
        }
    }
`;

export default MultilineContainer;