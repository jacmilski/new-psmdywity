import styled from 'styled-components';
import {
    schoolStuffContentStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';

export const StyledWhyWorthWrapper = styled.section`
    ${titleBannerStyles};
`;

export const StyledContentWrapper = styled.div`
    ${schoolStuffContentStyles};

    .article-element {
        width: 100%;
        padding: 20px;

        @media only screen and (min-width: 992px) {
            width: 50%;
        }
    }
`;

export const StyledArticlesWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: beige;

    & .article-element .link {
        display: block;
        max-width: 200px;

        & a {
            color: var(--gray-mute);
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    & .subtitle {
        font-weight: 700;
        margin-bottom: 10px;
    }

    @media only screen and (min-width: 992px) {
        width: 88%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;
