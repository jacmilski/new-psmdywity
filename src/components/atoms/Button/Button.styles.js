import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const basicButtonStyles = css`
    width: 100%;
    display: block;
    min-width: 200px;
    padding: 8px 4px;
    text-align: left;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--green-2);
    border-left: 3px solid var(--green-2);
    border-radius: 0 5px 5px 0;
    background-image: linear-gradient(
        to bottom right,
        var(--red-2),
        var(--yellow-3)
    );
    font-size: var(--font-18);
    font-weight: 500;

    @media only screen and (min-width: 768px) {
        font-size: var(--font-20); // tu zastosować clamp
        max-width: 300px;
    }
`;

export const StyledButtonWrapper = styled.div`
    ${basicButtonStyles};
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    font-size: var(--font-18);
    padding: 0;
    cursor: pointer;

    @media only screen and (min-width: 768px) {
        font-size: var(--font-20); // tu zastosować clamp
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;

export const StyledIcon = styled.img`
    display: inline-block;
    width: ${({
        // @ts-ignore
        $variant,
    }) => ($variant === 'violin-clef' ? '32px' : '28px')};
    height: ${({
        // @ts-ignore
        $variant,
    }) => ($variant === 'violin-clef' ? '32px' : '28px')};
`;
