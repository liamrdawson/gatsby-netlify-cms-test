import styled from 'styled-components'

const Columns = styled.div`
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    @media screen and (min-width: 769px) {
        display: flex; 
    }
    &:last-child {
        margin-bottom: -0.75rem;
    }
`;

export default Columns;