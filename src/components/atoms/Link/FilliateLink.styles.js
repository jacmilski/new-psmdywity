import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const StyledLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
`;

export const StyledLinkIcon = styled.img`
    display: inline-block;
    width: var(--font-28);
    height: var(--font-28);
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
    font-weight: 700;
    font-size: var(--font-28);
    font-family: 'Days One', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        font-size: var(--font-20);
        margin-right: 20px;
    }
`;
