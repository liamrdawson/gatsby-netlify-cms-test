import React from 'react'
import styled from 'styled-components'
import Columns from '../components/containers/Columns'
import {spacingUnit, breakpoint} from '../paletteStyles'

const HeadingAndText = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: ${spacingUnit._04};
    text-align: center;
    @media print, screen and (min-width: ${breakpoint.lg}) {
        flex: none;
        width: 58.33333%;
        margin: ${spacingUnit._06} auto;
    }
    h1, h2, h3 {
        line-height: 1.125;
        font-weight: 600;
    }
    h3 {
        margin-bottom: ${spacingUnit._03};
    }
    h2 {
        margin-bottom: ${spacingUnit._04};
    }
`;

export default function HeadingAndTextBlock(props) {
    return (
        <Columns>
            <HeadingAndText>
                {props.children}
            </HeadingAndText>
        </Columns>
    )
}
