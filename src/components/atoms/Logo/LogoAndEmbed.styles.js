import styled from 'styled-components';

export const StyledLogo = styled.div`
    width: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? '200px' : '221px')};
    height: auto;

    & img {
        width: 100%;
        height: auto;
    }

    @media only screen and (min-width: 768px) {
        width: 221px;
        height: auto;
    }
`;
