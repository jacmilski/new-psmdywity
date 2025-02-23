import styled from 'styled-components';
import { newsHeadlineStyles } from '../../../styles/sharedStyles';

export const StyledNewsfeedHeadline = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const StyledTitle = styled.span`
    ${newsHeadlineStyles};
`;

export const StyledFilliateName = styled.span`
    ${newsHeadlineStyles}
`;

export const StyledDivider = styled.span`
    display: none;
    width: 4px;
    height: 40px;
    background-color: var(--green-2);
    margin: 0 15px;

    @media only screen and (min-width: 768px) {
        display: inline-block;
    }
`;
