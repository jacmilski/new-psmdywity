import styled from 'styled-components';

export const StyledDeliveringAddress = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;

    @media only screen and (min-width: 768px) {
        padding: 30px 40px;
    }

    & p {
        color: var(--black-3);
        font-size: var(--font-22);
    }
`;
