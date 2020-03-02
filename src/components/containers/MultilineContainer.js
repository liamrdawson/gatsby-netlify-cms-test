import styled from 'styled-components'

const MultilineContainer = styled.div `
    max-width: 800px;
    display: flex;    
    flex-direction: column;
    margin: -0.75rem auto;
    flex-wrap: wrap;
    div {
        flex: none;
        width: 100%;
        display: block;
        padding: 0.75rem;
        flex-basis: 35%;
        flex-grow: 1;
        flex-shrink: 1;
    }
    @media screen and (max-width: 411px) {
        padding: 0;
        div {
            margin: 0;
            padding: 0;
        }
    }
`;

export default MultilineContainer;