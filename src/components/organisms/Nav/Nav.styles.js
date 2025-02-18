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
    gap: 100px;
    background-color: var(--green-2);
    z-index: 102;

    @media only screen and (min-width: 768px) {
        height: auto;
        width: auto;
        position: relative;
        top: unset;
        left: unset;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

export const StyledLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
    padding-left: 68px;

    & Link {
        color: var(--white);
    }

    @media only screen and (min-width: 768px) {
        width: 70%;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        padding: none;
    }
`;
