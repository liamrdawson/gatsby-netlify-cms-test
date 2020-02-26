import styled from 'styled-components'

const ContentCentered = styled.div`
    max-width: 960px;
    list-style: none;
    margin: 0 auto;
    width: 800px;
    display: flex;
    flex-grow: 1;
    justify-content: left;
    align-items: top;
    flex-direction: row;
    li {
        padding: 0 2rem 1rem 0;
        margin-bottom: 1.5rem;
        margin-top: 0;
    }
`;

export default ContentCentered;