import React from 'react';
import {
    StyledError,
    StyledInput,
    StyledInputWrapper,
    StyledLabel,
    StyledTextarea,
} from './Input.styles';

const Input = ({ name, type, label, error }) => (
    <StyledInputWrapper>
        {label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
        {(() => {
            switch (type) {
                case 'textarea':
                    return <StyledTextarea id={name} name={name} />;
                default:
                    return <StyledInput id={name} name={name} type={type} />;
            }
        })()}
        {error ? <StyledError>{error}</StyledError> : null}
    </StyledInputWrapper>
);

export default Input;
