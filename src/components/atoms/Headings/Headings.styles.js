import styled, { css } from 'styled-components';

const headingStyles = css`
    color: var(--green-2);
    font-weight: 700;
`;

export const StyledHeading1 = styled.h1`
    ${headingStyles}
    font-size: ${({
        // @ts-ignore
        $type,
    }) => ($type === 'h1' ? '32px' : '16px')};
    padding: 30px 30px 30px 0;
`;

export const StyledHeading2 = styled.h2`
    ${headingStyles}
    font-size: ${({
        // @ts-ignore
        $type,
    }) => ($type === 'h2' ? '28px' : '16px')};
    padding: 20px 20px 20px 0;
`;

export const StyledHeading3 = styled.h3`
    ${headingStyles}
    font-size: ${({
        // @ts-ignore
        $type,
    }) => ($type === 'h3' ? '24px' : '16px')};
    padding: 10px 10px 10px 0;
    font-style: italic;
`;
