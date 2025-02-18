import styled from 'styled-components';

export const StyledHeroSection = styled.section`
    width: 100%;
    position: relative;
`;

export const GatsbyImageWrapper = styled.div`
    width: 100%;
`;

export const StyledHeroHeading = styled.h1`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--light-gray-4);
    font-size: clamp(32px, 5vw, 64px);
    text-align: center;
    z-index: 100;
    opacity: 0.7;
    letter-spacing: 0.1rem;
`;
