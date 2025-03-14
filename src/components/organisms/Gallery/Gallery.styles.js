import styled from 'styled-components';
import { docsLinksStyles } from '../../../styles/sharedStyles';

export const StyledGalleriaWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${({
        // @ts-ignore
        $teachers,
    }) => (!$teachers ? 'row' : 'column')}; //column;
    align-items: center;
    gap: 15px;

    & h2 {
        padding: ${({
            // @ts-ignore
            $teachers,
        }) => ($teachers ? '10px 0' : '10px 20px')};
    }

    & h2 {
        padding: 0 20px 50px;
    }

    @media only screen and (min-width: 992px) {
        flex-direction: row;
        align-items: center;
        gap: 0;
    }
`;

export const StyledGalleriaDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    & h2,
    h1 {
        padding: ${({
            // @ts-ignore
            $teachers,
        }) => ($teachers ? '0' : '0 0 20px')};
    }

    & h1,
    h2,
    h3 {
        text-align: center;
    }

    & h3 {
        padding-bottom: 20px;
    }

    & figure {
        width: 100%;
        margin: 0;
    }

    @media only screen and (min-width: 768px) {
        padding: 30px 10px;

        & h1,
        h2,
        h3 {
            text-align: start;
        }
    }

    ${docsLinksStyles};

    @media only screen and (min-width: 992px) {
        padding: 30px 20px;
    }
`;

export const StyledGalleriaGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;

export const StyledGalleriaCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & figcaption {
        width: 100%;
        text-align: center;
        color: var(--black-3);
        font-size: 14px;
        padding-top: 5px;
        line-height: 1.1;

        @media only screen and (min-width: 768px) {
            text-align: start;
        }
    }
`;
