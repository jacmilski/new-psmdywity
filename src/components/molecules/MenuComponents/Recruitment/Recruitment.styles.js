import styled from 'styled-components';
import { docsLinksStyles } from '../../../../styles/sharedStyles';

export const StyledRecruitment = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    @media only screen and (min-width: 768px) {
        padding: 30px 40px;
    }

    ${docsLinksStyles};
`;
