import styled from 'styled-components';

export const StyledNav = styled.nav`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: 0;
    display: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 200;

    & .links-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: ${({
            // @ts-ignore
            $widthOfWindow,
        }) => ($widthOfWindow >= 768 ? 'flex-end' : 'center')};
        align-items: center;
        gap: 0 20px;
        padding: 10px;
        min-height: ${({
            // @ts-ignore
            $isOpen,
            // @ts-ignore
            $widthOfWindow,
        }) => (($isOpen && $widthOfWindow) < 768 ? '160px' : 'unset')};

        @media only screen and (min-width: 768px) {
            min-height: unset;
            gap: 10px 20px;
        }
    }

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
