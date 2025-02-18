import styled from 'styled-components';

export const StyledFilliateInfoBanner = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .gatsby-image-wrapper {
        height: 100%;
    }

    @media only screen and (min-width: 576px) {
        height: 60vh;
    }
`;

export const StyledFilliateContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 30px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
    top: 0;
    left: 0;
    z-index: 100;
`;

export const StyledFilliateTitle = styled.h1`
    width: 100%;
    color: var(--white);
    font-size: 32px; //clamp(32px, 2.6389vw, 40px);
    text-align: start;
    font-weight: 700;
    line-height: 50px;
`;

export const StyledFilliateData = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const StyledFilliateInfo = styled.div`
    width: 100%;

    & p,
    & span {
        color: var(--white);
        font-size: clamp(22px, 1.5278vw, 28px);
        line-height: clamp(38px, 2.6389vw, 44px);
    }

    @media only screen and (min-width: 768px) {
        width: 70%;
    }
`;

export const StyledFilliateLogo = styled.div`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        width: clamp(150px, 10.4167vw, 250px);
        height: clamp(150px, 10.4167vw, 250px);
    }
`;
