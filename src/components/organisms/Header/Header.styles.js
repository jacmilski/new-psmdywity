import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    width: 100%;
    height: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? '100vh' : 'auto')};
    display: flex;
    align-items: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? 'flex-start' : 'center')};
    justify-content: space-between;
    padding: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? '20px 20px' : '10px 20px')};
    background-color: var(--green-2);

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: auto;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;
