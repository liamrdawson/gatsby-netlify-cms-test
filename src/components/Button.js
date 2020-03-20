import styled from 'styled-components'
import {brandStyles, spacingUnit} from '../paletteStyles'

const Button = styled.button`
    color: ${brandStyles.colorFontSecondary};
    background-color: ${brandStyles.colorBackgroundAccent};
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(${spacingUnit._03} - 1px);
    padding-left: ${spacingUnit._05};
    padding-right: ${spacingUnit._05};
    padding-top: calc(${spacingUnit._03} - 1px);
    text-align: center;
    white-space: nowrap;
    align-items: center;
    border: ${brandStyles.borderAccent};
    border-radius: ${brandStyles.borderRadius};
    display: inline-flex;
    height: 2.5em;
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