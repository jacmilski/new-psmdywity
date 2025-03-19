import styled from 'styled-components';
import {
    schoolStufContentStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';

export const StyledTeachersWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

    ${titleBannerStyles};

    & h1 {
        padding-bottom: 0;
    }

    & h2 {
        padding: 10px 0 0;
    }

    & p {
        margin-bottom: 40px;
        color: var(--black-3);
    }
`;

export const StyledContentWrapper = styled.div`
    ${schoolStufContentStyles}
`;

export const StyledHeadingsWrapper = styled.div`
    width: 100%;
    padding: 20px 20px;

    & h1 {
        padding-left: 0 !important;
    }
`;
