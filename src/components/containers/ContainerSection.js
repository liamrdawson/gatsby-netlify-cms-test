import React, { Children } from 'React'
import styled from 'styled-components'

const ContainerSection = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    @media screen and (min-width: 1024px) {
        max-width: 960px;
    }
    section {
        padding: 3rem 1.5rem;
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