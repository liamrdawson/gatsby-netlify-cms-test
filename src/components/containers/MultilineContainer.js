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
`;

export default MultilineContainer;