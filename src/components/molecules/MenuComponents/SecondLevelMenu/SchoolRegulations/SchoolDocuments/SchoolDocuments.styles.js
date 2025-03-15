import styled from 'styled-components';
import {
    docsLinksStyles,
    titleBannerStyles,
} from '../../../../../../styles/sharedStyles';

export const StyledSchoolDocuments = styled.div`
    ${titleBannerStyles};

    ${docsLinksStyles};

    & ul {
        margin-top: unset;
        margin-bottom: 20px;
    }
`;
