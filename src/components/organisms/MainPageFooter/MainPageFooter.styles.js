import styled, { css } from 'styled-components';

const linksStyles = css`
    color: var(--gray-mute);
    text-decoration: none;
    margin-left: 5px;

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledMainPageFooter = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 60px 0 0;
`;

export const StyledTopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;

    & .top-boxes {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: 992px) {
            width: 33%;
        }
    }

    & .top-left-box {
        @media only screen and (min-width: 992px) {
            display: flex;
            justify-content: flex-end;
        }
    }

    & .top-middle-box {
        display: block;
    }

    & .top-right-box {
    }

    @media only screen and (min-width: 992px) {
        flex-direction: row !important;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledMiddleWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    & .middle-boxes {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 15px;

        @media only screen and (min-width: 992px) {
            width: 50%;
            flex-direction: row;
        }
    }

    & .middle-boxes-image {
        @media only screen and (min-width: 992px) {
            width: 30%;
        }
    }
    & .middle-boxes-text {
        @media only screen and (min-width: 992px) {
            width: 70%;
        }
    }

    & .link {
        ${linksStyles};
    }
`;

export const StyledBottomWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background-color: var(--sage-3);
    background-image: linear-gradient(18deg, #f4ce14, var(--green-2) 85%);

    & .why-worth,
    & .slider-wrapper {
        width: 80%;
        margin: 0 auto;

        & h2 {
            color: #eac953;
        }
    }

    & .why-worth .why-worth-text {
        margin-top: 20px 0;
        padding-bottom: 30px;

        @media only screen and (min-width: 768px) {
            margin-top: 60px;
        }
        color: var(--gray-3);
    }

    @media only screen and (min-width: 992px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;

        & .why-worth,
        & .slider-wrapper {
            width: 50%;
        }

        & .why-worth {
            padding: 0 80px;
        }
    }

    &
        .slider-wrapper
        .slider-container
        .slick-slider
        .slick-list
        .slick-track
        .slick-slide {
        width: 250px !important;
        margin: 20px;
    }

    & .slider-wrapper .slider-container .slick-slider {
        width: 290px;
        height: 400px;
        margin: 20px auto 0;

        @media only screen and (min-width: 768px) {
            width: 578px;
        }
    }

    & .slider .slider-image p {
        display: block;
        width: 100%;
        text-align: center;
        font-size: var(--font-size-18);
        padding: 7px 0;
        color: var(--gray-3);
    }

    & .link {
        ${linksStyles};
    }
`;
