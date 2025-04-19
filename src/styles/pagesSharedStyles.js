import Styled from 'styled-components';

export const NewsContainer = Styled.section`
    width: 100%;
    padding: 40px 15px;
    background-color: var(--gray-3);

    @media only screen and (min-width: 992px) {
        width: 85%;
    }
`;

export const HorizontalDivider = Styled.div`
    width: 50%;
    height: 1px;
    margin: 20px auto;
    background-color: var(--green-2);
`;
