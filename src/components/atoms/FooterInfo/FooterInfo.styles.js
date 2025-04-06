import styled from 'styled-components';

export const StyledFooterInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 60px;
    background-color: var(--green-2);
`;

export const StyledInfoWrapper = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const StyledInfoContent = styled.p`
    text-align: start;
    font-size: 16px;
    color: var(--gray-3);
    padding: 20px 0;
`;
