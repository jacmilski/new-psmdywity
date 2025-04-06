import styled from 'styled-components';

export const FilliatePageFooterWrapper = styled.div`
    //width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 10px;

    @media only screen and (min-width: 992px) {
        flex-direction: row;
    }
`;

export const LeftColumnWrapper = styled.div`
    width: 100%;

    @media only screen and (min-width: 992px) {
        width: 65%;
    }
`;

export const RightColumnWrapper = styled.div`
    width: 100%;

    @media only screen and (min-width: 992px) {
        width: 30%;
        padding-top: 20px;
    }
`;

export const LeftColumnContent = styled.div`
    padding: 20px 10px;

    & .content {
        margin-top: 10px;
    }
`;

export const RightColumnContent = styled.div`
    padding: 10px;

    & .content {
        margin-top: 20px;
    }

    & .location {
        width: 100%;
        padding: 5px;
    }

    & p {
        display: block;
        margin-bottom: 5px;
    }

    & .school-name {
        margin-bottom: 10px;
    }
`;
