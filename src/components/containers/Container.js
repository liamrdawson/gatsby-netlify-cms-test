import styled from 'styled-components';
import {breakpoint} from '../../paletteStyles'

const Container = styled.div`
    ${'' /* flex-grow: 1; */}
    margin: 0 auto;
    position: relative;
    width: auto;
    @media screen and (min-width: ${breakpoint.lg}) {
        max-width: 960px;
    }
`;

export default Container;