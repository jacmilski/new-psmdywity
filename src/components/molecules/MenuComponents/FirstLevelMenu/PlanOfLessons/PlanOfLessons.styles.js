import styled from 'styled-components';
import { docsLinksStyles } from '../../../../../styles/sharedStyles';

export const StyledPlanOfLessons = styled.div`
    width: 100%;
    padding: 20px;
    height: 100%;

    @media only screen and (min-width: 768px) {
        padding: 30px 40px;
    }

    ${docsLinksStyles};

    & ul {
        margin-top: unset;
        margin-bottom: 20px;
    }
`;
