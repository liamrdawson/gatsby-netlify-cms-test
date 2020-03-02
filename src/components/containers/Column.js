import styled from 'styled-components'

const Column = styled.div`
    width: auto;
    flex: none;
    display: block;
    padding: .75rem;
    @media screen and (min-width: 1024px) {
        width: 250px;
    }
`;

export default Column;