import styled from 'styled-components';

export const StyledFilliateInfoBanner = styled.section`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative !important;

    & .background {
        width: 100%;
        position: absolute !important;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

    @media only screen and (min-width: 576px) {
        height: 60vh;
    }

    @media only screen and (min-width: 768px) {
        height: auto;
        padding-bottom: 30px;

        .gatsby-image-wrapper {
            height: 100%;
        }
    }
`;

export const StyledFilliateContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const StyledFilliateTitle = styled.h1`
    width: 100%;
    padding: 10px;
    margin-top: 100px;
    color: var(--white);
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    line-height: 40px;

    @media only screen and (min-width: 576px) {
        margin-top: 100px;
        padding: 30px;
    }

    @media only screen and (min-width: 768px) {
        margin-top: 10px;
        padding: 30px;
        text-align: start;
        font-size: 28px;
    }
`;

export const StyledFilliateData = styled.div`
    width: 100%;

    @media only screen and (min-width: 768px) {
        width: 80%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
`;

export const StyledFilliateInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px 0;

    & p,
    & span {
        color: var(--white);
        font-size: clamp(20px, 1.3888vw, 28px);
        line-height: clamp(28px, 3.64583vw, 32px);
    }

    @media only screen and (min-width: 576px) {
        margin-bottom: 50px;
    }

    @media only screen and (min-width: 768px) {
        gap: 0;
        align-items: flex-start;
        margin-bottom: unset;
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
