import React from 'react'
import styled from 'styled-components'
import Columns from '../components/containers/Columns'

const HeadingAndText = styled.div`
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: .75rem;
    text-align: center;
    @media print, screen and (min-width: 769px) {
        flex: none;
        width: 58.33333%;
        margin: 1.5rem auto;
    }
    h2, h3 {
        font-size: 2.5rem;
        line-height: 1.125;
        font-weight: 600;
        color: #363636;
    }
    h3 {
        margin-bottom: 0.6666em;
    }
    h2 {
        margin-bottom: 0.5714em;
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
