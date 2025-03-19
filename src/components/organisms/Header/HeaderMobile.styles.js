import styled from 'styled-components';

export const StyledHeaderWrapper = styled.header`
    display: ${({
        // @ts-ignore
        $windowWidth,
    }) => ($windowWidth < 768 ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-color: var(--green-2);
    z-index: 2000;

    & .logo {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 30px 20px 10px;
    }

    & .nav-and-asidemenu {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        height: 100%;
        padding: 20px 10px;

        & .nav {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 80px 10px 0;

            & .links-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 30px;
            }
        }
    }
`;
