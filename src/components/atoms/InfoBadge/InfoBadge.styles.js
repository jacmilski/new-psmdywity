import styled from 'styled-components';

export const StyledInfoBadge = styled.div`
    margin-bottom: 20px;

    & span:first-child {
        font-weight: 500;
        color: var(--black-3);
    }

    & a {
        text-decoration: none;
        color: var(--gray-mute);
        font-style: italic;
        font-weight: 500;
        transition: color 0.3s ease;

        &:hover {
            color: var(--black-3);
        }
    }
`;
