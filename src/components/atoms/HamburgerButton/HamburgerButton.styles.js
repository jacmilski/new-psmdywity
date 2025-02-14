import styled from 'styled-components';

export const StyledHamburgerButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 0;
    //outline: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    border-radius: 5px;

    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--green-4);
        outline-offset: -1px;
    }

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

export const StyledIcon = styled.img`
    display: inline-block;
    width: 100%;
    height: 100%;
`;
