import styled from 'styled-components';

export const StyledLogo = styled.div`
    width: 370px;
    height: auto;

    & img {
        width: 100%;
        height: auto;
    }

    @media only screen and (min-width: 576px) {
        width: 520px;
    }

    @media only screen and (min-width: 768px) {
        width: 221px;
    }
`;
