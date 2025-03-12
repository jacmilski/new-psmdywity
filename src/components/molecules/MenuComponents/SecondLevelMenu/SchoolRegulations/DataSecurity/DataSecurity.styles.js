import styled from 'styled-components';
import { docsLinksStyles } from '../../../../../../styles/sharedStyles';

export const StyledDataSecurity = styled.div`
    width: 100%;
    padding: 20px;
    height: 100%;

    @media only screen and (min-width: 768px) {
        padding: 30px 40px;
    }

    ${docsLinksStyles};

    & h3 {
        margin: 20px 0 -20px;
    }
`;

export const StyledContactWrapper = styled.div`
    width: 100%;
    & pre {
        white-space: pre-wrap;
        line-height: 1.7;
        font-size: var(--font-18);
        color: var(--black-3);
    }
`;
