import styled from 'styled-components'

const Button = styled.button`
    border-color: transparent;
    color: #f40;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
    border-width: 1px;
    align-items: center;
    border: 2px solid #f40;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    &:hover {
        background-color: #f40;
        color: white;
    }
`;

export default Button;