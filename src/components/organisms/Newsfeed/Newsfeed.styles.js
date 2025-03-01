import styled, { css } from 'styled-components';

const styledLinks = css`
    font-size: var(--font-18);
    font-style: italic;
    color: var(--gray-mute);
    text-decoration: none;
`;

export const StyledNewsfeed = styled.div`
    width: 100%;
    padding: 20px 20px 0 20px;

    & h2 {
        font-size: var(--font-24);
        font-style: italic;
        font-weight: 600;
        color: var(--green-2);
        margin-bottom: 10px;
    }

    & span,
    & a {
        ${styledLinks}
    }

    & p {
        font-size: var(--font-16);
        margin-top: 8px;
        line-height: 1.4;
        margin-bottom: 20px;

        &:last-child {
            font-style: italic;
        }
    }
`;

export const StyledMediaWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    & img {
        object-fit: contain !important;
    }

    & p span {
        margin-right: 5px;
    }

    @media only screen and (min-width: 768px) {
        margin-top: 30px;

        & p {
            margin-top: 20px;
        }
    }
`;
