import React, { Children } from 'React'
import styled from 'styled-components'
import {breakpoint, spacingUnit} from '../../paletteStyles'

const ContainerSection = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    @media screen and (min-width: ${breakpoint.lg}) {
        max-width: 960px;
    }
    section {
        padding: ${spacingUnit._09} ${spacingUnit._06};
    }
`;

const Section = () => {
    return (
        <ContainerSection>
            <section>
                {Children}
            </section>
        </ContainerSection>
    )
}

export default Section;