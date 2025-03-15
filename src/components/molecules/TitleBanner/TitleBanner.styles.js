import styled from 'styled-components';

export const StyledTitleBanner = styled.div`
    width: 100%;
    height: 100px;
    min-height: 80px;
    position: relative;
`;

export const StyledTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    color: var(--white);
`;

export const StyledBgImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    & img {
        display: block;
        height: 100%;
        max-height: 150px;
        width: 100%;
    }
`;
