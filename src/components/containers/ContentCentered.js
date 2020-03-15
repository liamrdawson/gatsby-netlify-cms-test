import styled from 'styled-components'
import {spacingUnit, breakpoint} from '../../paletteStyles'

const ContentCentered = styled.div`
    max-width: 960px;
    list-style: none;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: top;
    flex-direction: row;
    li {
        padding: 0 ${spacingUnit._05} ${spacingUnit._05} 0;
        margin-bottom: ${spacingUnit._06};
        margin-top: 0;
    }
    @media screen and (min-width: ${breakpoint.lg}) {
        min-width: 800px;
    }
`;

export default ContentCentered;