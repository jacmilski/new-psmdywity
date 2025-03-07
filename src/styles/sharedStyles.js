import { css } from 'styled-components';

export const focusVisibleStyles = css`
    &:focus-visible {
        outline-width: 1px;
        outline-style: solid;
        outline-color: var(--green-4);
        outline-offset: 3px;
    }
`;

export const newsHeadlineStyles = css`
    display: inline-block;
    color: var(--green-2);
    font-weight: 700;
    font-size: var(--font-34);
    text-align: start;

    @media only screen and (min-width: 576px) {
        font-size: var(--font-38);
    }

    @media only screen and (min-width: 768px) {
        font-size: var(--font-42);
    }
`;

export const docsLinksStyles = css`
    & ul {
        margin-top: 30px;

        & li {
            padding: 6px 0;

            & a {
                text-decoration: none;
                color: var(--black-3);
                font-size: var(--font-18);
            }
        }
    }
`;
