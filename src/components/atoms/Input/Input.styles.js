import styled, { css } from 'styled-components';
import { focusVisibleStyles } from '../../../styles/sharedStyles';

const inputStyles = css`
    height: 45px;
    border: 2px solid var(--green-4);
    border-radius: 10px;
    font-size: var(--font-20);
    padding: 5px 10px;

    ${focusVisibleStyles};
`;

export const StyledInputWrapper = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: var(--yellow-2);
`;

export const StyledLabel = styled.label`
    margin-bottom: 5px;
    font-size: 20px;
`;

export const StyledError = styled.p`
    color: var(--maroon-4);
    text-align: center;
    margin-top: 5px;
`;

export const StyledTextarea = styled.textarea`
    ${inputStyles};
    height: 180px;
    resize: none;
`;

export const StyledInput = styled.input`
    ${inputStyles};
`;
