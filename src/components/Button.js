import styled from 'styled-components'
import {brandStyles, spacingUnit} from '../paletteStyles'

const Button = styled.button`
    color: ${brandStyles.colorFontSecondary};
    background-color: ${brandStyles.colorBackgroundAccent};
    cursor: pointer;
    justify-content: center;
    padding: ${spacingUnit._03} ${spacingUnit._05};
    text-align: center;
    white-space: nowrap;
    align-items: center;
    border: ${brandStyles.borderAccent};
    border-radius: ${brandStyles.borderRadius};
    display: inline-flex;
    height: 2.5rem;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    text-decoration: none;
    &:hover {
        background-color: ${brandStyles.colorBackgroundLight};
        color: ${brandStyles.colorFontAccent};
    }
`;

export default Button;