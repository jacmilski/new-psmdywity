import styled from 'styled-components';

export const StyledTitleBanner = styled.div`
    width: 100%;
    height: auto;
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
    & img {
        display: block;
        height: 100%;
        max-height: 150px;
        width: 100%;
    }
`;
