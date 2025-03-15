import styled from 'styled-components';
import {
    docsLinksStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';

export const StyledDataSecurity = styled.div`
    ${titleBannerStyles};

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
