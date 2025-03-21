import styled from 'styled-components';
import { titleBannerStyles } from '../../../../../../styles/sharedStyles';

export const StyledArticlesWrapper = styled.div`
    ${titleBannerStyles};
`;

export const StyledGalleryWrapper = styled.div`
    width: 100%;
    padding: 20px;
`;

export const StyledGalleryItem = styled.div`
    width: '100%';
    display: 'flex';
    flex-direction: 'column';

    & .date-and-links span:first-child {
        font-weight: 500;
        color: var(--black-3);
    }

    & a {
        display: inline-block;
        padding: 0 3px;
        font-size: var(--font-16);
        font-style: italic;
        color: var(--gray-mute);
        text-decoration: none;
        cursor: pointer;
    }
`;
