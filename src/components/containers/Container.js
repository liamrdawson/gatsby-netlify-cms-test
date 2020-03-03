import styled from 'styled-components';

const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
    @media screen and (min-width: 1024px) {
        max-width: 960px;
    }
`;

export default Container;