import styled from 'styled-components';
// @ts-ignore
import logoImage from '../../../images/logo/logo.png';

export const StyledLogo = styled.div`
    width: ${({
        // @ts-ignore
        $isOpen,
    }) => ($isOpen ? '270px' : '221px')};
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

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    background-image: url(${logoImage});
`;
