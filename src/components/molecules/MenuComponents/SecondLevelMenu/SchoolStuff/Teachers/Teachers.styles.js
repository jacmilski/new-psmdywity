import styled from 'styled-components';

export const StyledTeachersWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;

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

export const StyledHeadingsWrapper = styled.div`
    width: 100%;

    & h1 {
        padding-left: 0 !important;
    }
`;
