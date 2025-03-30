import styled from 'styled-components';
import {
    schoolStuffContentStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';

export const StyledFrequentQuestionsWrapper = styled.section`
    ${titleBannerStyles};
`;

export const StyledContentWrapper = styled.div`
    ${schoolStuffContentStyles}
`;

export const StyledFAQWrapper = styled.div`
    width: 100%;

    & .faq-content {
        width: 100%;
        padding: 0 20px;

        & .faq-answer {
            white-space: pre-wrap;
            font-size: var(--font-16);
            color: var(--black-3);
        }

        @media only screen and (min-width: 768px) {
            padding: 0 30px;
        }
    }

    & .faq-content:first-child {
        padding-top: 30px;
    }
`;
