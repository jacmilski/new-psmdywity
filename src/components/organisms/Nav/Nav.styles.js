import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    z-index: 200;

    @media only screen and (min-width: 768px) {
        height: auto;
        width: 100%;
        position: relative;
        top: unset;
        left: unset;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        gap: 0;
    }
`;
